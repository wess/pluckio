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


const DetailModal = ({photo}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <LinkOverlay as={Image}
      objectFit='cover'
      src={photo}
      alt='photo'
      onClick={onOpen} 
      cursor='pointer'
    />

    <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Photo think</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg='red' minH='500px'>
          <Image 
            w='100%'
            h='100%'
            src={photo}
            alt='photo' 
            objectFit='fill'
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