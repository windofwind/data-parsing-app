import { Injectable } from '@nestjs/common';
import { CoinoneSocket } from './action/coinone-socket.class';
import { UpbitSocket } from './action/upbit-socket.class';

@Injectable()
export class SocketsService {
  protected upbit: UpbitSocket;
  protected coinone: CoinoneSocket;

  constructor() {
    this.upbit = new UpbitSocket();
    this.upbit.getCoinList().then((data) => {
      console.info('upbit-socket open');
      this.upbit.open(['KRW-BTC', 'KRW-ETH', 'KRW-NEO']);
    });

    this.coinone = new CoinoneSocket();
    this.coinone.open([]);
  }

  async getUpbitCoinListRefresh() {
    const result = await this.upbit.getCoinList();
    return result;
  }

  getUpbitPrice() {
    return this.upbit.getPrice()['KRW'];
  }
}
