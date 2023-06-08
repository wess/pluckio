import React from 'react';
import {Cache} from '../data';

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
  setFlash:(message:FlashMessage) => {},
  deleteFlash:() => {},
});

export const FlashProvider = ({children}) => {
  const [flash, setFlash_] = React.useState<FlashMessage | null>(Cache.get('pending.flash'));

  const setFlash = (message: FlashMessage | null) => {
    if(message == null || message.message.length === 0) {
      Cache.delete('pending.flash');
    } else {
      Cache.set('pending.flash', message);
    }

    setFlash_(message);
  };

  const deleteFlash = () => {
    Cache.delete('pending.flash');
    setFlash_(null);
  }

  return (
    <Context.Provider value={{flash, setFlash, deleteFlash}}>
      {children}
    </Context.Provider>
  );
}

export const useFlash = () => React.useContext(Context);

export default messages;