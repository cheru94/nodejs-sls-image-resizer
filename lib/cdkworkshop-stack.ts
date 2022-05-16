import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

export class CdkworkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  const resizerLambdaFunction = new NodejsFunction(this, 'resizerLambdaFunctionId', {
    runtime: Runtime.NODEJS_16_X,
    entry: path.join(__dirname, '..', 'src', 'index.ts'),
    handler: 'handler',
    timeout: Duration.seconds(10),
    memorySize: 1024,
    functionName: 'resizerLambdaFunction'
  });
  const apigw = new RestApi(this, 'cdk-image-resizer', {
    deployOptions: {
      dataTraceEnabled: true,
      tracingEnabled: true
    }
  });

  // TODO: add S3 bucket to save the images
  const resizerRestEndpoint = apigw.root.addResource("resizer");
  resizerRestEndpoint.addMethod('POST', new LambdaIntegration(resizerLambdaFunction));
  }
};
