import { Injectable } from '@nestjs/common';
import { LiquidationData } from './action/liquidation-data.class';

@Injectable()
export class CoinglassService {
  protected liquidationData: LiquidationData;

  constructor() {
    this.liquidationData = new LiquidationData();
  }

  async getLiquidationData() {
    const result = await this.liquidationData.getData();
    return result;
  }
}
