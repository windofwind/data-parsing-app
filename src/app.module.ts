/**
 * pnpm @nestjs/swagger @nestjs/schedule @compodoc/compodoc class-transformer class-validator config dotenv @nestjs/event-emitter
 * pnpm add -D @types/cron @types/config
 */
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppService } from './app.service';
import { HankyungModule } from './hankyung/hankyung.module';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';
import { CoinglassModule } from './coinglass/coinglass.module';
import { AlternativeModule } from './alternative/alternative.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { XangleModule } from './xangle/xangle.module';
import { SocketsModule } from './sockets/sockets.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    HankyungModule,
    CoinmarketcapModule,
    CoinglassModule,
    AlternativeModule,
    XangleModule,
    SocketsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
