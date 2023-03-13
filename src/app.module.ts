/**
 * pnpm @nestjs/swagger @nestjs/schedule @compodoc/compodoc class-transformer class-validator config dotenv
 * pnpm add -D @types/cron @types/config
 */
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppService } from './app.service';
import { HankyungModule } from './hankyung/hankyung.module';

@Module({
  imports: [ScheduleModule.forRoot(), HankyungModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
