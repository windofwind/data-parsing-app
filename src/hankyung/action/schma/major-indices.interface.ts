/**
 * 한경 데이터 - 해외지수한경 데이터 - 해외지수
 *
 * @export
 * @interface IMajorIndices
 */
export interface IMajorIndices {
  /**
   * 마켓명
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  market: string;

  /**
   * 심볼코드
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  symbol: string;

  /**
   * 전일가 - 종가
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  prevClosingPrice: string;

  /**
   * 전일비 - price
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  prevClosingRatePrice: string;

  /**
   * 전일비 - rate
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  prevClosingRate: string;

  /**
   * 시가
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  openingPrice: string;

  /**
   * 저가
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  lowPrice: string;

  /**
   * 고가
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  highPrice: string;

  /**
   * 거래일 - YYYY-MM-DD
   *
   * @type {string}
   * @memberof IMajorIndices
   */
  tradeDate: string;
}
