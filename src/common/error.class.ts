export interface ICustomError {
  statusCode: number;
  errorCode: string;
  errorMessage: string;
}

export class CustomError extends Error implements ICustomError {
  statusCode: number;
  errorCode: string;
  errorMessage: string;

  constructor(
    message: string,
    statusCode: number = 400,
    errorCode: string = 'custom-error',
    errorMessage: string = 'custom-error',
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

export class ParseError extends CustomError {
  constructor(
    message: string,
    statusCode: number = 400,
    errorCode: string = 'ParseError',
    errorMessage: string = 'ParseError',
  ) {
    super(message, statusCode, errorCode, errorMessage);
  }
}
