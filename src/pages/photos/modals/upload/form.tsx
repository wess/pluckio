import React from 'react';

import {
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Box,
  Link,
  VStack,
} from '@chakra-ui/react';

import {
  Formik,
  Form,
  Field,
} from 'formik';

import {
  object,
  string
} from 'yup';

import {
  TextField,
  FieldError
} from '../../../../components';

const validation = object().shape({
  name: string().required('Name is required'),
  description: string().optional(),
});

const UploadField = ({name, placeholder}) => (
  <>
    <Box w="100%">
    <TextField
          id={name}
          name={name}
          placeholder={placeholder}
          type='text'
          as={Field}
        />
        <FieldError name={name}/>
    </Box>
  </>
);

const UploadDetailsForm = () => {
  const onSubmit = async (values, actions) => {
    actions.setSubmitting(false);
  }
  
  return (
    <Formik
      initialValues={{name: '', description: ''}}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form>
        <UploadField name='name' placeholder='Name'/>
        <UploadField name='description' placeholder='Description'/>
      </Form>

    </Formik>
  );
}

export default UploadDetailsForm;