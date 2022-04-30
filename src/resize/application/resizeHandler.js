// headers in order to set CORSS policies
// Lambda sends the headers into the APIGW method Response & to the client.
const headers = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
};

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (command, meta) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(command),
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
      body: JSON.stringify({ message, code }),
      headers,
    };
  }
};
