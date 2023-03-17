import { client as Socket, IUtf8Message } from 'websocket';
import { EventEmitter } from 'stream';
import { IMarketSocket } from './schema/market-socket.interface';
import { CustomError } from '@app/common/error.class';
import {
  IBithumbCoinList,
  IBithumbTicker,
} from './schema/bithumb-socket.interface';
import axios from 'axios';

export class BithumbSocket
  extends EventEmitter
  implements IMarketSocket<IBithumbCoinList>
{
  protected baseUrl = 'https://api.bithumb.com';
  protected url = '/public/ticker/ALL_';
  protected coinList: IBithumbCoinList;
  protected coinPrice: Record<string, any> = {};

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
      this.coinList = result;
    } catch (e) {
      console.error(e);

      throw new CustomError('BithumbSocket getCoinList error');
    }

    return result;
  }

  open(coinList: string[]) {
    console.info('bithumb-socket open');

    let symbols = coinList;

    if (!coinList.length) {
      symbols = [];
      for (const key in this.coinList.data) {
        symbols.push(`${key}_KRW`);
      }
    }

    if (this.socket) {
      this.socket.removeAllListeners('message');
      this.socket.removeAllListeners('connect');
    }

    this.socket = new Socket();
    this.socket.addListener('connect', (connection) => {
      connection.addListener('message', (msg) => {
        const data = msg as IUtf8Message;

        const item: IBithumbTicker = JSON.parse(data.utf8Data.toString());

        if (item.type && item.type === 'ticker') {
          const splitItemMarket = item.content.symbol.split('_');
          const currency = splitItemMarket[1];
          const targetCurrency = splitItemMarket[0];
          item.content.market = 'bithumb';
          item.content.currency = currency;
          item.content.targetCurrency = targetCurrency;

          if (!this.coinPrice[currency]) {
            this.coinPrice[currency] = {};
          }

          this.coinPrice[currency][targetCurrency] = item.content;

          this.emit('onChange', item.content);
        }
      });

      connection.send(
        JSON.stringify({
          type: 'ticker',
          symbols,
          tickTypes: ['30M', '1H', '12H', '24H', 'MID'],
        }),
      );
    });

    this.socket.connect(this.socketUrl);
  }

  getPrice(): any {
    return this.coinPrice;
  }
}
