import React from 'react';

import {useApi} from './api';

const Context = React.createContext(null);

const Component = ({children}) => {
  const api = useApi();
  const [account, setAccount] = React.useState(null);

  const getAccount = async () => setAccount(
    await api.account.get()
  );

  React.useEffect(() => {
    if(account == null)
      getAccount();
  });

  return (
    <Context.Provider value={{account}}>{children}</Context.Provider>
  )
};

export const useAccount = () => React.useContext(Context);

export default Component;