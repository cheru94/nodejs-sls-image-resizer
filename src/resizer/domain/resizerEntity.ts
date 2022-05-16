import { v4 as uuidv4 } from 'uuid';


export default function(uploadedFilesResponse: any) {
  return uploadedFilesResponse.map((iterator: any) => {
    return {
      location: iterator.uploadedFile.Location,
      uuid: uuidv4(),
     };
  });
};
