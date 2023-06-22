import React from 'react';

import {
  Query
} from 'appwrite';

import {
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

import {
  useDocuments,
  useStorage,
} from '../../hooks';

import { useLocation } from 'react-router';

const Public = (_props) => {
  const doc = useDocuments();
  const storage = useStorage();

  const {pathname} = useLocation();

  const pathComponents = pathname.split('/');
  const $id = pathComponents[pathComponents.length - 1];

  const loadPhoto = async (id) => {
    const photo = await doc.photo.find([
      Query.equal('fileId', id)
    ]);

    console.log(photo);

    const file = await storage.get(id);

    console.log(file);
  };

  React.useEffect(() => {
    loadPhoto($id);
  }, [$id]);

  return (
    <VStack w='full' h='full'>
      <HStack w='full' p={4} bg='blackAlpha.200' borderBottom='1px solid rgba(0, 0, 0, 0.05)'>
        <Heading size='md'>
          Public facing
        </Heading>
      </HStack>
    </VStack>
  );
}

export default Public;