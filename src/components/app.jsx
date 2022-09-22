import React from 'react';
import { useState } from 'react';
import AppRouter from './router';
import styles from './app.module.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.container}>
      <AppRouter isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default App;
