export interface ICustomError {
  statusCode: number;
  errorCode: string;
}

export class CustomError extends Error implements ICustomError {
  statusCode: number;
  errorCode: string;

  constructor(
    message: string,
    statusCode: number = 400,
    errorCode: string = 'custom-error',
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
