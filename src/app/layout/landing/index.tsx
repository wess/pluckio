import React from "react";

import {
  VStack,
  Box,
  Container,
} from '@chakra-ui/react';

import Nav from './nav';

const Landing = ({children}) => (
  <VStack
    as="main"
    w='full'
    h='100vh'
    align='flex-start'
    className='landing-layout'
  >
    <Container maxW='container.lg'>
      <Nav />

      <Box h={18} />

      <Box w='100%' flex={1}>
        {children}
      </Box>
    </Container>
  </VStack>
);

export default Landing;