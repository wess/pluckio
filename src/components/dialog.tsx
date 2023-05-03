import React, {useState} from 'react';

import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';

export type DialogAction = {
  caption:string,
  colorScheme?:string,
  action:() => void,
};

interface Props extends Object {
  title:string;
  body:string; 
  cancel:DialogAction;
  confirm:DialogAction;
  presenter:React.ReactElement;
}

const Dialog = ({title, body, cancel, confirm, presenter, ..._props}:Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = React.useRef();

  let Btn = presenter.type;

  return (
    <>
    <Btn {...presenter.props} onClick={onOpen}/>

    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {body}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  </>
  );
}

export default Dialog;