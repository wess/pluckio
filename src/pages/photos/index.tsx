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
  const api = useApi();

  const [photos, setPhotos] = React.useState(null);

  const listPhotos = async () => {
    try {
      const list:Models.FileList = await api.storage.listFiles(BUCKET_ID)

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
      <Toolbar />

      <VStack flex={1} w='100%' h='full' pt={4} align='flex-start' overflow='auto'>
        <PhotosGrid photos={photos} />
      </VStack>
    </>
  );
}

export default Photos;