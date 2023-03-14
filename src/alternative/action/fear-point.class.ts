import axios from 'axios';
import { IFearPoint } from './schema/fear-point.interface';

export class FearPoint {
  protected baseUrl = 'https://api.alternative.me';
  protected url = '/fng';

  async getData(): Promise<IFearPoint> {
    let result;
    try {
      const res = await axios({
        method: 'get',
        baseURL: this.baseUrl,
        url: this.url,
        params: {
          limit: 10,
          date_format: 'kr',
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
