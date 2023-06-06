import React from 'react';

import {
  ID,
  Account,
  Storage,
} from 'appwrite';

import {
  useApi,
} from '../hooks';

const BUCKET_ID = 'photos';

const Context = React.createContext({
  upload: async (file:File) => '',
});

const Component = ({children}) => {
  const {storage} = useApi();

  const upload = async (file: File) => {
    console.log("FILE: ", file);

    const response = await storage.createFile(
      BUCKET_ID,
      ID.unique(),
      file
    );
    
    console.log('response');

    return response['$id'];
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