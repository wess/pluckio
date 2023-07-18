import React from 'react';

import {
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

import {
  Models
} from 'appwrite';

import {
  object,
  string
} from 'yup';

import {
  Dialog,
  TextField,
} from '../../../../components';

import {
  useSession,
  useStorage,
  useDocuments,
  useApi,
  useAccount,
} from '../../../../hooks';

import {
  Photo
} from '../../../../documents';

const validation = object().shape({
  name: string().required('Name is required'),
  description: string().optional(),
});

const UploadField = (props) => (
  <Box w="100%">
    <TextField
      {...props}
      />
      {props['error'] && (
        <Box p={2} w='full'>
          <Text textAlign='end' textColor='red.500'>{props['error']}</Text>
        </Box>
      )}
  </Box>
);

const UploadModal = ({photoState, button}) => {
  const {session} = useSession();
  const account = useAccount();
  const {upload} = useStorage();
  const {storage} = useApi();
  const {photo} = useDocuments();
  const [_, setPhotos] = photoState;
  const inputRef = React.useRef();
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const cancel = {
    caption: "Cancel",
    action: () => {
      console.log("cancel");
      
      setValues({});
    },
  }

  const confirm = {
    caption: "Submit",
    colorScheme: "green",
    action: async (a) => {
      let errors = {};

      try {
        await validation.validate(values, {abortEarly: false});
      } catch(e) {
        e.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      }

      const file = inputRef.current!.files[0];

      try {
        const {$id} = await upload(file);
        const {userId} = session;

        const document:Photo = {
          userId: userId,
          fileId: $id,
          name: values['name'],
          slug: values['name'].toLowerCase().replace(' ', '_'),
          description: values['description'] || '',
          isPrivate: false,
          username: (account['username'] ?? account['name'] ?? 'user').toLowerCase().replace(' ', '_'),
        };

        const docResult = await photo.create(document);
        const list:Models.FileList = await storage.listFiles('photos');

        setPhotos(
          list.files
        );

      } catch (error) {
        console.log(error);
      }
    },
  }

  const name = "upload-photo";

  const onClick = () => {
    if (typeof inputRef.current === 'undefined') { return; }
    
    inputRef.current!.click();
  }
  
  return (
    <Dialog
      title="Upload Photo"
      presenter={button}
      cancel={cancel}
      confirm={confirm}
      body={
        <VStack spacing={4}>
          <Box w='full'>
            <input 
              type='file' 
              name={name} 
              ref={inputRef} 
              style={{ display: 'none' }}
              defaultValue=''
              onChange={(e) => 
                  setValues({
                    ...values, 
                    "upload-photo": e.target.value.split('\\').pop()
                  })}
            >

            </input>
          </Box>

          <Box w='full'>
            <TextField
              id="upload-photo"
              placeholder="Upload Photo"
              onClick={onClick}
              onChange={() => {}}
              defaultValue={values['upload-photo'] || ''}
              value={values['upload-photo'] || ''}
              editable="false"
            />

            { errors['upload-photo'] && (
                <Box p={2} w='full'>
                  <Text textAlign='end' textColor='red.500'></Text>
                </Box>
              )
            }

          </Box>

          <TextField 
            id='name'
            name='name' 
            placeholder='Name' 
            value={values['name'] || ''}
            onChange={(e) => setValues({...values, name: e.target.value})}
            error={errors['name']}
          />

          <UploadField 
            id='description'
            name='description' 
            placeholder='Description' 
            value={values['description'] || ''}
            error={errors['description']}
            onChange={(e) => setValues({...values, description: e.target.value})}
          />

        </VStack>
    }
    />
  );
};

export default UploadModal;