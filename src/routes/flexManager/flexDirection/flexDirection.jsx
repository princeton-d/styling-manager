import React, { useRef } from 'react';
import styles from './flexDirection.module.css';
import common from '../../../common/common.module.css';

const FlexDirection = () => {
  const contentsBox = useRef();
  const changedRow = () => {
    contentsBox.current.style.flexDirection = 'row';
  };
  const changedRowReverse = () => {
    contentsBox.current.style.flexDirection = 'row-reverse';
  };
  const changedColumn = () => {
    contentsBox.current.style.flexDirection = 'column';
  };
  const changedColumnReverse = () => {
    contentsBox.current.style.flexDirection = 'column-reverse';
  };
  return (
    <div className={styles.flexDirection}>
      <p className={common.propertyName}>flex-direction</p>
      <input
        className={common.elementButton}
        type='button'
        name='flex-direction'
        value={'row'}
        onClick={changedRow}
      />
      <input
        className={common.elementButton}
        type='button'
        name='flex-direction'
        value={'row-reverse'}
        onClick={changedRowReverse}
      />
      <input
        className={common.elementButton}
        type='button'
        name='flex-direction'
        value={'column'}
        onClick={changedColumn}
      />
      <input
        className={common.elementButton}
        type='button'
        name='flex-direction'
        value={'column-reverse'}
        onClick={changedColumnReverse}
      />
      <div ref={contentsBox} className={styles.contentsBox}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </div>
  );
};

export default FlexDirection;
