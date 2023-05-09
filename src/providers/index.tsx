import React from 'react';

import SettingsProvider from './settings';
import ApiProvider from './api';
import SessionProvider from './session';

import {FlashProvider} from './flash';

export {default as FormProvider} from './form';

export {
  FlashProvider,
}

const Component = ({children}) => (
  <ApiProvider>
    <SessionProvider>
      <SettingsProvider>
        <FlashProvider>
          {children}
        </FlashProvider>
      </SettingsProvider>
    </SessionProvider>
  </ApiProvider>
);



export default Component;