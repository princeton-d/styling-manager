import React from 'react';
import { useRef } from 'react';
import styles from './homeModal.module.css';

const HomeModal = ({ openModal, setOpenModal }) => {
  const onClick = (e) => {
    if (e.target.id === 'modalClose') {
      setOpenModal(false);
    }
  };
  return (
    <div id='modalClose' className={styles.container} onClick={onClick}>
      <div className={styles.contents}>
        <h3>컨텐츠</h3>
        <button id='modalClose' type='button' onClick={onClick}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default HomeModal;
