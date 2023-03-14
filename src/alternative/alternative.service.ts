import { Injectable } from '@nestjs/common';
import { FearPoint } from './action/fear-point.class';

@Injectable()
export class AlternativeService {
  protected fearpoint: FearPoint;

  constructor() {
    this.fearpoint = new FearPoint();
  }

  async getFearPoint() {
    const result = await this.fearpoint.getData();

    return result;
  }
}
