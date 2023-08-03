import React from 'react';

import {Query} from 'appwrite';

import { 
  useParams,
} from 'react-router';

import {
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

import {
  IoThumbsUp,
  IoShare
} from 'react-icons/io5';

import {useClipboard} from 'use-clipboard-copy';

import {
  useAccount,
  useApi,
  useDocuments,
  useStorage,
} from '../../hooks';

import { 
  Photo,
  Like,
} from '../../documents';


const Public = (_props) => {
  const api = useApi();
  const account = useAccount();
  const {photo, like} = useDocuments();
  const storage = useStorage();
  const {username, slug} = useParams();
  const [session, setSession] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [likes, setLikes] = React.useState(null);
  const clipboard = useClipboard();

  const setupUser = async () => {
    if(session != null) return;

    if(account == null) {
      const sessions = await (async () => {
        try {
          let result = await api.account.listSessions();
          
          return Object.keys(result).includes('sessions') ? result['sessions'] : [];
        } catch(_e) {
          return [];
        }
      })();

      try {
        
        if(!sessions || sessions.length == 0) {
          const sesh = await api.account.createAnonymousSession();

          setSession(sesh);

          return sesh['userId'];
        } else {
          setSession(sessions[0]);

          return sessions[0]['userId'];
        }
      } catch(e) {
        console.log(e);
      }
    }
  };  

  const getPost = async () => {
    try {
      const docs = await photo.find([
        Query.equal('username', username),
        Query.equal('slug', slug),
      ]);

      const doc:Photo = docs[0];
      const image = await storage.view(doc.fileId);
      const result = {
        doc,
        image,
      };

      setPost(result);
    } catch(e) {
      console.error(e);
    }
  };

  const listLikes = async () => {
    if(likes != null) return;

    const userId = (session == null || Object.keys(session).length == 0) 
      ? null
      : session['userId'];

    const photoId = post['doc']['id'];

    try {
      const docs = await like.find([
        Query.equal('photoId', photoId),
      ]);

      setLikes(docs);
    } catch(e) {
      console.error(e);
    }
  }

  const likePost = async () => {
    const userId = session['userId'];
    const photoId = post['doc']['id'];

    console.log(post);

    const newLike:Like = {
      userId,
      photoId,
    };

    try {
      await like.create(newLike);

      await listLikes();
    } catch(e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    if(session == null) {
      setupUser();
    }

    if(post == null){
      getPost();
    }

    if(post && likes == null) {
      listLikes();
    }  
  });

  if(post == null){
    return (
      <VStack className='' as='main' w='100%' h='100vh' m={0} p={0}>
        <HStack w='full' h='full'>
          <Text w='full' textAlign='center'>Loading...</Text>
        </HStack>
      </VStack>
    );
  }

  return (
    <VStack className='' as='main' w='100%' h='100vh' m={0} p={0}>
      <HStack w='full' p={4} bg='blackAlpha.200' borderBottom='1px solid rgba(0, 0, 0, 0.05)'>
        <Heading w='full' size='md'>
          [pluck] {username} :: {post['doc']['name'] ?? slug}
        </Heading>

        <Box flex={1} />

        <Text>
          Likes: {(likes == null ? [] : likes).length}
        </Text>

        <Button 
          variant='ghost' 
          leftIcon={<IoThumbsUp />}
          onClick={likePost}
        >
          Like
        </Button>

        <input type='hidden' ref={clipboard.target} value={window.location.origin + '/user/' + username + '/' + slug} />
        <Button variant='ghost' leftIcon={<IoShare />} onClick={clipboard.copy}>
          Share
        </Button>
      </HStack>
      
      <Box flex={1} w='full' p={20}>
        <Image 
          w='100%'
          h='100%'
          src={post['image']['href'] ?? ''}
          alt='photo' 
          objectFit='cover'
        />
      </Box>

    </VStack>
  );
}

export default Public;




