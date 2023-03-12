import { IsString } from 'class-validator';
import { IMajorIndices } from './major-indices.interface';

/**
 * 한경 데이터 - 해외지수
 *
 * @export
 * @class dtoMajorIndices
 * @implements {IMajorIndices}
 */
export class dtoMajorIndices implements IMajorIndices {
  @IsString()
  date: string;
}
