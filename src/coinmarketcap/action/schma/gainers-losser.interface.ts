export interface IGainersLosser {
  data: IGainersLosserData;
  status: StatusClass;
}

export interface IGainersLosserData {
  gainerList: IErList[];
  loserList: IErList[];
}

export interface IErList {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  rank: number;
  status: IStatusEnum;
  marketCap: number;
  selfReportedMarketCap: number;
  priceChange: IPriceChange;
}

export interface IPriceChange {
  price: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  priceChange30d: number;
  volume24h: number;
  lastUpdate: Date;
}

export enum IStatusEnum {
  Active = 'active',
}

export interface StatusClass {
  timestamp: Date;
  error_code: string;
  error_message: string;
  elapsed: string;
  credit_count: number;
}
