import React from 'react';

import {
  ID,
  Models,
  Account,
  Storage,
} from 'appwrite';

import {
  useApi,
} from '../hooks';

const BUCKET_ID = 'photos';

const Context = React.createContext({
  upload: null,
});

const Component = ({children}) => {
  const {account, storage} = useApi();

  const upload = async (file: File) => {
    const response = await storage.createFile(
      BUCKET_ID,
      ID.unique(),
      file
    );
    
    console.log('response: ', response);

    return response;
  }
  
  const client = {
    upload,
  };

  return (
    <Context.Provider value={client}>{children}</Context.Provider>
  );
}

export const useStorage = () => React.useContext(Context);

export default Component;