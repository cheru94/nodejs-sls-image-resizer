
const domainService = require('../domain/bufferService');

// headers in order to set CORSS policies
// Lambda sends the headers into the APIGW method Response & to the client.
const headers = {
  'content-type': 'application/json',
};
// eslint-disable-next-line no-unused-vars

module.exports.handler = async (command, meta) => {
  try {
    const domainResponse = await domainService();
    return {
      statusCode: 200,
      body: JSON.stringify(domainResponse),
      headers,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
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
