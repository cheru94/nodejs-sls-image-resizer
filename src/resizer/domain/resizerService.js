/* eslint-disable no-use-before-define */
const sharp = require('sharp');
const fileSize = require('file-size');

const { uploadFile } = require('../services/bucket/imageBucketService');
const resizerEntity = require('./resizerEntity');
const CustomError = require('../utils/CustomError');

module.exports = async (base64, sizes) => {
  const originalImageBuffer = Buffer.from(base64, 'base64');
  await validateFile(originalImageBuffer);
  const cropedImages = await cropImages(originalImageBuffer, sizes);
  const uploadedFileResponse = await uploadFiles(cropedImages);
  const domainResponse = resizerEntity(uploadedFileResponse);
  return { statusCode: 200, body: domainResponse };
};

const validateFile = async (originalImageBuffer) => {
  const { format, size } = await sharp(originalImageBuffer).metadata();
  if (format && !(format === 'jpeg' || format === 'png')) throw new CustomError({ statusCode: 400, code: 'BAD_REQUEST', message: 'File has a not valid extension' });
  const mbSize = fileSize(size).to('MB');
  if (Number(mbSize) > 5) throw new CustomError({ statusCode: 400, code: 'BAD_REQUEST', message: 'File is too heavy' });
  return format;
};

const cropImages = async (originalImageBuffer, sizes) => {
  const promises = sizes.map(async (size) => cropImage(originalImageBuffer, size));
  const cropedImages = await Promise.all(promises);
  return cropedImages;
};

const uploadFiles = async (cropedImages) => {
  const promises = cropedImages.map(async ({ file, name }) => uploadFile(file, name));
  const uploadedFiles = await Promise.all(promises);
  return uploadedFiles;
};

const cropImage = async (originalImageBuffer, size) => {
  // eslint-disable-next-line max-len
  const resizedBufferImage = await sharp(originalImageBuffer).resize(size.width, size.height).toBuffer();
  return { file: resizedBufferImage, name: `CROPPED_IMAGE_${size.width}_${size.height}.jpeg` };
};
