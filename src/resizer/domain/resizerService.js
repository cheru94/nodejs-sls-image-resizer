const sharp = require('sharp');
const { uploadFile } = require('../services/bucket/imageBucketService');

module.exports = async (base64) => {
  const buffer = Buffer.from(base64, 'base64');
  const resizedImage = await sharp(buffer).resize(10, 300).toBuffer();
  const response = await uploadFile(resizedImage);
  return response;
};
