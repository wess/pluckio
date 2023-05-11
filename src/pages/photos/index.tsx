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
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  IconButton,
  Button,
  Text,
  Avatar,
  Spacer,
} from '@chakra-ui/react';

import {
  IoEllipsisVertical,
  IoThumbsUp,
  IoChatbubble,
  IoShare
} from 'react-icons/io5';

import {
  Dialog,
  Empty,
} from '../../components';

const EmptyView = () => (
  <Empty 
    title="No Photos"
    caption="Upload some photos"
  />  
);

const PhotoCard = ({photo, index}) => (
<WrapItem key={`photo-${index}`}>
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

      <Image
        objectFit='cover'
        src={photo}
        alt='photo'
      />

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
        <Button flex='1' variant='ghost' leftIcon={<IoChatbubble />}>
          Comment
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<IoShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  </WrapItem>
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

const UploadModal = ({button}) => {
  const cancel = {
    caption: "Cancel",
    action: () => {
      console.log("upload canceled");
    },
  }

  const confirm = {
    caption: "Submit",
    colorScheme: "green",
    action: () => {
      console.log("upload submit");
    },
  }

  return (
    <Dialog
      title="Upload Photo"
      presenter={button}
      cancel={cancel}
      confirm={confirm}
      body="Upload a photo"
    />
  );
};

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