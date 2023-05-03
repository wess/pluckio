import React from "react";

import {
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement
} from '@chakra-ui/react'


const Component = ({id, right = null, left = null, ...props}) => (
  <FormControl id={id} isRequired={Object.keys(props).includes('isRequired')} w='full'>
    {props.label && <FormLabel fontSize={props.size || 'sm'}>{props.label}</FormLabel>}
    
    <InputGroup w='full' p={0}>
      {left &&
        <InputLeftElement
          pointerEvents="none"
          children={left}
        />
      }

      <Input variant={"nadda"} w='100%' {...props}/>

      {right &&
        <InputRightElement
          w='4.5rem'
          m={0}
          p={0}
          pointerEvents="none"
          children={right}
        />
      }
    </InputGroup>
  </FormControl>
);

export default Component;