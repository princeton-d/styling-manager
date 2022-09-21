import React from 'react';
import { useState } from 'react';
import AppRouter from './router';
import styles from './app.module.css';
import { authService } from '../fbase';
import { useEffect } from 'react';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // 유저의 로그인 정보
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
      console.log(user);
    }, []); // 로그인 정보가 변화되는 것을 감지함
  });
  return (
    <div className={styles.container}>
      {console.log(`isLogin: ${isLogin}`)}
      {console.log(`init: ${init}`)}
      <AppRouter isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default App;
