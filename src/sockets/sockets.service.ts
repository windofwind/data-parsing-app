import { Injectable } from '@nestjs/common';
import { UpbitSocket } from './action/upbit-socket.class';

@Injectable()
export class SocketsService {
  protected upbit: UpbitSocket;

  constructor() {
    this.upbit = new UpbitSocket();
    this.getCoinList().then((data) => {
      this.upbit.open(['KRW-BTC']);
    });
  }

  async getCoinList() {
    const result = await this.upbit.getCoinList();
    return result;
  }

  async open() {
    await this.upbit.open(['KRW-BTC']);
    return;
  }

  getPrice() {
    return this.upbit.getPrice()['KRW'];
  }
}
