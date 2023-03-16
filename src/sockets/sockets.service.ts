import { Injectable } from '@nestjs/common';
import { data } from 'cheerio/lib/api/attributes';
import { BithumbSocket } from './action/bithumb-socket.class';
import { CoinoneSocket } from './action/coinone-socket.class';
import { UpbitSocket } from './action/upbit-socket.class';

@Injectable()
export class SocketsService {
  protected upbit: UpbitSocket;
  protected coinone: CoinoneSocket;
  protected bithumb: BithumbSocket;

  constructor() {
    this.upbit = new UpbitSocket();
    this.upbit.getCoinList().then((data) => {
      this.upbit.open([]);
    });

    this.coinone = new CoinoneSocket();
    this.coinone.getCoinList().then((data) => {
      this.coinone.open([]);
    });

    this.bithumb = new BithumbSocket();
    this.bithumb.getCoinList().then((data) => {
      this.bithumb.open([]);
    });
  }

  async getUpbitCoinListRefresh() {
    const result = await this.upbit.getCoinList();
    return result;
  }

  getUpbitPrice() {
    return this.upbit.getPrice()['KRW'];
  }
}
