import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { resLiquidationData } from './action/schema/liquidation-data.dto';
import { CoinglassService } from './coinglass.service';

@ApiTags('coinglass')
@Controller('coinglass')
export class CoinglassController {
  constructor(private readonly coinglassService: CoinglassService) {}

  @Get('/liquidation')
  @ApiResponse({
    status: 200,
    description: 'Get Liquidation Data',
    type: resLiquidationData,
  })
  async getLiquidation() {
    const result = await this.coinglassService.getLiquidationData();
    return result;
  }
}
