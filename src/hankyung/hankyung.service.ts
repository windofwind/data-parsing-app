import { Injectable } from '@nestjs/common';
import { Indices } from './action/indices.class';

@Injectable()
export class HankyungService {
  protected indices: Indices;

  constructor() {
    this.indices = new Indices();
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
}
