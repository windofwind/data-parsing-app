import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocketsService } from './sockets.service';

@ApiTags('sockets')
@Controller('sockets')
export class SocketsController {
  constructor(private readonly socketsService: SocketsService) {}

  @Get('/upbit-coin-refresh')
  async getUpbitCoinListRefresh() {
    const result = await this.socketsService.getUpbitCoinListRefresh();
    return result;
  }

  // @Get('/open')
  // async open() {
  //   await this.socketsService.open();
  //   return;
  // }

  @Get('/upbit-price')
  getUpbitPrice() {
    return this.socketsService.getUpbitPrice();
  }
}
