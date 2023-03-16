import { client as Socket, IUtf8Message } from 'websocket';
import { EventEmitter } from 'stream';
import { IMarketSocket } from './schema/market-socket.interface';
import { CustomError } from '@app/common/error.class';
import { IBithumbCoinList } from './schema/bithumb-socket.interface';
import axios from 'axios';

export class BithumbSocket
  extends EventEmitter
  implements IMarketSocket<IBithumbCoinList>
{
  protected baseUrl = 'https://api.bithumb.com';
  protected url = '/public/ticker/ALL_';

  protected socket: Socket;
  protected socketUrl: string = 'wss://pubwss.bithumb.com/pub/ws';

  async getCoinList(): Promise<IBithumbCoinList> {
    let result;
    try {
      const res = await axios({
        method: 'GET',
        baseURL: this.baseUrl,
        url: this.url + 'KRW',
      });

      result = res.data as IBithumbCoinList;
    } catch (e) {
      console.error(e);

      throw new CustomError('BithumbSocket getCoinList error');
    }

    return result;
  }

  async open(coinList: string[]) {
    console.info('bithumb-socket open');
    let result;

    try {
      this.socket = new Socket();
      this.socket.addListener('connect', (connection) => {
        connection.addListener('message', (msg) => {
          const pattern = msg as IUtf8Message;

          this.emit('onChange', pattern);
        });

        connection.send(
          JSON.stringify({
            type: 'ticker',
            symbols: ['BTC_KRW'],
            tickTypes: ['30M', '1H', '12H', '24H', 'MID'],
          }),
        );
      });

      this.socket.connect(this.socketUrl);
    } catch (e) {
      throw new CustomError('');
    }

    return result;
  }

  getPrice(): any {
    return {};
  }
}
