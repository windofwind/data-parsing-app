export interface ICoinoneTicker {
  type: 'ticker';
  trading_pair: string; //'OGN-KRW';
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

  last: string; // '154.00000000';
  high: string; // '154.00000000';
  low: string; // '154.00000000';
  yesterday: string; // '154.00000000';
  volume: string; // '0.00000000';
  base_volume: string; // '0.00000000';
  change: string; // '0.00000000';
  change_rate: string; // '0.00';
  action: string; // 'REALTIME';
}
