const { S3, Endpoint } = require('aws-sdk');

const uploadFile = async (file1) => {
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
    Key: 'MY_IMAGE.jpeg',
    Body: file1,
    ACL: 'public-read',
  };
  console.log(params.Bucket);
  const uploadedFile = await s3.upload(params).promise();
  return { uploadedFile };
};

module.exports = {
  uploadFile,
};
