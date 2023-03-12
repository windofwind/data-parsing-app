import axios from 'axios';
import { load } from 'cheerio';

/**
 * 한경 데이터 외환
 *
 * @export
 * @class Currencies
 * @link https://datacenter.hankyung.com/currencies
 */
export class Currencies {
  protected baseUrl: string = 'https://datacenter.hankyung.com';
  protected url: string = '/currencies';

  async getData() {
    const result = await this.getHtml();
    return result;
  }

  protected async getHtml() {
    let result;

    try {
      const res = await axios.get('https://datacenter.hankyung.com/currencies');
      result = res.data;
    } catch (e) {
      console.error(e);

      throw e;
    }

    return result;
  }

  protected htmlParse(html: string) {
    const $ = load(html);
    $('#table-stock table-daily').html();
  }
}
