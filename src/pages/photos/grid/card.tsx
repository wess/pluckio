import React from 'react';

import {
  Models
} from 'appwrite';

import {
  WrapItem,
  Box,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  IconButton,
  Button,
  Text,
  Avatar,
  LinkBox,
} from '@chakra-ui/react';

import {
  IoTrash,
  IoThumbsUp,
  IoShare
} from 'react-icons/io5';

import {
  DetailsModal
} from '../modals';

import {
  useApi
} from '../../../hooks';

const BUCKET_ID = 'photos';

const PhotoCard = ({photo, photoState, index}) => {
  const {storage} = useApi();
  const [_, setPhotos] = photoState;

  const deleteImage = async () => {
    try {
      await storage.deleteFile(BUCKET_ID, photo['$id']);

      const list:Models.FileList = await storage.listFiles(BUCKET_ID);

      setPhotos(
        list.files
      );
      
    } catch(e) {
      console.error("delete File error: ", e.message);
    }
  }

  return (
    <LinkBox as={WrapItem} key={`photo-${index}`}>
      <Card maxW='sm'>
        <CardHeader>
          <Flex>
            <Flex flex='1' gap='6' alignItems='center' flexWrap='wrap'>
              <Avatar name='Wess Cope' src='' />

              <Box>
                <Text>Wess Cope</Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<IoTrash />}
              onClick={deleteImage}
            />
          </Flex>
        </CardHeader>
        
        <DetailsModal photo={photo}/>

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
}


export default PhotoCard;