import React from 'react';
import { useLocation } from 'react-router';

import {useApi} from './api';

const Context = React.createContext(null);

const Component = ({children}) => {
  const location = useLocation();

  const api = useApi();
  const [account, setAccount] = React.useState(null);

  const getAccount = async () => {
    let account = await api.account.get()

    setAccount(account)
  };

  React.useEffect(() => {
    if(location.pathname.toLowerCase().includes('user')) {
      return;
    }
    
    if(account == null) {
      getAccount();
    }
  });

  return (
    <Context.Provider value={account}>{children}</Context.Provider>
  )
};

export const useAccount = () => React.useContext(Context);

export default Component;