import React from 'react';
import Data from '../data';

import {
  Settings, 
  defaultSettings
} from '../data/settings';

const Context = React.createContext({
  settings: defaultSettings,
  setSettings: (settings:Settings) => {}
});

const Provider = ({children}) => {
  const [settings, setSettings_] = React.useState(Data.get('settings', defaultSettings));

  const setSettings = (settings:Settings) => {
    Data.set('settings', settings);

    setSettings_(settings);
  }

  return <Context.Provider value={{settings, setSettings}}>{children}</Context.Provider>
}

export const useSettings = () => React.useContext(Context);

export default Provider;