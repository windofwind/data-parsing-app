/**
 * 한경 데이터 - 원자재 데이터
 *
 * @export
 * @interface ICommodities
 */
export interface ICommodities {
  /**
   * 마켓명
   *
   * @type {string}
   * @memberof ICommodities
   */
  market: string;

  /**
   * 심볼코드
   *
   * @type {string}
   * @memberof ICommodities
   */
  symbol: string;

  /**
   * 전일가 - 종가
   *
   * @type {string}
   * @memberof ICommodities
   */
  prevClosingPrice: string;

  /**
   * 전일비 - price
   *
   * @type {string}
   * @memberof ICommodities
   */
  prevClosingRatePrice: string;

  /**
   * 전일비 - rate
   *
   * @type {string}
   * @memberof ICommodities
   */
  prevClosingRate: string;

  /**
   * 시가
   *
   * @type {string}
   * @memberof ICommodities
   */
  openingPrice: string;

  /**
   * 저가
   *
   * @type {string}
   * @memberof ICommodities
   */
  lowPrice: string;

  /**
   * 고가
   *
   * @type {string}
   * @memberof ICommodities
   */
  highPrice: string;

  /**
   * 거래일 - YYYY-MM-DD
   *
   * @type {string}
   * @memberof ICommodities
   */
  tradeDate: string;
}
