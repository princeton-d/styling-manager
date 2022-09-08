import React, { useRef } from 'react';
import styles from './flexWrap.module.css';
import common from '../common/common.module.css';

const FlexWrap = () => {
  const contentsBox = useRef();
  const changedNowrap = () => {
    contentsBox.current.style.flexWrap = 'nowrap';
  };
  const changedWrap = () => {
    contentsBox.current.style.flexWrap = 'wrap';
  };
  const changedWrapReverse = () => {
    contentsBox.current.style.flexWrap = 'wrap-reverse';
  };
  return (
    <div className={styles.flexWrap}>
      <p className={common.propertyName}>flex-wrap</p>
      <input
        className={common.elementButton}
        type='button'
        name='flex-wrap'
        value={'nowrap'}
        onClick={changedNowrap}
      />
      <input
        className={common.elementButton}
        type='button'
        name='flex-wrap'
        value={'wrap'}
        onClick={changedWrap}
      />
      <input
        className={common.elementButton}
        type='button'
        name='flex-wrap'
        value={'wrap-reverse'}
        onClick={changedWrapReverse}
      />
      <div ref={contentsBox} className={common.contentsBox}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
      </div>
    </div>
  );
};

export default FlexWrap;
