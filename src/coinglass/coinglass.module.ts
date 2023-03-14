import { Module } from '@nestjs/common';
import { CoinglassService } from './coinglass.service';
import { CoinglassController } from './coinglass.controller';

@Module({
  providers: [CoinglassService],
  controllers: [CoinglassController],
})
export class CoinglassModule {}
