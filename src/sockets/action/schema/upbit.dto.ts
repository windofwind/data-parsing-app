import { IUpbitMarketItem, IUpbitTicker } from './upbit.interface';

export class UpbitMarketItem implements IUpbitMarketItem {
  marketName: string;
  currency: string;
  targetCurrency: string;
}

export class IUpbitMarket implements IUpbitMarket {
  BTC: UpbitMarketItem[];
  KRW: UpbitMarketItem[];
  USDT: UpbitMarketItem[];
}

export class UpbitTicker implements IUpbitTicker {
  type: 'ticker';
  currency: string;
  targetCurrency: string;
  code: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: 'RISE' | 'EVEN' | 'FALL';
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  trade_date: string;
  trade_time: string;
  trade_timestamp: number;
  ask_bid: 'ASK' | 'BID';
  acc_ask_volume: number;
  acc_bid_volume: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  market_state: 'ACTIVE' | 'PREVIEW' | 'DELISTED';
  is_trading_suspended: boolean;
  delisting_date: null | Date;
  market_warning: 'NONE' | 'CAUTION';
  timestamp: number;
  stream_type: 'REALTIME' | 'SNAPSHOT';
}
