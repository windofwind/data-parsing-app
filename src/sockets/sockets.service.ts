import { Injectable } from '@nestjs/common';
import { UpbitSocket } from './action/upbit-socket.class';

@Injectable()
export class SocketsService {
  protected upbit: UpbitSocket = new UpbitSocket();

  async getCoinList() {
    const result = await this.upbit.getCoinList();
    return result;
  }

  async open() {
    await this.upbit.open(['KRW-BTC']);
    return;
  }

  getPrice() {
    return this.upbit.getPrice('KRW');
  }
}
