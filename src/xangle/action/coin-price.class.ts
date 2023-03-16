import { promisify } from 'util';
const Sleep = promisify(setTimeout);

import config from 'config';
import { CustomError } from './../../common/error.class';

export class CoinPrice {
  protected baseUrl = config.get<string>('xangle.baseURL');
  protected url = '/project/exchange/price';

  async getData() {}

  protected async open() {
    let result;

    try {
    } catch (e) {
      throw new CustomError('');
    }

    return result;
  }
}
