import React from 'react';

import {
  Provider as AmProvider
} from 'appwrite-models';

import {
  useApi,
} from '../hooks';

import {
  Photo,
  Like,
} from '../documents';

const DB_ID = '6481d3e58ae3f25e2575';

const CollectionId = {
  photo: '6481d3eac6164eff6eb8',
  like: '649449a0d6570eac3dbd',
}

const Context = React.createContext({
  photo:null,
  like:null,
});

const Component = ({children}) => {
  const {client} = useApi();

  const providers = {
    photo: AmProvider<Photo>(client, DB_ID, CollectionId.photo),
    like: AmProvider<Like>(client, DB_ID, CollectionId.like),
  }

  return (
    <Context.Provider value={providers}>{children}</Context.Provider>
  );
};

export const useDocuments = () => React.useContext(Context);

export default Component;
