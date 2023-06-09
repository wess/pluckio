import React, {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';

import {
  ChakraProvider,
  ColorModeScript,  
} from '@chakra-ui/react';

import {
  Global,
  css,
} from '@emotion/react';

import {Theme} from '../theme';
import Provider from '../providers';
import Layout from './layout';

export const cssFixes = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

import './index.scss';

import Router from '../router';

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode}/>
      <ChakraProvider theme={Theme}>
        <Global styles={cssFixes}/>
        <Provider>
          <Layout>
            <Router/>
          </Layout>
        </Provider>
      </ChakraProvider>
    </Suspense>
  );
}


export default App;