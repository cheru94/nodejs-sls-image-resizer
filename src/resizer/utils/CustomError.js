class CustomError extends Error {
  constructor({
    statusCode, message, code,
  }) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

module.exports = CustomError;
