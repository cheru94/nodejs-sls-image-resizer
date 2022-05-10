const sharp = require('sharp');
const { uploadFile } = require('../services/bucket/imageBucketService');

module.exports = async (bufferImage) => {
  const resizedImage = await sharp(bufferImage).resize(400, 300);
  const response = await uploadFile(resizedImage.options.input.file);
  return response;
};
