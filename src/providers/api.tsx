import React from 'react';
import {Client} from 'appwrite';

const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '<project_id>';

const client = new Client();

client
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

const Context = React.createContext(client);

const Component = ({children}) => (
  <Context.Provider value={client}>{children}</Context.Provider>
);

export const useApi = () => React.useContext(Context);

export default Component;


