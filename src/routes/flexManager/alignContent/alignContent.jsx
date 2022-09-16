import React, { useRef } from 'react';
import styles from './alignContent.module.css';
import common from '../../../common/common.module.css';

const AlignContent = () => {
  const contentsBox = useRef();
  const changedStretch = () => {
    contentsBox.current.style.alignContent = 'stretch';
  };
  const changedCenter = () => {
    contentsBox.current.style.alignContent = 'center';
  };
  const changedSpaceBetween = () => {
    contentsBox.current.style.alignContent = 'space-between';
  };
  const changedSpaceAround = () => {
    contentsBox.current.style.alignContent = 'space-around';
  };
  const changedFlexStart = () => {
    contentsBox.current.style.alignContent = 'flex-start';
  };
  const changedFlexEnd = () => {
    contentsBox.current.style.alignContent = 'flex-end';
  };
  return (
    <div className={styles.alignContent}>
      <p className={common.propertyName}>align-content</p>
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'stretch'}
        onClick={changedStretch}
      />
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'center'}
        onClick={changedCenter}
      />
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'space-between'}
        onClick={changedSpaceBetween}
      />
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'space-around'}
        onClick={changedSpaceAround}
      />
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'flex-start'}
        onClick={changedFlexStart}
      />
      <br />
      <input
        className={common.elementButton}
        type='button'
        name='align-items'
        value={'flex-end'}
        onClick={changedFlexEnd}
      />
      <div ref={contentsBox} className={styles.contentsBox}>
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

export default AlignContent;
