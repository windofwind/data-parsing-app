export interface IMarketSocket<List> {
  /**
   * 지원 코인 목록 가져오기
   *
   * @return {*}  {Promise<T>}
   * @memberof IMarketSocket
   */
  getCoinList(): Promise<List>;

  /**
   * 소켓 열기
   *
   * @param {string[]} coinList
   * @memberof IMarketSocket
   */
  open(coinList: string[]): void;

  /**
   * 가격 가져오기
   *
   * @param {string} currency
   * @return {*}  {T}
   * @memberof IMarketSocket
   */
  getPrice(): any;
}

export interface ICoinPriceItem {
  price: string;
}
