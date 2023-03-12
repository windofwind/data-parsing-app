import { IsString } from 'class-validator';
import { ICurrencies } from './currencies.interface';

/**
 * 한경데이터 API - 환율
 *
 * @export
 * @class Currencies
 * @implements {ICurrencies}
 */
export class Currencies implements ICurrencies {
  @IsString()
  data: string;
}
