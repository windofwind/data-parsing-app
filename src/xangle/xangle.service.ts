import { Injectable } from '@nestjs/common';
import {
  ExchangeQuoteList,
  IExchangeQuoteListOption,
} from './action/exchange-quote-list.class';

import { promisify } from 'util';
import { EventEmitter2 } from '@nestjs/event-emitter';
const Sleep = promisify(setTimeout);

@Injectable()
export class XangleService {
  protected upbitPrice: ExchangeQuoteList;
  protected bithumbPrice: ExchangeQuoteList;
  protected coinonePrice: ExchangeQuoteList;

  constructor(private readonly eventEmitter: EventEmitter2) {
    const opt: IExchangeQuoteListOption = {
      exchange_name: 'upbit',
      currency: 'KRW',
      size: 100,
      lang: 'ko',
      sort_field: 'volume',
      sort_direction: 'desc',
    };

    this.upbitPrice = new ExchangeQuoteList({
      exchange_name: 'upbit',
      currency: 'KRW',
      size: 100,
      lang: 'ko',
      sort_field: 'volume',
      sort_direction: 'desc',
    });

    this.bithumbPrice = new ExchangeQuoteList({
      exchange_name: 'bithumb',
      currency: 'KRW',
      size: 100,
      lang: 'ko',
      sort_field: 'volume',
      sort_direction: 'desc',
    });

    this.coinonePrice = new ExchangeQuoteList({
      exchange_name: 'coinone',
      currency: 'KRW',
      size: 100,
      lang: 'ko',
      sort_field: 'volume',
      sort_direction: 'desc',
    });
  }

  async getUpbitPrice() {
    const result = [];

    result.push(await this.send(this.upbitPrice));
    result.push(await this.send(this.bithumbPrice));
    result.push(await this.send(this.coinonePrice));

    return result;
  }

  protected async send(context: ExchangeQuoteList) {
    const result = [];
    let page = 0;
    do {
      const { total_count, result: data } = await context.getData(page);
      result.push(data);

      if (total_count - 100 * (page + 1) > 0) {
        page++;
        await Sleep(3000);
      } else {
        await Sleep(3000);
        break;
      }
    } while (true);

    return result;
  }
}
