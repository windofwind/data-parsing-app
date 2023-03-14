import { Module } from '@nestjs/common';
import { AlternativeService } from './alternative.service';
import { AlternativeController } from './alternative.controller';

@Module({
  providers: [AlternativeService],
  controllers: [AlternativeController]
})
export class AlternativeModule {}
