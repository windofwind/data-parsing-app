/**
 * 코인 리스트 가져오기에서 사용됨
 *
 * @export
 * @interface IUpbitMarketItem
 */
export interface IUpbitMarketItem {
  /**
   * 마켓명
   *
   * @type {string}
   * @memberof UpbitMarketItem
   */
  marketName: string;

  /**
   * 통화명
   *
   * @type {string}
   * @memberof UpbitMarketItem
   */
  currency: string;

  /**
   * 타겟 통화명
   *
   * @type {string}
   * @memberof UpbitMarketItem
   */
  targetCurrency: string;
}

export class IUpbitMarket {
  BTC: IUpbitMarketItem[];
  KRW: IUpbitMarketItem[];
  USDT: IUpbitMarketItem[];
}

export interface IUpbitTicker {
  /**
   * 타입
   *
   * @type {'ticker'}
   * @memberof IUpbitTicker
   */
  type: 'ticker';

  /**
   * 통화명
   *
   * @type {string}
   * @memberof IUpbitTicker
   */
  currency: string;

  /**
   * 코인명
   *
   * @type {string}
   * @memberof IUpbitTicker
   */
  targetCurrency: string;

  /**
   * 마켓코드
   *
   * @type {string}
   * @memberof IUpbitTicker
   */
  code: string; // 'KRW-BTC';

  /**
   * 시가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  opening_price: number; // 32505000;

  /**
   * 고가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  high_price: number; // 32680000;

  /**
   * 저가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  low_price: number; // 32307000;

  /**
   * 현재가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  trade_price: number; // 32538000;

  /**
   * 전일 종가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  prev_closing_price: number; // 32511000.0;

  /**
   * 전일 대비
   *
   * @type {('RISE' | 'EVEN' | 'FALL')} RISE : 상승, EVEN : 보합, FALL : 하락
   * @memberof IUpbitTicker
   */
  change: 'RISE' | 'EVEN' | 'FALL';

  /**
   * 부호 없는 전일 대비 값
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  change_price: number; // 27000.0;

  /**
   * 전일 대비 값
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  signed_change_price: number; // 27000.0;

  /**
   * 부호 없는 전일 대비 등락율
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  change_rate: number; // 0.0008304881;

  /**
   * 전일 대비 등락율
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  signed_change_rate: number; // 0.0008304881;

  /**
   * 가장 최근 거래량
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  trade_volume: number; // 0.05;

  /**
   * 누적 거래량(UTC 0시 기준)
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_trade_volume: number; // 1005.37784021;

  /**
   * 24시간 누적 거래량
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_trade_volume_24h: number; // 10306.02535299;

  /**
   * 누적 거래대금(UTC 0시 기준)
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_trade_price: number; // 32642936632.18244;

  /**
   * 24시간 누적 거래대금
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_trade_price_24h: number; // 337140637196.76059;

  /**
   * 최근 거래 일자(UTC)
   *
   * @type {string} yyyyMMdd
   * @memberof IUpbitTicker
   */
  trade_date: string; // '20230316';

  /**
   * 최근 거래 시각(UTC)
   *
   * @type {string} HHmmss
   * @memberof IUpbitTicker
   */
  trade_time: string; // '023932';

  /**
   * 체결 타임스탬프 (milliseconds)
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  trade_timestamp: number; // 1678934372808;

  /**
   * 매수/매도 구분
   *
   * @type {('ASK' | 'BID')} ASK : 매도, BID : 매수
   * @memberof IUpbitTicker
   */
  ask_bid: 'ASK' | 'BID';

  /**
   * 누적 매도량
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_ask_volume: number; // 644.42283658;

  /**
   * 누적 매수량
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  acc_bid_volume: number; // 360.95500363;

  /**
   * 52주 최고가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  highest_52_week_price: number; // 57678000.0;

  /**
   * 52주 최고가 달성일
   *
   * @type {string} yyyy-MM-dd
   * @memberof IUpbitTicker
   */
  highest_52_week_date: string; // '2022-03-28';

  /**
   * 52주 최저가
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  lowest_52_week_price: number; // 20700000.0;

  /**
   * 52주 최저가 달성일
   *
   * @type {string} yyyy-MM-dd
   * @memberof IUpbitTicker
   */
  lowest_52_week_date: string; // '2022-12-30';

  /**
   * 거래상태
   *
   * @type {('ACTIVE' | 'PREVIEW' | 'DELISTED')} PREVIEW : 입금지원, ACTIVE : 거래지원가능, DELISTED : 거래지원종료
   * @memberof IUpbitTicker
   */
  market_state: 'ACTIVE' | 'PREVIEW' | 'DELISTED';

  /**
   * 거래 정지 여부
   *
   * @type {boolean}
   * @memberof IUpbitTicker
   */
  is_trading_suspended: boolean; // false;

  /**
   * 상장폐지일
   *
   * @type {(null | Date)}
   * @memberof IUpbitTicker
   */
  delisting_date: null | Date;

  /**
   *
   *
   * @type {('NONE' | 'CAUTION')} NONE : 해당없음, CAUTION : 투자유의
   * @memberof IUpbitTicker
   */
  market_warning: 'NONE' | 'CAUTION';

  /**
   * 타임스탬프 (millisecond)
   *
   * @type {number}
   * @memberof IUpbitTicker
   */
  timestamp: number; // 1678934372845;

  /**
   * 스트림 타입
   *
   * @type {('REALTIME' | 'SNAPSHOT')}
   * @memberof IUpbitTicker
   */
  stream_type: 'REALTIME' | 'SNAPSHOT';
}
