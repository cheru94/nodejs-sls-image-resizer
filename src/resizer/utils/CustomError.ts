export class CustomError extends Error {
  statusCode: any;
  code: any;

  constructor({
    statusCode, message, code,
  } : any) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
};
