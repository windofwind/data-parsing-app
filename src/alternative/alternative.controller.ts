import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { resFearPoint } from './action/schema/fear-point.dto';
import { AlternativeService } from './alternative.service';

@ApiTags('alternative')
@Controller('alternative')
export class AlternativeController {
  constructor(private readonly alternativeService: AlternativeService) {}

  @Get('/fear-point')
  @ApiResponse({
    status: 200,
    description: 'Get Fear Point',
    type: resFearPoint,
  })
  async getFearPoint() {
    const result = new resFearPoint();
    const { data } = await this.alternativeService.getFearPoint();
    result.data = data || [];
    result.success = true;

    return result;
  }
}
