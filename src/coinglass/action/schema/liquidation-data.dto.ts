import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import {
  ICoin,
  IData,
  IEx,
  IInfo,
  ILiquidationData,
  IMaxLiquidationOrder,
} from './liquidation-data.interface';

export class MaxLiquidationOrder implements IMaxLiquidationOrder {
  @ApiProperty()
  id: number;

  @ApiProperty()
  tradeId: string;

  @ApiProperty()
  exchangeName: string;

  @ApiProperty()
  originalSymbol: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  volUsd: number;

  @ApiProperty()
  side: number;

  @ApiProperty()
  type: number;

  @ApiProperty()
  turnoverTime: number;

  @ApiProperty()
  createTime: number;

  @ApiProperty()
  quoteCurrency: string;

  @ApiProperty()
  exchangeLogo: string;

  @ApiProperty()
  symbolLogo: string;
}

export class Info implements IInfo {
  @ApiProperty()
  h1TotalVolUsd: number;

  @ApiProperty()
  h1Amount: number;

  @ApiProperty()
  h4TotalVolUsd: number;

  @ApiProperty()
  h4Amount: number;

  @ApiProperty()
  h12TotalVolUsd: number;

  @ApiProperty()
  h12Amount: number;

  @ApiProperty()
  h24TotalVolUsd: number;

  @ApiProperty()
  h24Amount: number;

  @ApiProperty()
  h24Chain: number;

  @ApiProperty()
  liquidationH24Num: number;

  @ApiProperty()
  maxLiquidationOrder: MaxLiquidationOrder;
}

export class Ex implements IEx {
  @ApiProperty()
  number: number;

  @ApiProperty()
  shortRate: number;

  @ApiProperty({ name: 'longRate', description: '롱 레이트' })
  longRate: number;

  @ApiProperty()
  longVolUsd: number;

  @ApiProperty({ name: 'rate', description: '비율정보' })
  rate: number;

  @ApiProperty()
  shortVolUsd: number;

  @ApiProperty({ name: 'exchangeName', description: '거래소 이름' })
  exchangeName: string;

  @ApiProperty()
  totalVolUsd: number;

  @ApiProperty()
  averagePrice: number;

  @ApiProperty()
  exchangeLogo: string;
}

export class Coin implements ICoin {
  @ApiProperty()
  number: number;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  longVolUsd: number;

  @ApiProperty()
  shortVolUsd: number;

  @ApiProperty()
  symbolLogo: string;

  @ApiProperty()
  totalVolUsd: number;
}

export class Data implements IData {
  @IsArray()
  @ApiProperty({ name: 'ex', type: [Ex] })
  ex: Ex[];

  @ApiProperty()
  info: Info;

  @IsArray()
  @ApiProperty()
  coin: Coin[];
}

export class resLiquidationData implements ILiquidationData {
  @ApiProperty()
  code: string;

  @ApiProperty()
  msg: string;

  @ApiProperty()
  data: Data;

  @ApiProperty()
  success: boolean;
}
