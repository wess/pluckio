import React from 'react';
import {useNavigate} from 'react-router';

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  useSession
} from '../hooks';

import {
  User,
  Photos,
} from '../pages';

const Router = () => {
  const navigate = useNavigate();
  const {session} = useSession();

  if(session == null) {
    navigate('/');
  }

  return (
    <Routes>
      <Route path="/photos" element={<Photos/>} />
      <Route path="/" element={<User/>} />
    </Routes>
  );
}

export default Router;