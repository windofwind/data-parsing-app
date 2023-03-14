import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsObject } from 'class-validator';
import {
  ICoin,
  IData,
  IEx,
  IInfo,
  ILiquidationData,
  IMaxLiquidationOrder,
} from './liquidation-data.interface';

export class MaxLiquidationOrder implements IMaxLiquidationOrder {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  tradeId: string;

  @ApiProperty({ type: String })
  exchangeName: string;

  @ApiProperty({ type: String })
  originalSymbol: string;

  @ApiProperty({ type: String })
  symbol: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: Number })
  qty: number;

  @ApiProperty({ type: Number })
  volUsd: number;

  @ApiProperty({ type: Number })
  side: number;

  @ApiProperty({ type: Number })
  type: number;

  @ApiProperty({ type: Number })
  turnoverTime: number;

  @ApiProperty({ type: Number })
  createTime: number;

  @ApiProperty({ type: String })
  quoteCurrency: string;

  @ApiProperty({ type: String })
  exchangeLogo: string;

  @ApiProperty({ type: String })
  symbolLogo: string;
}

export class Info implements IInfo {
  @ApiProperty({ type: Number })
  h1TotalVolUsd: number;

  @ApiProperty({ type: Number })
  h1Amount: number;

  @ApiProperty({ type: Number })
  h4TotalVolUsd: number;

  @ApiProperty({ type: Number })
  h4Amount: number;

  @ApiProperty({ type: Number })
  h12TotalVolUsd: number;

  @ApiProperty({ type: Number })
  h12Amount: number;

  @ApiProperty({ type: Number })
  h24TotalVolUsd: number;

  @ApiProperty({ type: Number })
  h24Amount: number;

  @ApiProperty({ type: Number })
  h24Chain: number;

  @ApiProperty({ type: Number })
  liquidationH24Num: number;

  @ApiProperty({ type: MaxLiquidationOrder })
  maxLiquidationOrder: MaxLiquidationOrder;
}

export class Ex implements IEx {
  @ApiProperty({ type: Number })
  number: number;

  @ApiProperty({ type: Number })
  shortRate: number;

  @ApiProperty({ name: 'longRate', description: '롱 레이트' })
  longRate: number;

  @ApiProperty({ type: Number })
  longVolUsd: number;

  @ApiProperty({ name: 'rate', description: '비율정보' })
  rate: number;

  @ApiProperty({ type: Number })
  shortVolUsd: number;

  @ApiProperty({
    name: 'exchangeName',
    description: '거래소 이름',
    type: String,
  })
  exchangeName: string;

  @ApiProperty({ type: Number })
  totalVolUsd: number;

  @ApiProperty({ type: Number })
  averagePrice: number;

  @ApiProperty({ type: String })
  exchangeLogo: string;
}

export class Coin implements ICoin {
  @ApiProperty({ type: Number })
  number: number;

  @ApiProperty({ type: String })
  symbol: string;

  @ApiProperty({ type: Number })
  amount: number;

  @ApiProperty({ type: Number })
  longVolUsd: number;

  @ApiProperty({ type: Number })
  shortVolUsd: number;

  @ApiProperty({ type: String })
  symbolLogo: string;

  @ApiProperty({ type: Number })
  totalVolUsd: number;
}

export class Data implements IData {
  @IsArray()
  @ApiProperty({ name: 'ex', type: [Ex] })
  ex: Ex[];

  @IsObject()
  @ApiProperty({ name: 'info', type: Info })
  info: Info;

  @IsArray()
  @ApiProperty({ name: 'coin', type: [Coin] })
  coin: Coin[];
}

export class resLiquidationData implements ILiquidationData {
  @ApiProperty()
  code: string;

  @ApiProperty()
  msg: string;

  @ApiProperty({ type: Data })
  data: Data;

  @ApiProperty()
  success: boolean;
}
