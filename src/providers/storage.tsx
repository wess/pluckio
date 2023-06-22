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
  get: null,
});

const Component = ({children}) => {
  const {account, storage} = useApi();

  const upload = async (file: File) => {
    return await storage.createFile(
      BUCKET_ID,
      ID.unique(),
      file
    );
 }

  const get = async (id: string) => {
    return await storage.getFile(BUCKET_ID, id);
  }
  
  const client = {
    upload,
    get,
  };

  return (
    <Context.Provider value={client}>{children}</Context.Provider>
  );
}

export const useStorage = () => React.useContext(Context);

export default Component;