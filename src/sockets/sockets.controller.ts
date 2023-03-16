import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocketsService } from './sockets.service';

@ApiTags('sockets')
@Controller('sockets')
export class SocketsController {
  constructor(private readonly socketsService: SocketsService) {}

  @Get('/')
  async getCoinList() {
    const result = await this.socketsService.getCoinList();
    return result;
  }

  // @Get('/open')
  // async open() {
  //   await this.socketsService.open();
  //   return;
  // }

  @Get('/price')
  getPrice() {
    return this.socketsService.getPrice();
  }
}
