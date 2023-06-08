import React from 'react';

import {
  Wrap,
  Box,
} from '@chakra-ui/react';

import {
  Empty,
} from '../../../components';

import PhotoCard from './card';

const PhotosGrid = ({photos}) => {
  if(photos === null || photos.length === 0) return (
    <Empty 
      title="No Photos"
      caption="Upload some photos"
    />  
  );


  return (
    <Box flex={1} w='full'>
      <Wrap px={6}>
        {photos.map((photo, index) => (<PhotoCard photo={photo} index={index} />))}
      </Wrap>
    </Box>
  );
}

export default PhotosGrid;