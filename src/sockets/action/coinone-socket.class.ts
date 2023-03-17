import axios from 'axios';
import { ParseError } from '../../common/error.class';
import { EventEmitter } from 'stream';
import { IMarketSocket } from './schema/market-socket.interface';
import { client as Socket, IUtf8Message } from 'websocket';
import { ICoinoneTicker } from './schema/coinone-socket.interface';

export class CoinoneSocket extends EventEmitter implements IMarketSocket<any> {
  protected baseUrl: string = 'https://api.coinone.co.kr';
  protected url: string = '/public/v2/ticker_new';

  protected coinList: any = { KRW: {}, BTC: {}, USDT: {} };

  protected socket: Socket;
  protected socketUrl: string = 'wss://wss.coinone.co.kr/ws';

  protected coinPrice: Record<string, any> = { KRW: {}, BTC: {}, USDT: {} };
  protected BeforePrice: Record<string, any> = { KRW: {}, BTC: {}, USDT: {} };

  async getCoinList(): Promise<any> {
    let result;
    try {
      const res = await axios({
        method: 'GET',
        baseURL: this.baseUrl,
        url: this.url + '/KRW',
      });
      result = res.data;
    } catch (e) {
      console.error(e);

      throw new ParseError('Coinone.getCoinList');
    }

    return result;
  }

  open(coinList: string[]) {
    console.info('coinone-socket open');

    if (this.socket) {
      this.socket.removeAllListeners('message');
      this.socket.removeAllListeners('connect');
    }

    this.socket = new Socket();

    this.socket.addListener('connect', (connection) => {
      connection.addListener('message', (msg) => {
        const pattern = msg as IUtf8Message;

        const data = JSON.parse(pattern.utf8Data.toString());

        if (data.channel === 'ticker_all' && data.data) {
          const parseData = data.data?.reduce(
            (acc: any, item: ICoinoneTicker): Record<string, any> => {
              try {
                const splitItemMarket = item.trading_pair.split('-');
                item.currency = splitItemMarket[1];
                item.targetCurrency = splitItemMarket[0];

                if (!acc.hasOwnProperty(item.currency)) {
                  acc[item.currency] = {};
                }

                acc[item.currency][item.targetCurrency] = item;
              } catch (e) {
                console.error(e);
              }

              return acc;
            },
            {},
          );

          // const changeData = parseData.each((element: any) => {
          //   // element
          // });

          this.BeforePrice.KRW = this.coinPrice.KRW;
          this.coinPrice.KRW = parseData;
        }
      });

      const opt = {
        channel: 'ticker_all',
        event: 'subscribe',
        market: 'krw',
      };
      connection.send(JSON.stringify(opt));
    });

    this.socket.connect(this.socketUrl);
  }

  getPrice() {
    return this.coinPrice;
  }
}
