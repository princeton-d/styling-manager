import React from 'react';
import { useState } from 'react';
import HomeModal from '../../components/modal/homeModal';
import ModalPortal from '../../components/modal/modalPortal';
import styles from './auth.module.css';

const Auth = ({ handleGoogleLogin, isLogin, setIsLogin }) => {
  const [openModal, setOpenModal] = useState(false);

  const onSignUpModal = () => {
    setOpenModal(!openModal);
  };
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
              <span onClick={onSignUpModal}>회원등록</span>
              {openModal ? (
                <ModalPortal>
                  <HomeModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </ModalPortal>
              ) : null}
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
