import React from 'react';

import {Query} from 'appwrite';

import { 
  useParams,
} from 'react-router';

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
import { Photo } from '../../documents';


const Public = (_props) => {
  const {photo} = useDocuments();
  const storage = useStorage();
  const {username, slug} = useParams();
  const [post, setPost] = React.useState(null);

  const getPost = async () => {
    try {
      const docs = await photo.find([
        Query.equal('username', username),
        Query.equal('slug', slug),
      ]);

      const doc:Photo = docs[0];
      const image = await storage.view(doc.fileId);

      setPost({
        ...doc,
        ...image,
      });
    } catch(e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getPost();
  }, []);

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