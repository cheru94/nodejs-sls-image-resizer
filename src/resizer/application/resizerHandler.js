const domainService = require('../domain/resizerService');
const sizes = require('../utils/sizes.constants');
// headers in order to set CORSS policies
// Lambda sends the headers into the APIGW method Response & to the client.
const headers = {
  'content-Type': 'application/json',
};
// eslint-disable-next-line no-unused-vars

module.exports.handler = async (command, meta) => {
  try {
    const { body: commandBody } = command;
    const { bufferImage } = JSON.parse(commandBody);
    const { statusCode, body } = await domainService(bufferImage, sizes);
    return {
      statusCode,
      body: JSON.stringify(body),
      headers,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    const {
      statusCode = 500,
      message = 'INTERNAL SERVER ERROR',
      code = 'INTERNAL_SERVER_ERROR',
    } = error;
    console.error({ statusCode, message, code });
    return {
      statusCode,
      body: JSON.stringify({
        message,
        code,
      }),
      headers,
    };
  }
};
