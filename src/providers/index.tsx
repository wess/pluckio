import React from 'react';

import SettingsProvider from './settings';
import ApiProvider from './api';
import StorageProvider from './storage';
import SessionProvider from './session';

import Flash, {FlashProvider} from './flash';

export {default as FormProvider} from './form';

export {
  Flash,
  FlashProvider,
}

const Component = ({children}) => (
  <ApiProvider>
    <StorageProvider>
      <SessionProvider>
        <SettingsProvider>
          <FlashProvider>
            {children}
          </FlashProvider>
        </SettingsProvider>
      </SessionProvider>
    </StorageProvider>
  </ApiProvider>
);



export default Component;