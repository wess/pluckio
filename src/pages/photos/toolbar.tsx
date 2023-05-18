import React from 'react';

import {
  HStack,
  Heading,
  Button,
  Spacer,
} from '@chakra-ui/react';

import {
  UploadModal
} from './modals';


const Toolbar = () => (
  <HStack w='full' h='50px' p={6} pt={10}>
    <Heading fontSize={24}>Photos</Heading>
    <Spacer/>

    <UploadModal button={<Button colorScheme='green' variant='solid'>Upload</Button>} />
  </HStack>
);

 export default Toolbar;