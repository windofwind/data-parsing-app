import axios from 'axios';
import { CustomError } from '../../common/error.class';
import {
  IUpbitMarket,
  IUpbitMarketItem,
  IUpbitTicker,
} from './schema/upbit.interface';
import { client as Socket } from 'websocket';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from 'stream';
import { IMarketSocket } from './schema/market-socket.interface';

export class UpbitSocket
  extends EventEmitter
  implements IMarketSocket<IUpbitMarket>
{
  protected baseUrl: string = 'https://api.upbit.com';
  protected url: string = '/v1/market/all';
  protected coinList: IUpbitMarket;

  protected socket: Socket;
  protected socketUrl: string = 'wss://api.upbit.com/websocket/v1';
  protected coinPrice: Record<string, any> = { KRW: {}, BTC: {}, USDT: {} };

  /**
   * 코인 리스트 가져오기
   *
   * @return {*}
   * @memberof Upbit
   */
  async getCoinList(): Promise<IUpbitMarket> {
    let result: IUpbitMarket;
    try {
      const res = await axios({
        method: 'GET',
        baseURL: this.baseUrl,
        url: this.url,
      });

      result = res.data.reduce(
        (
          acc: Record<string, any>,
          item: {
            market: string;
            korean_name: string;
            english_name: string;
            market_warning?: string;
          },
        ) => {
          const splitData = item.market.split('-');
          const data: IUpbitMarketItem = {
            marketName: item.market,
            currency: splitData[0],
            targetCurrency: splitData[1],
          };

          if (!acc.hasOwnProperty(data.currency)) {
            acc[data.currency] = {};
          }
          acc[data.currency][data.targetCurrency] = data;

          return acc;
        },
        {},
      );
    } catch (e) {
      console.error(e);

      throw new CustomError('getCoinList');
    }

    return result;
  }

  /**
   * 소켓 연결
   *
   * @param {string[]} coinSymbols
   * @memberof Upbit
   */
  async open(coinList: string[]) {
    console.info('upbit-socket open');

    let codes = coinList;

    if (!coinList.length) {
      codes = this.getPrice()['KRW'].map((item: any) => item.marketName);
    }

    if (this.socket) {
      this.socket.removeAllListeners('message');
      this.socket.removeAllListeners('connect');
    }

    this.socket = new Socket();

    this.socket.addListener('connect', (connection) => {
      connection.addListener('message', (message: any) => {
        const data = Buffer.from(message.binaryData).toString('utf8');

        const item: IUpbitTicker = JSON.parse(data);
        const splitItemMarket = item.code.split('-');
        item.currency = splitItemMarket[0];
        item.targetCurrency = splitItemMarket[1];

        if (!this.coinPrice.hasOwnProperty(item.currency)) {
          this.coinPrice[item.currency] = {};
        }
        this.coinPrice[item.currency][item.targetCurrency] = item;
        this.emit('onChange', item);
      });

      const opt = [{ ticket: uuidv4() }, { type: 'ticker', codes }];
      connection.send(JSON.stringify(opt));
    });

    this.socket.connect(this.socketUrl);
  }

  getPrice() {
    return this.coinPrice;
  }
}
