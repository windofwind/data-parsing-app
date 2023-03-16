import { Module } from '@nestjs/common';
import { XangleService } from './xangle.service';
import { XangleController } from './xangle.controller';

@Module({
  providers: [XangleService],
  controllers: [XangleController],
})
export class XangleModule {}
