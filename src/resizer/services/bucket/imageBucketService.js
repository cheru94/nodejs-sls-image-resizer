const { S3 } = require('aws-sdk');

const uploadFile = async (file1) => {
  const s3 = new S3();
  const params = { Bucket: process.env.IMAGE_BUCKET , Key: 'MY_IMAGE.jpeg', Body: file1 };
  console.log(params);
  const uploadedFile = await s3.upload(params).promise();
  return { uploadedFile };
};

module.exports = {
  uploadFile,
};
