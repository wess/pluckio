import React from 'react';

import SettingsProvider from './settings';
import ApiProvider from './api';
import StorageProvider from './storage';
import SessionProvider from './session';
import DocumentsProvider from './documents';
import AccountProvider from './account';

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
        <AccountProvider>
          <DocumentsProvider>
            <SettingsProvider>
              <FlashProvider>
                {children}
              </FlashProvider>
            </SettingsProvider>
          </DocumentsProvider>
        </AccountProvider>
      </SessionProvider>
    </StorageProvider>
  </ApiProvider>
);

export default Component;