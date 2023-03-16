import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { XangleService } from './xangle.service';

@ApiTags('xangle')
@Controller('xangle')
export class XangleController {
  constructor(private readonly xangle: XangleService) {}
  @Get('/price')
  async getCoinPrice() {
    const result = await this.xangle.getUpbitPrice();
    return result;
  }
}
