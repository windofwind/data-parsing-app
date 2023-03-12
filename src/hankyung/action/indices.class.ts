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
        url: 'https://datacenter.hankyung.com/major-indices',
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

  protected htmlParse(html: string) {
    const $ = load(html);
    const result = $('.table-daily tbody tr')
      .map((i, element) => ({
        상품명: $(element).find('td:nth-of-type(1)').text().trim(),
        심볼: $(element).find('td:nth-of-type(2)').text().trim(),
        종가: $(element).find('td:nth-of-type(3)').text().trim(),
        전일비: $(element).find('td:nth-of-type(4)').text().trim(),
        전일비레이트: $(element).find('td:nth-of-type(5)').text().trim(),
        시가: $(element).find('td:nth-of-type(6)').text().trim(),
        저가: $(element).find('td:nth-of-type(7)').text().trim(),
        고가: $(element).find('td:nth-of-type(8)').text().trim(),
        거래일: $(element).find('td:nth-of-type(9)').text().trim(),
      }))
      .get();

    return result;
  }
}
