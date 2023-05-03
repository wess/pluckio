import React from 'react';

import {
  VStack,
  HStack,
  Text
} from '@chakra-ui/react';
 
import {
  IoFileTray,
} from 'react-icons/io5'

const Empty = ({title, caption}) => {
  return (
    <HStack justify="center" w='full' h='full' m={0} p={0} spacing={0} background="#eaeaea">
      <VStack 
        p={6} 
        spacing={0} 
      >
        <IoFileTray fontSize="10rem" color="rgba(0, 0, 0, 0.2)"/>
        <Text color="rgba(0, 0, 0, 0.5)" fontWeight="bold" fontSize="3rem">{title}</Text>
        <Text color="rgba(0, 0, 0, 0.4)" fontWeight="600" fontSize="1.2rem">{caption}</Text>

      </VStack>
    </HStack>
  )
}

export default Empty;