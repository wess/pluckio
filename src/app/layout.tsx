import React from 'react';

import {
  VStack,
} from '@chakra-ui/react';

const Component = ({children}) => {
  return (
    <VStack w='full' h='full' justify='flex-start' align='flex-start'>
      {children}
    </VStack>
  );
}

export default Component;