import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AlternativeService } from './alternative.service';

@ApiTags('alternative')
@Controller('alternative')
export class AlternativeController {
  constructor(private readonly alternativeService: AlternativeService) {}

  @Get('/fear-point')
  async getFearPoint() {
    const result = await this.alternativeService.getFearPoint();
    return result;
  }
}
