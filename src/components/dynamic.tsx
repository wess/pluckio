import React from 'react';

import {
  HStack,
  Select,
  Checkbox
} from '@chakra-ui/react';

import {
  TextField
} from './textfield';

export type DynamicFieldType = {
  caption: string,
  type: string,
  required: boolean,
};

const Field = (props) => {

  return (
    <HStack w='full' align="flex-start" spacing={1} px={0} pb={0} pt={2}>
      <TextField id="dynamic-title" placeholder="Title" size="sm"/>
      
      <Select w={40} id="dynamic-select" placeholder="Type" size="sm">
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="number">Yes/No</option>
      </Select>

      <Checkbox id="dynamic-required">Required?</Checkbox>
    </HStack>
  );
}

export default Field;