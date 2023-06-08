import React from 'react';

import {
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  AlertStatus
} from '@chakra-ui/react';

import Landing from './landing';
import User from './user';

import {Flash} from '../../providers';

import {
  useSession,
  useFlash
} from '../../hooks';

const Layout = (props) => {
  const flashRef = React.useRef(null);
  const {session} = useSession();
  const {flash, setFlash, deleteFlash} = useFlash();

    deleteFlash();  


  React.useEffect(() => {
  }, [
    flashRef,
    flash, 
    setFlash, 
    deleteFlash, 
  ]);

  return (
    <>
    {flash && (
      <Alert 
          ref={flashRef}
          position="fixed"
          top={0}
          right={0}
          left={0}
          height={12}
          zIndex={9999}
          variant="subtle"
          status={flash.type as AlertStatus}
          shadow="md"
        >
          <AlertIcon />
          
          <Box w={4}/>
      
          <Box flex={1}>
            <AlertDescription>
              {flash.message}
            </AlertDescription>
          </Box>
    
          <CloseButton 
            position="absolute" 
            right="8px" 
            top="8px" 
            onClick={() => setFlash(null)} 
          />
        </Alert>
      )}


      {session == null
        ? <Landing {...props}/>
        : <User {...props}/>
      }
    </>
  );
}

export default Layout;