import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { googleLoginProvider, authService } from '../fbase';
import AppRouter from './router';
import styles from './app.module.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState(null);

  const handleGoogleLogin = () => {
    const provider = googleLoginProvider; // provider를 google로 설정
    signInWithPopup(authService, provider) // popup을 이용해 로그인 페이지 구성
      .then((data) => {
        setUserGoogleData(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <AppRouter isLogin={isLogin} handleGoogleLogin={handleGoogleLogin} />
    </>
  );
};

export default App;
