/* eslint-disable max-len */
const { v4: uuidv4 } = require('uuid');

module.exports = (uploadedFilesResponse) => uploadedFilesResponse.map((iterator) => ({
  location: iterator.uploadedFile.Location,
  uuid: uuidv4(),
}));
