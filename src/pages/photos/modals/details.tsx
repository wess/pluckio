import React from 'react';

import {
  HStack,
  Image,
  Button,
  Spacer,
  LinkOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import {
  IoThumbsUp,
  IoShare
} from 'react-icons/io5';

import {
  useApi
} from '../../../hooks';

const BUCKET_ID = 'photos';

const DetailModal = ({photo}) => {
  const api = useApi();

  const {isOpen, onOpen, onClose} = useDisclosure();

  const preview = api.storage.getFilePreview(BUCKET_ID, photo['$id']);
  const view = api.storage.getFileView(BUCKET_ID, photo['$id']);

  return (
    <>
    <LinkOverlay as={Image}
      objectFit='cover'
      src={preview.href}
      alt='photo'
      onClick={onOpen} 
      cursor='pointer'
      maxH='200px'
    />

    <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Photo think</ModalHeader>
        <ModalCloseButton />
        <ModalBody minH='500px'>
          <Image 
            w='100%'
            h='100%'
            src={view.href}
            alt='photo' 
            objectFit='cover'
          />
        </ModalBody>

        <ModalFooter>
          <HStack w='full'>
            <Button flex='1' variant='ghost' leftIcon={<IoThumbsUp />}>
              Like
            </Button>

            <Button flex='1' variant='ghost' leftIcon={<IoShare />}>
              Share
            </Button>

            <Spacer/>
            
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default DetailModal;