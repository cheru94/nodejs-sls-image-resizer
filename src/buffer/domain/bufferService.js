const sharp = require('sharp');

module.exports = async () => {
  const buffer = await sharp('images/download.jpeg').toBuffer();
  const base64Image = buffer.toString('base64');
  return { bufferImage: base64Image };
};
