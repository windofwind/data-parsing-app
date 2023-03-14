import axios from 'axios';
import { load } from 'cheerio';

/**
 * 한경 데이터 해외지수
 *
 * @export
 * @class indices
 * @link https://datacenter.hankyung.com/major-indices
 */
export class Indices {
  protected baseUrl: string = 'https://datacenter.hankyung.com';
  protected url: string = '/major-indices';

  async getData() {
    const result = await this.getHtml();
    const jsonData = this.htmlParse(result);

    return jsonData;
  }

  protected async getHtml() {
    let result;

    try {
      const res = await axios({
        method: 'GET',
        baseURL: this.baseUrl,
        url: this.url,
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        },
        params: {},
      });
      result = res.data;
    } catch (e) {
      console.error(e);

      throw e;
    }

    return result;
  }

  protected htmlParse(html: string, searchTable: string = '.table-daily') {
    const $ = load(html);

    const result = $(`${searchTable} tbody tr`)
      .map((i, element) => ({
        market: $(element).find('td:nth-of-type(1)').text().trim(),
        symbol: $(element).find('td:nth-of-type(2)').text().trim(),
        prevClosingPrice: $(element)
          .find('td:nth-of-type(3)')
          .text()
          .trim()
          .split(',')
          .join(''),
        prevClosingRatePrice: $(element)
          .find('td:nth-of-type(4)')
          .text()
          .trim()
          .split(',')
          .join(''),
        prevClosingRate: $(element).find('td:nth-of-type(5)').text().trim(),
        openingPrice: $(element)
          .find('td:nth-of-type(6)')
          .text()
          .trim()
          .split(',')
          .join(''),
        lowPrice: $(element)
          .find('td:nth-of-type(7)')
          .text()
          .trim()
          .split(',')
          .join(''),
        highPrice: $(element)
          .find('td:nth-of-type(8)')
          .text()
          .trim()
          .split(',')
          .join(''),
        tradeDate: $(element)
          .find('td:nth-of-type(9)')
          .text()
          .trim()
          .split('.')
          .join('-'),
      }))
      .get();

    return result;
  }
}
