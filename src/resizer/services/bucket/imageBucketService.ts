const { S3, Endpoint } = require('aws-sdk');

export async function uploadFile(file: any, name: any) : Promise<any>{
  const s3 = new S3(process.env.IS_OFFLINE ? {
    s3ForcePathStyle: true,
    accessKeyId: 'S3RVER', // This specific key is required when working offline
    secretAccessKey: 'S3RVER',
    region: 'localhost',
    endpoint: new Endpoint('http://localhost:4569'),
  } : {});
  const params = {
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    Bucket: 'nodejs-sls-image-resizer-dev-bucket',
    Key: name,
    Body: file,
    ACL: 'public-read',
  };
  console.log(params.Bucket);
  const uploadedFile = await s3.upload(params).promise();
  return { uploadedFile };
};
