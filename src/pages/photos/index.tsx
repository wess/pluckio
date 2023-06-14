import React from 'react';
import { Models } from 'appwrite';

import {
  VStack,
} from '@chakra-ui/react';

import Toolbar from './toolbar';
import PhotosGrid from './grid';
import { useApi } from '../../hooks';

const BUCKET_ID = 'photos';

const Photos = () => {
  const {storage} = useApi();

  const photoState = React.useState(null);
  const [photos, setPhotos] = photoState;

  const listPhotos = async () => {
    try {
      const list:Models.FileList = await storage.listFiles(BUCKET_ID);

      setPhotos(
        list.files
      );
    } catch(_e) {
      setPhotos([]);
    }
    
  };

  React.useEffect(() => {
    if(photos !== null) return;

    listPhotos();
  }, [photos, listPhotos]);

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