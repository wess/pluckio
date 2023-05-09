import React from 'react';

import {
  Routes,
  Route
} from 'react-router-dom';

import {
  Box,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';

import {
  Login,
  Register
} from './forms';

const Landing = () => {
  let [isLogin, setIsLogin] = React.useState(false);

  return (
      <HStack w='full' h='full' align='flex-start'>
        <Box flex={1} mt={10}>
          <Heading>Let's Share.</Heading>

          <Text>
            Sign up and start sharing now. <br />
            Powered by <a href="https://appwrite.io" target="_blank">Appwrite</a>
          </Text>
        </Box>

        <Box w='100px' />

        <VStack p={10} align='flex-start' border='1px solid #eaeaea' bg='white'>
          {
            isLogin == false 
            ? (
              <>
                <Heading textAlign="left" as='h4' size='lg' mb={2}>Sign up</Heading>
                <Register 
                  onLogin={() => setIsLogin(true)}
                />    
              </>
            )
            : (
              <>
                <Heading textAlign="left" as='h4' size='lg' mb={2}>Sign in</Heading>
                <Login 
                  onRegister={() => setIsLogin(false)}
                />
              </>
            )
          }

        </VStack>
      </HStack>
    );
  }

export default Landing;