import React from 'react';

import {
  Wrap,
  WrapItem,
  Box,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  IconButton,
  Button,
  Text,
  Avatar,
  LinkBox,
} from '@chakra-ui/react';

import {
  IoEllipsisVertical,
  IoThumbsUp,
  IoShare
} from 'react-icons/io5';

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