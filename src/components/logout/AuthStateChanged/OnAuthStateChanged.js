import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { authService } from '../../../fbase';


const OnAuthStateChanged = ({ setIsLogin }) => {
  return useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLogin(user);
      } else {
        setIsLogin(false);
      }
    });
  }, []);
};

export default OnAuthStateChanged;