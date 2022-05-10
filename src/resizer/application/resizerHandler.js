
const domainService = require('../domain/resizerService');

// headers in order to set CORSS policies
// Lambda sends the headers into the APIGW method Response & to the client.
const headers = {
  'content-Type': 'application/json',
};
// eslint-disable-next-line no-unused-vars

module.exports.handler = async (command, meta) => {
  try {
    const { body } = command;
    const { bufferImage } = JSON.parse(body);
    const domainResponse = await domainService(bufferImage);
    return {
      statusCode: 200,
      body: domainResponse,
      headers,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    const {
      statusCode = 500,
      message = 'INTERNAL SERVER ERROR',
      code = 'INTERNAL_SERVER_ERROR',
    } = error;
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
