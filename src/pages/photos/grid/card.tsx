import React from 'react';

import {
  Models,
  Query,
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
  IoShare,
  IoHeart,
} from 'react-icons/io5';

import {
  DetailsModal
} from '../modals';

import {
  useDocuments,
  useApi,
} from '../../../hooks';

const BUCKET_ID = 'photos';

const PhotoCard = ({photo, photoState, index}) => {
  const doc = useDocuments();
  const {storage} = useApi();
  const [_, setPhotos] = photoState;
  const [metaData, setMetaData] = React.useState({});
  const [likes, setLikes] = React.useState({});

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

  const loadMeta = async (fileId) => {
    try {
      const result = await doc.photo.find([
        Query.equal('fileId', fileId)
      ]);
  
      setMetaData(result[0]);

      await loadLikes(result[0]['id']);
    } catch(e) {
      console.log(e);
    }
  }

  const loadLikes = async (fileId) => {
    try {
      const result = await doc.like.find([
        Query.equal('photoId', fileId)
      ]);
  
      setLikes(result);
    } catch(e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    const {$id} = photo;
    
    loadMeta($id);

  }, [photo]);

  return (
    <LinkBox as={WrapItem} key={`photo-${index}`}>
      <Card maxW='sm' p={4} m={1}>
        <CardHeader>
          <Flex>
            <Flex flex='1' gap='6' alignItems='center' flexWrap='wrap'>
              <Avatar name='Wess Cope' src='' />

              <Box>
                <Text>{metaData['name']}</Text>
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
          <Button flex='1' variant='ghost' leftIcon={<IoHeart />}>
            Likes
            : {Object.keys(likes).length}
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