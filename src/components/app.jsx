import { useState, useEffect } from 'react';
import AppRouter from './router';
import styles from './app.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from '../fbase';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLogin(user);
        setUserInfo(user);
      } else {
        setIsLogin(false);
      }
      setPageLoading(true);
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        {pageLoading ? (
          <AppRouter
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            userInfo={userInfo}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default App;
