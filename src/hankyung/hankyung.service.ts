import { Injectable } from '@nestjs/common';
import { Commodities } from './action/commodities.class';
import { Indices } from './action/indices.class';

@Injectable()
export class HankyungService {
  protected indices: Indices;
  protected commondities: Commodities;

  constructor() {
    this.indices = new Indices();
    this.commondities = new Commodities();
  }

  /**
   * 한경데이터센터 -해외지수 가져오기
   *
   * @return {*}
   * @memberof HankyungService
   */
  public async getMajorIndices() {
    const result = await this.indices.getData();

    return result;
  }

  public async getCommodities() {
    const result = await this.commondities.getData();

    return result;
  }
}
