import React from "react";

import Data, {Session} from '../data';

const Context = React.createContext({
  session: null,
  setSession:(session:Session | null) => {},
});

const Provider = ({children}) => {
  const [session, setSession_] = React.useState<Session | null>(Data.get('session'));

  const setSession = (session:Session | null) => {
    if(session == null) {
      Data.delete('session');
    } else {
      Data.set('session', session);
    }
  
    setSession_(session)
  };  


  return (
    <Context.Provider value={{session, setSession}}>{children}</Context.Provider>
  )
};

export const useSession = () => React.useContext(Context);

export default Provider;