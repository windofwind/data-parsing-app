import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: '기본 경로',
    description: 'status: 200, message: "Hello World!"',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
