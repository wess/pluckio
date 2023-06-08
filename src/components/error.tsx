import React from 'react';

import {
  Text,
} from '@chakra-ui/react';

import {
  ErrorMessage
} from 'formik';

export const FieldError = (props) => (
  <ErrorMessage
    {...props}
    render={msg => (
      <Text
        w='full'
        color='red.500'
        fontSize='sm'
        textAlign='right'
      >
        {msg}
      </Text>
    )}
  />
);


