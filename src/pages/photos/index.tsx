import React, {Suspense} from 'react';
import { Models, Query } from 'appwrite';

import {
  Box,
  VStack,
} from '@chakra-ui/react';

import Toolbar from './toolbar';
import PhotosGrid from './grid';
import { 
  useApi,
  useAccount, 
  useDocuments,
} from '../../hooks';

const BUCKET_ID = 'photos';

const Photos = () => {
  const account = useAccount();
  const {photo} = useDocuments();
  const {storage} = useApi();

  console.log(account);

  const photoState = React.useState(null);
  const [photos, setPhotos] = photoState;

  const listPhotos = async () => {
    try {
      const photoList = await photo.find([
        Query.equal('userId', account['$id'])
      ]);

      const photoIds = photoList.map((photo) => {
        return photo['fileId'];
      });

      const fileList:Models.FileList = await storage.listFiles(BUCKET_ID);

      const list = fileList.files.filter((file) => {
        return photoIds.includes(file['$id']);
      });

      setPhotos(
        list
      );
    } catch(e) {
      console.error(e);
      
      setPhotos([]);
    }
    
  };

  React.useEffect(() => {
    if(account === null || photos !== null) return;

    listPhotos();
  }, [account]);

  return (
    <>
      <Toolbar photoState={photoState} />

      <VStack flex={1} w='100%' h='full' pt={4} align='flex-start' overflow='auto'>
        <PhotosGrid photoState={photoState} />
      </VStack>
    </>
  );
}

export default Photos;