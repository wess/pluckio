import React from 'react';

import {
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Box,
  Image,
  Heading,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  IconButton,
  Button,
  Text,
  Avatar,
  Spacer,
  LinkBox,
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
  IoEllipsisVertical,
  IoThumbsUp,
  IoChatbubble,
  IoShare
} from 'react-icons/io5';

import {
  Empty,
} from '../../components';

import {
  UploadModal
} from './modals';

const EmptyView = () => (
  <Empty 
    title="No Photos"
    caption="Upload some photos"
  />  
);

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

const PhotoCard = ({photo, index}) => (
  <LinkBox as={WrapItem} key={`photo-${index}`}>
    <Card maxW='md'>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap='6' alignItems='center' flexWrap='wrap'>
            <Avatar name='Wess Cope' src='http://placekitten/g/100/100' />

            <Box>
              <Text>Wess Cope</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<IoEllipsisVertical />}
          />
        </Flex>
      </CardHeader>
      
        <DetailModal photo={photo}/>

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<IoThumbsUp />}>
            Like
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<IoShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </LinkBox>
);


const PhotosGrid = ({photos}) => {
  if(photos.length === 0) return <EmptyView />;


  return (
    <Box flex={1} w='full'>
      <Wrap px={6}>
        {photos.map((photo, index) => (<PhotoCard photo={photo} index={index} />))}
      </Wrap>
    </Box>
  );
}

const Toolbar = () => (
  <HStack w='full' h='50px' p={6} pt={10}>
    <Heading fontSize={24}>Photos</Heading>
    <Spacer/>

    <UploadModal button={<Button colorScheme='green' variant='solid'>Upload</Button>} />
  </HStack>
);


const Photos = () => {
  let tempPhotos = [];

  for(let i = 0; i < 100; i++) {
    tempPhotos.push(
      'http://placekitten.com/g/200/200'
    );
  }

  const [photos, _setPhotos] = React.useState(tempPhotos);

  return (
    <>
      <Toolbar />

      <VStack flex={1} w='100%' h='full' pt={4} align='flex-start' overflow='auto'>
        <PhotosGrid photos={photos} />
      </VStack>
    </>
  );
}

export default Photos;