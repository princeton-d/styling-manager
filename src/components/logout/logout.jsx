import React from 'react';
import { authService } from '../../fbase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const onClick = () => {
    signOut(authService);
  };
  return (
    <>
      <button onClick={onClick}>logout</button>
    </>
  );
};

export default Logout;
