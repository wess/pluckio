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
  body:string|React.ReactElement; 
  cancel:DialogAction;
  confirm:DialogAction;
  presenter:React.ReactElement;
}

const Dialog = ({title, body, cancel, confirm, presenter, ..._props}:Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = React.useRef();

  let Btn = presenter.type;
  let Bod = body;

  const cancelAction = () => {
    cancel.action();
    onClose();
  }

  const confirmAction = () => {
    confirm.action();
    onClose();
  }

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
            {Bod}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={cancelAction}>
              {cancel.caption}
            </Button>
            <Button colorScheme={confirm.colorScheme ?? 'red'} onClick={confirmAction} ml={3}>
              {confirm.caption}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  </>
  );
}

export default Dialog;