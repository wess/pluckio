import React from 'react';

import {
  Dialog,
  TextField
} from '../../../components';


const UploadModal = ({button}) => {
  const inputRef = React.useRef();

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

  const name = "upload-photo";

  const onClick = () => {
    if (typeof inputRef.current === 'undefined') { return; }
    
    inputRef.current!.click();
  }

  const [value, setValue] = React.useState('');
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
            onChange={(e) => setValue(e.target.value)}
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