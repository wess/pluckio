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


const Toolbar = ({photoState}) => (
  <HStack w='full' h='50px' p={6} pt={10}>
    <Heading fontSize={24}>Photos</Heading>
    <Spacer/>

    <UploadModal photoState={photoState} button={<Button colorScheme='green' variant='solid'>Upload</Button>} />
  </HStack>
);

 export default Toolbar;