import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResMajorIndices } from './action/schma/major-indices.dto';
import { IMajorIndices } from './action/schma/major-indices.interface';
import { HankyungService } from './hankyung.service';

@ApiTags('hankyung')
@Controller('hankyung')
export class HankyungController {
  constructor(private readonly hankyung: HankyungService) {}

  @Get('/major-indices')
  @ApiOperation({
    summary: '한경데이터센터 - 해외지수 가져오기',
    description: '한경데이터센터 - 해외지수 가져오기',
  })
  @ApiResponse({
    status: 200,
    type: ResMajorIndices,
  })
  async HandlerGetMajorIndices(): Promise<ResMajorIndices> {
    const result = new ResMajorIndices();

    result.success = true;
    result.data = await this.hankyung.getMajorIndices();

    return result;
  }
}
