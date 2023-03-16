import { ParseError } from '@app/common/error.class';
import axios from 'axios';
import { IExchangeQuoteList } from './schema/exchange-quote-list.interface';

export interface IExchangeQuoteListOption {
  exchange_name: 'upbit' | 'bithumb' | 'coinone';
  lang: 'ko' | 'en';
  currency: 'KRW' | 'USD';
  sort_field?: 'volume' | 'market_cap' | 'name';
  sort_direction: 'asc' | 'desc';
  size: 20 | 50 | 100;
}

export class ExchangeQuoteList {
  protected baseUrl = 'https://service.xangle.io';
  protected url = '/asset/exchange-quote-list';

  protected option: IExchangeQuoteListOption;

  constructor(option: IExchangeQuoteListOption) {
    this.option = option;
  }

  async getData(page: number = 0): Promise<IExchangeQuoteList> {
    let result;

    try {
      const res = await axios({
        method: 'GET',
        baseURL: this.baseUrl,
        url: this.url,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'ko,en-US;q=0.9,en;q=0.8',
          Authorization: 'Bearer null',
          Origin: 'https://xangle.io',
          Referer: 'https://xangle.io/',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        },
        params: {
          ...this.option,
          page,
        },
      });

      result = res.data;
      console.log(result.total_count);
    } catch (e) {
      console.error(e);

      throw new ParseError('ExchangeQuoteList parse error');
    }

    return result;
  }
}
