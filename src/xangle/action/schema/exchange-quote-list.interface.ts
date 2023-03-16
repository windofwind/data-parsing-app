export interface IExchangeQuoteItem {
  /**
   * 프로젝트 아이디
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  project_id: string;

  /**
   * 코인명
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  name: string;

  /**
   * 코인심볼
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  symbol: string;

  /**
   *
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  slug: string;

  /**
   * 코인 로고
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  logo: string;

  /**
   * 그래프
   *
   * @type {string}
   * @memberof IExchangeQuoteItem
   */
  spark_line_url: string;

  /**
   * 현재가
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  current_price: number;

  cmc_price: number;

  /**
   * 프리미엄
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  premium_percentage: number;

  /**
   * 1시간 변화율
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  hour_change: number;

  /**
   * 24시간 변화율
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  day_change: number;

  /**
   * 7일 변화율
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  week_change: number;

  /**
   * 1시간전 가격
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  hour_before_price: number;

  /**
   * 24시간전 가격
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  day_before_price: number;

  /**
   * 7일전 가격
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  week_before_price: number;

  /**
   * 시가 총액
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  market_cap: number;

  /**
   * 24시간 거래량
   *
   * @type {number}
   * @memberof IExchangeQuoteItem
   */
  volume_of_past_24h: number;

  livewatch_status: boolean;
}

export interface IExchangeQuoteList {
  total_count: number;
  result: IExchangeQuoteItem[];
}
