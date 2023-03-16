import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsObject, IsString } from 'class-validator';
import { dtoBase } from './../../../common/Base.dto';
import { IDatum, IFearPoint, IMetadata } from './fear-point.interface';

export class Metadata implements IMetadata {
  error: null;
}

export class Datum implements IDatum {
  @IsString()
  @ApiProperty()
  value: string;

  @IsString()
  @ApiProperty()
  value_classification: string;

  @IsDate()
  @ApiProperty()
  timestamp: Date;

  @IsString()
  @ApiProperty()
  time_until_update: string;
}

export class FearPoint implements IFearPoint {
  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @ApiProperty({ type: [Datum] })
  data: Datum[];

  @IsObject()
  @ApiProperty({ type: Metadata })
  metadata: Metadata;
}

export class resFearPoint extends dtoBase {
  @IsArray()
  @ApiProperty({ type: [Datum] })
  data: Datum[];
}
