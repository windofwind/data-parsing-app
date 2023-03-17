export interface IBithumbCoinListItem {
  opening_price: string;
  closing_price: string;
  min_price: string;
  max_price: string;
  units_traded: string;
  acc_trade_value: string;
  prev_closing_price: string;
  units_traded_24H: string;
  acc_trade_value_24H: string;
  fluctate_24H: string;
  fluctate_rate_24H: string;
}

export interface IBithumbCoinList {
  status: string;
  data: Record<string, IBithumbCoinListItem>;
}

export interface IBithumbTransaction {
  market: 'bithumb';
  volumePower: string;
  chgAmt: string;
  chgRate: string;
  prevClosePrice: string;
  buyVolume: string;
  sellVolume: string;
  volume: string;
  value: string;
  highPrice: string;
  lowPrice: string;
  closePrice: string;
  openPrice: string;
  time: string;
  date: string;
  tickType: string;
  symbol: string;
  currency: string;
  targetCurrency: string;
}

export interface IBithumbTicker {
  type: 'ticker';
  content: IBithumbTransaction;
}
