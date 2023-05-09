import React from 'react';
import {useNavigate} from 'react-router';

import {
  HStack,
  VStack,
  Box,
  Button,
  Divider,
  Link,
  Center,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react'

import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';

import {
  object,
  string
} from 'yup';

import {
  IoMail,
  IoPerson,
} from 'react-icons/io5';

import {
  TextField,
  PasswordField
} from '../../../components';

import {
  useApi,
  useFlash,
} from '../../../hooks';

import Flash from '../../../providers/flash';

const validation = object().shape({
  email: string().required('Email is required').email('Email is invalid'),
  username: string().required('Username is required').min(4),
  password: string().required('Password is required').min(8),
});

const Register = ({onLogin, ...props}) => {
  const navigate = useNavigate();
  const api = useApi();
  const {setFlash} = useFlash();
  const [error, setrError] = React.useState(null);

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);

    const {email, password, username} = values;

    try {
      await api.account.create('unique()', email, password, username);

      setFlash(
        Flash.success('Account created successfully')
      );

      navigate('/');
    } catch(e) {
      setrError(e.message);
    }
  };

  return (
    <VStack {...props}>
      {error && (
        <Box>
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Box>      
      )}

      <Formik
        initialValues={{email: '', username: '', password: ''}}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <Box w="100%">
            <TextField 
              id="email"
              name="email"
              icon={<IoMail color="rgba(100, 100, 100, 0.5)" />}
              placeholder="Email address"
              type="email"
              as={Field}
            />
            <ErrorMessage name="email"/>
          </Box>

          <Box h={4} />

          <Box w="100%">
            <TextField 
              id="username"
              name="username"
              icon={<IoPerson color="rgba(100, 100, 100, 0.5)" />}
              placeholder="Username"
              as={Field}
            />
            <ErrorMessage name="username"/>
          </Box>

          <Box h={4} />

          <Box w="100%">
            <PasswordField 
              id="password"
              name="password"
              as={Field}
            />
            <ErrorMessage name="password"/>
          </Box>

          <Box h={4} />

          <Box h={5}/>
          <Divider/>
          <Box h={5}/>

          <Box w='full'>
            <HStack w='full'>
              <Box flex={1}>
                <Center>
                  <Button 
                    variant='link' 
                    w='100%' 
                    textAlign="center" 
                    onClick={onLogin}
                  >
                    Have an account? Login!
                  </Button>
                </Center>
              </Box>

              <Box>
                <Button 
                  variant="solid" 
                  type="submit"
                  colorScheme="green"
                >
                  Submit
                </Button>
              </Box>
            </HStack>
          </Box>
        </Form>
      </Formik>
    </VStack>
  );
};

export default Register;