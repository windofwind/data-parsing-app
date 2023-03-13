import { ApiProperty } from '@nestjs/swagger';

export enum StatusEnum {
  Active = 'active',
}

export class PriceChange {
  @ApiProperty({ type: Number })
  price: number;
  @ApiProperty({ type: Number })
  priceChange1h: number;
  @ApiProperty({ type: Number })
  priceChange24h: number;
  @ApiProperty({ type: Number })
  priceChange7d: number;
  @ApiProperty({ type: Number })
  priceChange30d: number;
  @ApiProperty({ type: Number })
  volume24h: number;
  @ApiProperty({ type: Number })
  lastUpdate: Date;
}

export class ErList {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  symbol: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: Number })
  rank: number;

  @ApiProperty({ type: String, enum: StatusEnum })
  status: StatusEnum;

  @ApiProperty({ type: Number })
  marketCap: number;

  @ApiProperty({ type: Number })
  selfReportedMarketCap: number;

  @ApiProperty({ type: PriceChange })
  priceChange: PriceChange;
}

export class GainersLosserData {
  @ApiProperty({ type: [ErList], name: 'gainerList' })
  gainerList: ErList[];

  @ApiProperty({ type: [ErList], name: 'loserList' })
  loserList: ErList[];
}

export class StatusClass {
  @ApiProperty({ type: Date, name: 'timestamp' })
  timestamp: Date;

  @ApiProperty({ type: String, name: 'error_code' })
  error_code: string;

  @ApiProperty({ type: String, name: 'error_message' })
  error_message: string;

  @ApiProperty({ type: String, name: 'elapsed' })
  elapsed: string;

  @ApiProperty({ type: Number, name: 'credit_count' })
  credit_count: number;
}

export class dtoGainersLosser {
  @ApiProperty({ type: GainersLosserData })
  data: GainersLosserData;

  @ApiProperty({ type: StatusClass })
  status: StatusClass;
}
