import React from "react";

import {
   FormControl,
   FormLabel,
   Switch,
} from '@chakra-ui/react'


const Switchfield = ({id, ...props}) => (
  <FormControl display='flex' alignItems='center'>
    <FormLabel fontSize={props.size || 'sm'} htmlFor={id} mb='0'>
      {props.label}
    </FormLabel>
    <Switch id={id} {...props} />
  </FormControl>
);

export default Switchfield;