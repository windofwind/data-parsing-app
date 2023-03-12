import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
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
  @Cron(CronExpression.EVERY_10_SECONDS, { timeZone: 'Asia/Seoul' })
  public async getMajorIndices() {
    const result = await this.indices.getData();
    return result;
  }
}
