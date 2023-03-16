/**
 * pnpm add uuid websocket
 * pnpm add @types/uuid @types/websocket -D
 */
import { Module } from '@nestjs/common';
import { SocketsService } from './sockets.service';
import { SocketsController } from './sockets.controller';

@Module({
  providers: [SocketsService],
  controllers: [SocketsController],
})
export class SocketsModule {}
