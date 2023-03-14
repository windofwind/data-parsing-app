import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { GainersLosser } from './action/gainers-losser.class';
import {
  IGainersLosser,
  IGainersLosserData,
} from './action/schma/gainers-losser.interface';

@Injectable()
export class CoinmarketcapService {
  protected gainersLosser: GainersLosser;

  constructor() {
    this.gainersLosser = new GainersLosser();
  }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCronGainersLosser() {
    const result = await this.gainersLosser.getData();

    return result;
  }
}
