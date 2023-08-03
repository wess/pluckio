import React from "react";

import {
  VStack,
  Box,
} from '@chakra-ui/react';

const Public = ({children}) => (
  <VStack
    as="main"
    w='full'
    h='100vh'
    align='flex-start'
  >
    <Box w='100%' flex={1}>
      {children}
    </Box>
  </VStack>
);

export default Public;