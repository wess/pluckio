import React from 'react';

import {
  Dialog,
  TextField
} from '../../../../components';

import {
  useStorage,
  useFlash
} from '../../../../hooks';

import { 
  Flash 
} from '../../../../providers';

const UploadModal = ({button}) => {
  const {upload} = useStorage();
  const {setFlash} = useFlash();

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const cancel = {
    caption: "Cancel",
    action: () => {
      setValue('');
    },
  }

  const confirm = {
    caption: "Submit",
    colorScheme: "green",
    action: async () => {
      if (typeof inputRef.current === 'undefined') { return; }

      if(inputRef.current == null) { return; }

      const file = inputRef.current!.files[0];

      try {
        const _id = await upload(file);
      } catch (error) {
        console.error(error);
        
        setFlash(Flash.error(error.message));

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
        <>
          <input 
            type='file' 
            name={name} 
            ref={inputRef} 
            style={{ display: 'none' }}
            onChange={(e) => setValue(e.target.value.split('\\').pop())}
          >

          </input>
          <TextField
            id="upload-photo"
            label="Upload Photo"
            onClick={onClick}
            value={value}
            editable={false}
          />
        </>
    }
    />
  );
};

export default UploadModal;