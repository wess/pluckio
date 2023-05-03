import React from 'react';

import SettingsProvider from './settings';
import ApiProvider from './api';

import {FlashProvider} from './flash';

export {default as FormProvider} from './form';

export {
  FlashProvider,
}

const Component = ({children}) => (
  <ApiProvider>
    <SettingsProvider>
      <FlashProvider>
        {children}
      </FlashProvider>
    </SettingsProvider>
  </ApiProvider>
);



export default Component;