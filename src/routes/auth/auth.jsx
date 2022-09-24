import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
} from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeModal from '../../components/modal/homeModal';
import ModalPortal from '../../components/modal/modalPortal';
import { authService } from '../../fbase';
import styles from './auth.module.css';

const Auth = ({ isLogin, setIsLogin }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  const onSignUpModal = () => {
    setOpenModal(!openModal);
  };
  const onSocialClick = async (e) => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(authService, provider);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      setIsLogin(user.user);
    } catch (error) {
      console.log(error.code);
    }
  };
  // 유저 상태 감지
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLogin(user);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  // 익명 게스트로 로그인
  const onClick = async () => {
    try {
      const user = await signInAnonymously(authService);
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>WS</span>
          </div>
          <div className={styles.title}>Styling Manager</div>
          <form className={styles.loginForm} onSubmit={onSubmit}>
            <input
              name='email'
              type='text'
              required
              placeholder='email'
              onChange={onChange}
            />
            <input
              name='password'
              type='password'
              required
              placeholder='password'
              onChange={onChange}
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
            <button className={styles.guestLoginButton} onClick={onClick}>
              게스트로 입장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
