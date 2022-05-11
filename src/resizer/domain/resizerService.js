/* eslint-disable no-use-before-define */
const sharp = require('sharp');
const { uploadFile } = require('../services/bucket/imageBucketService');
const resizerEntity = require('./resizerEntity');

module.exports = async (base64, sizes) => {
  const cropedImages = await cropImages(base64, sizes);
  const uploadedFileResponse = await uploadFiles(cropedImages);
  const domainResponse = resizerEntity(uploadedFileResponse);
  return domainResponse;
};

const cropImages = async (base64, sizes) => {
  const promises = sizes.map(async (size) => cropImage(base64, size));
  const cropedImages = await Promise.all(promises);
  return cropedImages;
};

const uploadFiles = async (cropedImages) => {
  const promises = cropedImages.map(async ({ file, name }) => uploadFile(file, name));
  const uploadedFiles = await Promise.all(promises);
  return uploadedFiles;
};

const cropImage = async (base64, size) => {
  const originalImageBuffer = Buffer.from(base64, 'base64');
  // eslint-disable-next-line max-len
  const resizedBufferImage = await sharp(originalImageBuffer).resize(size.width, size.height).toBuffer();
  return { file: resizedBufferImage, name: `CROPPED_IMAGE_${size.width}_${size.height}.jpeg` };
};
