// https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=2&limit=10&rankRange=0&timeframe=24h

import axios from 'axios';
import { IGainersLosser } from './schma/gainers-losser.interface';

/**
 * 주요상승목록, 주요하락목록
 *
 * @export
 * @class GainersLosser
 */
export class GainersLosser {
  protected baseUrl = 'https://api.coinmarketcap.com';
  protected url = '/data-api/v3/cryptocurrency/spotlight';

  async getData() {
    let result;

    try {
      const res = await axios({
        method: 'get',
        baseURL: this.baseUrl,
        url: this.url,
        params: {
          dataType: 2,
          limit: 10,
          rankRange: 0,
          timeframe: '24h',
        },
      });
      result = res.data.data;
    } catch (e) {
      console.error(e);

      throw e;
    }

    return result;
  }
}
