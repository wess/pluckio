import React from 'react';
import Data from '../data';

export enum FlashType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export type FlashMessage = {
  type:FlashType,
  message:string
};

const msg = (type:FlashType, message:string) => ({
  type,
  message
});

const messages = {
  success: (message:string) => msg(FlashType.Success, message),
  error: (message:string) => msg(FlashType.Error, message),
  info: (message:string) => msg(FlashType.Info, message),
  warning: (message:string) => msg(FlashType.Warning, message)
}

const Context = React.createContext({
  flash: null,
  setFlash:(message:FlashMessage) => {}
});

export const FlashProvider = ({children}) => {
  const [flash, _setFlash] = React.useState<FlashMessage | null>(Data.get('pending.flash'));

  const setFlash = (message: FlashMessage | null) => {
    if(message == null) {
      Data.delete('pending.flash');
    } else {
      Data.set('pending.flash', message);
    }

    _setFlash(message);
  };

  return (
    <Context.Provider value={{flash, setFlash}}>
      {children}
    </Context.Provider>
  );
}

export const useFlash = () => React.useContext(Context);

export default messages;