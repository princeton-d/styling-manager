import React, { useRef } from 'react';
import styles from './justifyContent.module.css';
import common from '../common/common.module.css';

const JustifyContent = () => {
  const contentsBox = useRef();
  const changedFlexStart = () => {
    contentsBox.current.style.justifyContent = 'flex-start';
  };
  const changedFlexEnd = () => {
    contentsBox.current.style.justifyContent = 'flex-end';
  };
  const changedCenter = () => {
    contentsBox.current.style.justifyContent = 'center';
  };
  const changedSpaceBetween = () => {
    contentsBox.current.style.justifyContent = 'space-between';
  };
  const changedSpaceAround = () => {
    contentsBox.current.style.justifyContent = 'space-around';
  };
  return (
    <div className={styles.justifyContent}>
      <p className={common.propertyName}>justify-content</p>
      <input
        type='button'
        name='justify-content'
        value={'flex-start'}
        onClick={changedFlexStart}
      />
      <input
        type='button'
        name='justify-content'
        value={'flex-end'}
        onClick={changedFlexEnd}
      />
      <input
        type='button'
        name='justify-content'
        value={'center'}
        onClick={changedCenter}
      />
      <input
        type='button'
        name='justify-content'
        value={'space-between'}
        onClick={changedSpaceBetween}
      />
      <input
        type='button'
        name='justify-content'
        value={'space-around'}
        onClick={changedSpaceAround}
      />
      <div ref={contentsBox} className={common.contentsBox}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </div>
  );
};

export default JustifyContent;
