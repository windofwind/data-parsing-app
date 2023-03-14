import axios from 'axios';
import { ILiquidationData } from './schema/liquidation-data.interface';

export class LiquidationData {
  protected baseUrl = 'https://fapi.coinglass.com';
  protected url = '/api/futures/liquidation/info';

  async getData(): Promise<ILiquidationData> {
    let result;
    try {
      const res = await axios({
        method: 'get',
        baseURL: this.baseUrl,
        url: this.url,
        params: {
          timeType: 1,
          size: 12,
        },
      });

      result = res.data;
    } catch (e) {
      console.error(e);

      throw e;
    }

    return result;
  }
}
