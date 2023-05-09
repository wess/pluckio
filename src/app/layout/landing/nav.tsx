import React from 'react';

import {
  HStack,
  Heading,
} from '@chakra-ui/react';

const Nav = () => (
  <HStack
    as="nav"
    w='full'
    h='60px'
    align="flex-start"
    alignItems="center"
    my={8}
    className='landing-nav'
  >
    <Heading
      size="lg"
      className='branding'
      fontSize='24px'
      fontWeight='700'
    >
      pluck
    </Heading>

  </HStack>
)

export default Nav;