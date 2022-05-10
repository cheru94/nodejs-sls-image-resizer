const { S3 } = require('aws-sdk');

const uploadFile = async (file1, file2, file3) => {
  const s3 = new S3();
  const params = { Bucket: process.env.IMAGE_BUCKET, Key: 'key' };
  const uploadedFile = await s3.upload(params, ...{ Body: file1 }).promise();
  const uploadedFile2 = await s3.upload(params, ...{ Body: file2 }).promise();
  const uploadedFile3 = await s3.upload(params, ...{ Body: file3 }).promise();
  return { uploadedFile, uploadedFile2, uploadedFile3 };
};

module.exports = {
  uploadFile,
};
