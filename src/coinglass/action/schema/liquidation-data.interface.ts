export interface IMaxLiquidationOrder {
  id: number;
  tradeId: string;
  exchangeName: string;
  originalSymbol: string;
  symbol: string;
  price: number;
  qty: number;
  volUsd: number;
  side: number;
  type: number;
  turnoverTime: number;
  createTime: number;
  quoteCurrency: string;
  exchangeLogo: string;
  symbolLogo: string;
}

export interface IInfo {
  h1TotalVolUsd: number;
  h1Amount: number;
  h4TotalVolUsd: number;
  h4Amount: number;
  h12TotalVolUsd: number;
  h12Amount: number;
  h24TotalVolUsd: number;
  h24Amount: number;
  h24Chain: number;
  liquidationH24Num: number;
  maxLiquidationOrder: IMaxLiquidationOrder;
}

export interface IEx {
  number: number;
  shortRate: number;
  longRate: number;
  longVolUsd: number;
  rate: number;
  shortVolUsd: number;
  exchangeName: string;
  totalVolUsd: number;
  averagePrice: number;
  exchangeLogo: string;
}

export interface ICoin {
  number: number;
  symbol: string;
  amount: number;
  longVolUsd: number;
  shortVolUsd: number;
  symbolLogo: string;
  totalVolUsd: number;
}

export interface IData {
  ex: IEx[];
  info: IInfo;
  coin: ICoin[];
}

export interface ILiquidationData {
  code: string;
  msg: string;
  data: IData;
  success: boolean;
}
