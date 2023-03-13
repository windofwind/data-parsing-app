import { Module } from '@nestjs/common';
import { CoinmarketcapController } from './coinmarketcap.controller';
import { CoinmarketcapService } from './coinmarketcap.service';

@Module({
  controllers: [CoinmarketcapController],
  providers: [CoinmarketcapService],
})
export class CoinmarketcapModule {}
