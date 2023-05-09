import React from 'react';

import {
  HStack,
  VStack,
  Card,
  CardBody,
} from '@chakra-ui/react';

import {
  Empty,
} from '../../components';

const Photos = () => (
  <HStack w='full' h='full'>
    <VStack w='full' h='full'>
      <Empty 
        title="No Photos"
        caption="Upload some photos"
      />
    </VStack>
  </HStack>
);

export default Photos;