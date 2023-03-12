import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HankyungService } from './hankyung.service';

@ApiTags('hankyung')
@Controller('hankyung')
export class HankyungController {
  constructor(private readonly hankyung: HankyungService) {}

  @Get('/')
  @ApiOperation({
    summary: '기본 경로',
    description: '기본 경로',
  })
  async defaultGet() {
    return {};
  }

  @Get('/major-indices')
  @ApiOperation({
    summary: '한경데이터센터 - 해외지수 가져오기',
    description: '한경데이터센터 - 해외지수 가져오기',
  })
  async HandlerGetMajorIndices() {
    const result = await this.hankyung.getMajorIndices();
    return result;
  }
}
