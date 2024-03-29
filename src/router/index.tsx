import React from 'react';

import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import {
  useSession
} from '../hooks';

import {
  Landing,
  User,
  Public,
} from '../pages';

export {default as UserRouter} from './user';

const Router = () => {
  const location = useLocation();
  const {session} = useSession();

  const Destination = 
    session == null
    ? location.pathname.toLowerCase().includes('user') 
    ? Public
    : Landing
    : User
    ;

  return (
    <Routes>
      <Route 
        path="/user/:username/:slug"
        element={<Public />} 
      />

      <Route path="/*" element={<Destination />} />
    </Routes>
  );
}

export default Router;