import { IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import dayjs from 'dayjs';

export class dtoBase {
  @IsBoolean()
  @ApiProperty({ name: 'success', description: '성공여부' })
  success: boolean;

  @IsNumber()
  @ApiProperty({ name: 'datetime', description: 'datetime' })
  datetime: number;

  constructor() {
    this.datetime = dayjs().valueOf();
  }
}
