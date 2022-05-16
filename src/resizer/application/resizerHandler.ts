import { resizerService } from '../domain/resizerService';
import * as sizes from '../utils//sizes.constants';
// headers in order to set CORSS policies
// Lambda sends the headers into the APIGW method Response & to the client.
const headers = {
  'content-Type': 'application/json',
};
// eslint-disable-next-line no-unused-vars
import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';

export async function handler(command: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> {
  try {
    const { body: { bufferImage } } : any = command;
    const { statusCode, body } = await resizerService(bufferImage, sizes);
    return {
      statusCode,
      body: JSON.stringify(body),
      headers,
    };
  } catch (error) {
    console.error(error);
    return {statusCode: 500, body: JSON.stringify(error)};
  }
};
