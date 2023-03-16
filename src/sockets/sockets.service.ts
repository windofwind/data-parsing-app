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
      this.upbit.open([]);
    });

    this.coinone = new CoinoneSocket();
    this.coinone.getCoinList().then((data) => {
      this.coinone.open([]);
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
