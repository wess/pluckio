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

const handlers = {
  upload: null,
  get: null,
  preview: null,
  view: null,
};

const Context = React.createContext(handlers);

const Component = ({children}) => {
  const {storage} = useApi();

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

  const preview = async (id: string) => {
    return await storage.getFilePreview(BUCKET_ID, id);
  }

  const view = async (id: string) => {
    return await storage.getFileView(BUCKET_ID, id);
  }
  
  const client = {
    upload,
    get,
    preview,
    view,
  };

  return (
    <Context.Provider value={client}>{children}</Context.Provider>
  );
}

export const useStorage = () => React.useContext(Context);

export default Component;