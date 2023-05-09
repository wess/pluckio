import React from "react";

import {
   FormControl,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
   IconButton
} from '@chakra-ui/react'

import {
  IoLockClosed,
  IoEye,
  IoEyeOff,
} from 'react-icons/io5';

export const PasswordField = (props) => {
  const [masked, setMasked] = React.useState(true);
  const toggleMasked = () => setMasked(!masked);

  return (
    <FormControl id="password" isRequired={Object.keys(props).includes('isRequired')}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<IoLockClosed color="rgba(100, 100, 100, 0.5)"/>}
        />
        
        <Input  
          placeholder="Password"
          type={masked ? "password" : "text"}
          variant={"nadda"}
          {...props}
        />

        <InputRightElement w="3rem">
          <IconButton 
            aria-label="Show password"
            h="1.75rem" 
            size="sm" 
            onClick={toggleMasked} 
            colorScheme="whiteAlpha"
            icon={masked  ? <IoEyeOff color="rgba(100, 100, 100, 1)"/> : <IoEye color="rgba(100, 100, 100, 1)"/>}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default PasswordField;