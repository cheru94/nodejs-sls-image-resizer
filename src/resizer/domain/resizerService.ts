/* eslint-disable no-use-before-define */
// import sharp from 'sharp';
import fileSize from 'file-size';
import { uploadFile } from '../services/bucket/imageBucketService';
import  resizerEntity  from './resizerEntity';
import { CustomError } from '../utils//CustomError';
import { v4 as uuidv4 } from 'uuid';


export async function resizerService(base64 : any, sizes: any) {
  /* await validateFile(originalImageBuffer);
  const cropedImages = await cropImages(originalImageBuffer, sizes);
  const uploadedFileResponse = await uploadFiles(cropedImages);
  const domainResponse = resizerEntity(uploadedFileResponse);
  */
  return { statusCode: 200, body: {uniqueId: uuidv4()} };
};

/* 
const validateFile = async (originalImageBuffer: any) => {
  const { format, size } : any = await sharp(originalImageBuffer).metadata();
  if (format && !(format === 'jpeg' || format === 'png')) throw new CustomError({ statusCode: 400, code: 'BAD_REQUEST', message: 'File has a not valid extension' });
  const mbSize = fileSize(size).to('MB');
  if (Number(mbSize) > 5) throw new CustomError({ statusCode: 400, code: 'BAD_REQUEST', message: 'File is too heavy' });
  return format;
};

const cropImages = async (originalImageBuffer: any, sizes: any) => {
  const promises = sizes.map(async (size: any) => cropImage(originalImageBuffer, size));
  const cropedImages = await Promise.all(promises);
  return cropedImages;
};

const uploadFiles = async (cropedImages: any) => {
  const promises = cropedImages.map(async ({ file, name }: any) => uploadFile(file, name));
  const uploadedFiles = await Promise.all(promises);
  return uploadedFiles;
};

const cropImage = async (originalImageBuffer: any, size: any) => {
  // eslint-disable-next-line max-len
  const resizedBufferImage = await sharp(originalImageBuffer).resize(size.width, size.height).toBuffer();
  return { file: resizedBufferImage, name: `CROPPED_IMAGE_${size.width}_${size.height}.jpeg` };
};
*/
