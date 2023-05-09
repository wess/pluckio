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
  useSession,
} from '../../../hooks';

import Flash from '../../../providers/flash';

const validation = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required')
});

const Login = ({onRegister, ...props}) => {
  const navigate = useNavigate();
  const api = useApi();
  const {setSession} = useSession();
  const {setFlash} = useFlash();

  const submit = async (values, actions) => {
    actions.setSubmitting(false);

    const {email, password} = values;
    
    try {
      const response = await api.account.createEmailSession(email, password);
      
      setSession(response);
      navigate('/');
      
    } catch(e) {
      setFlash(Flash.error(e.message));
    }
  }
  
  return (
    <VStack {...props}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={submit}
      >
        <Form>
          <Box w="100%">
            <Field 
              id="email"
              name="email"
              icon={<IoMail color="rgba(100, 100, 100, 0.5)" />}
              placeholder="Email address"
              type="email"
              as={TextField}
              
            />
            <ErrorMessage name="email"/>
          </Box>

          <Box h={4} />

          <Box w="100%">
            <Field
              id="password"
              name="password"
              placeholder="Password"
              as={PasswordField} 
            />
            <ErrorMessage name="password"/>
          </Box>

          <Box h={4} />

          <Box h={5}/>
          <Divider/>
          <Box h={5}/>

          <Box w='full'>
            <Center>
              <Button
                w='100%' 
                textAlign="center" 
                onClick={() => {
                  onRegister();
                }}
                variant='link'
              >
                No account? Register!
              </Button>

              <Button 
                variant="solid" 
                type="submit"
                colorScheme="green"
              >
                Submit
              </Button>

            </Center>
          </Box>
        </Form>
      </Formik>
    </VStack>
  );
}

export default Login;