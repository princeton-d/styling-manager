import React from 'react';
import { useState } from 'react';
// import googleLogoImg from '../../images/google_logo.png';
import styles from './auth.module.css';

const Auth = ({ handleGoogleLogin, isLogin, setIsLogin }) => {
  const guestLogin = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>WS</span>
          </div>
          <div className={styles.title}>Styling Manager</div>
          <form className={styles.loginForm}>
            <input name='email' type='text' required placeholder='email' />
            <input
              name='password'
              type='password'
              required
              placeholder='password'
            />
            <div className={styles.signUp}>
              <span>회원등록</span>
            </div>
            <button className={styles.loginButton}>로그인</button>
          </form>
          <div className={styles.otherLogins}>
            <button
              className={styles.googleLoginButton}
              onClick={handleGoogleLogin}
            >
              <span className={styles.googleLogo}>logo</span>
              구글로 로그인
            </button>
            <button onClick={guestLogin} className={styles.guestLoginButton}>
              게스트로 입장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
