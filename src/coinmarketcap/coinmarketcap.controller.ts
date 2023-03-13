import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { dtoGainersLosser } from './action/schma/gainers-losser.dto';
import { CoinmarketcapService } from './coinmarketcap.service';

@ApiTags('Coinmarketcap')
@Controller('coinmarketcap')
export class CoinmarketcapController {
  constructor(private readonly coinmarketcapService: CoinmarketcapService) {}

  @Get('/GainersLosser')
  @ApiResponse({
    status: 200,
    description: 'Get Gainers Losser',
    type: dtoGainersLosser,
  })
  async getGainersLosser() {
    const result = this.coinmarketcapService.handleCronGainersLosser();
    return result;
  }
}
