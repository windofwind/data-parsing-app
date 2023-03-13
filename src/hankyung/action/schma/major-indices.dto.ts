import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { dtoBase } from 'src/common/Base.dto';
import { IMajorIndices } from './major-indices.interface';

interface IUser {
  nick: string;
}
abstract class AbstractUser {
  nick: string;
}

class USer extends AbstractUser implements IUser {}
/**
 * 한경 데이터 - 해외지수
 *
 * @export
 * @class ResMajorIndices
 * @implements {IMajorIndices}
 */
export class MajorIndices implements IMajorIndices {
  @IsString()
  @ApiProperty({
    name: 'market',
    description: '마켓명',
    example: '나스닥 지수',
  })
  market: string;

  @IsString()
  @ApiProperty({
    name: 'symbol',
    description: '심볼코드',
  })
  symbol: string;

  @IsString()
  @ApiProperty({
    name: 'prevClosingPrice',
    description: '전일가 - 종가',
  })
  prevClosingPrice: string;

  @IsString()
  @ApiProperty({
    name: 'prevClosingRatePrice',
    description: '전일비 - price',
  })
  prevClosingRatePrice: string;

  @IsString()
  @ApiProperty({
    name: 'prevClosingRate',
    description: '전일비 - rate',
  })
  prevClosingRate: string;

  @IsString()
  @ApiProperty({
    name: 'openingPrice',
    description: '시가',
  })
  openingPrice: string;

  @IsString()
  @ApiProperty({
    name: 'lowPrice',
    description: '저가',
  })
  lowPrice: string;

  @IsString()
  @ApiProperty({
    name: 'highPrice',
    description: '고가',
  })
  highPrice: string;

  @IsString()
  @ApiProperty({
    name: 'tradeDate',
    description: '거래일 - YYYY-MM-DD',
  })
  tradeDate: string;
}

export class ResMajorIndices extends dtoBase {
  @IsArray()
  @ApiProperty({ type: [MajorIndices] })
  @Type(() => MajorIndices)
  @ValidateNested({})
  data: MajorIndices[];
}
