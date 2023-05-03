import React from "react";

import {
   FormControl,
   FormLabel,
   Select,
   InputGroup,
   InputLeftElement,
} from '@chakra-ui/react'


type SelectOption = {
  value: string,
  label: string,
}

const Component = ({id, icon = null, options = [], ...props}) => (
  <FormControl id={id} isRequired={Object.keys(props).includes('isRequired')} w='full'>
    {props.label && <FormLabel fontSize={props.size || 'sm'}>{props.label}</FormLabel>}
    
    <InputGroup w='full'>
      {icon &&
        <InputLeftElement
          pointerEvents="none"
          children={icon}
        />
      }
      <Select {...props} variant={"nadda"} w='100%'>
        {options.map((option:SelectOption) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </Select>
    </InputGroup>
  </FormControl>
);

export default Component;