import React from 'react';

import {
  Provider
} from 'appwrite-models';

import {
  useApi,
} from '../hooks';

import {
  Photo
} from '../documents';

const DB_ID = '647f5c18294772c92feb';

const CollectionId = {
  photo: '6481d3eac6164eff6eb8',
}

const Context = React.createContext({
  shop:null,
});

const Component = ({children}) => {
  const {client} = useApi();

  const providers = {
    shop: Provider<Photo>(client, DB_ID, CollectionId.photo),
  }

  return (
    <Context.Provider value={providers}>{children}</Context.Provider>
  );
};

export const useDocuments = () => React.useContext(Context);

export default Component;
