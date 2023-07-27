import React from 'react';

import {
  Client, 
  Account,
  Databases,
  Storage,
} from 'appwrite';

const PROJECT_ID = 'pluck';
const ENDPOINT = 'https://cloud.appwrite.io/v1';

const appwrite = new Client();

appwrite.setEndpoint(ENDPOINT)
        .setProject(PROJECT_ID);

const client = {
  client: appwrite,
  account: new Account(appwrite),
  database: new Databases(appwrite),
  storage: new Storage(appwrite),
}

const Context = React.createContext(client);

const Component = ({children}) => (
  <Context.Provider value={client}>{children}</Context.Provider>
);

export const useApi = () => React.useContext(Context);

export default Component;