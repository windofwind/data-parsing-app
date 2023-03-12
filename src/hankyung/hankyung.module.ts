/**
 * pnpm add axios cheerio
 */
import { Module } from '@nestjs/common';
import { HankyungService } from './hankyung.service';
import { HankyungController } from './hankyung.controller';

@Module({
  providers: [HankyungService],
  controllers: [HankyungController],
})
export class HankyungModule {}
