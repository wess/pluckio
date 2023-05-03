import React from "react";

import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const Numberfield = ({id, right = null, left = null, ...props}) => (
  <FormControl id={id} isRequired={Object.keys(props).includes('isRequired')} w='full'>
    {props.label && <FormLabel fontSize={props.size || 'sm'}>{props.label}</FormLabel>}
    
      <NumberInput {...props}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

  </FormControl>
);

export default Numberfield;