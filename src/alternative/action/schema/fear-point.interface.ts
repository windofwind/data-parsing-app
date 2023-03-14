export interface IMetadata {
  error: null;
}

export interface IDatum {
  value: string;
  value_classification: string;
  timestamp: Date;
  time_until_update: string;
}

export interface IFearPoint {
  name: string;
  data: IDatum[];
  metadata: IMetadata;
}
