import React from 'react';

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
  IoEllipsisVertical,
  IoThumbsUp,
  IoShare
} from 'react-icons/io5';

import {
  DetailsModal
} from '../modals';

const BUCKET_ID = 'photos';

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


export default PhotoCard;