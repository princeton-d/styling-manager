import { async } from '@firebase/util';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeModal from '../../components/modal/homeModal';
import ModalPortal from '../../components/modal/modalPortal';
import { authService } from '../../fbase';
import styles from './auth.module.css';

const Auth = ({ isLogin, setIsLogin }) => {
  const [openModal, setOpenModal] = useState(false);

  const onSignUpModal = () => {
    setOpenModal(!openModal);
  };
  const onSocialClick = async (e) => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(authService, provider);
    console.log(data);
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
              name='google'
              onClick={onSocialClick}
            >
              <span className={styles.googleLogo}>logo</span>
              구글로 로그인
            </button>
            <Link to='/home'>
              <button className={styles.guestLoginButton}>게스트로 입장</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
