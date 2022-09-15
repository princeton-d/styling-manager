import React from 'react';
import styles from './homeModal.module.css';

const HomeModal = ({ openModal, setOpenModal }) => {
  const onClick = (e) => {
    if (e.target.id === 'modalClose') {
      setOpenModal(!openModal);
    }
  };
  return (
    <div id='modalClose' className={styles.container} onClick={onClick}>
      <div className={styles.contents}>
        <button
          className={styles.closeBtn}
          id='modalClose'
          type='button'
          onClick={onClick}
        >
          X
        </button>
        <p className={styles.title}>회원가입</p>
        <form className={styles.signForm}>
          <input required type='text' placeholder='이름' />
          <input required type='email' placeholder='아이디(이메일)' />
          <input
            required
            minLength='6'
            maxLength='16'
            type='password'
            placeholder='비밀번호(6~16자 이내)'
          />
          <input
            required
            minLength='6'
            maxLength='16'
            type='password'
            placeholder='비밀번호 확인'
          />
          <input
            required
            type='tel'
            placeholder='휴대폰 번호(-빼고 번호만 입력)'
          />
          <input
            required
            className={styles.signUpBtn}
            type='submit'
            value='가입하기'
          />
        </form>
      </div>
    </div>
  );
};

export default HomeModal;
