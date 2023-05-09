import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  useSession
} from '../hooks';

import {
  Landing,
  User
} from '../pages';

export {default as UserRouter} from './user';

const Router = () => {
  const {session} = useSession();

  const Destination = 
    session == null
    ? Landing
    : User
    ;

  return (
    <Routes>
      <Route path="/*" element={<Destination />} />
    </Routes>
  );
}

export default Router;