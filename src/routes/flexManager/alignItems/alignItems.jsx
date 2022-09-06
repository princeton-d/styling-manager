import React, { useRef } from 'react';
import styles from './alignItems.module.css';
import common from '../common/common.module.css';

const AlignItems = () => {
  const contentsBox = useRef();
  const changedStretch = () => {
    contentsBox.current.style.alignItems = 'stretch';
  };
  const changedCenter = () => {
    contentsBox.current.style.alignItems = 'center';
  };
  const changedFlexStart = () => {
    contentsBox.current.style.alignItems = 'flex-start';
  };
  const changedFlexEnd = () => {
    contentsBox.current.style.alignItems = 'flex-end';
  };
  const changedBaseline = () => {
    contentsBox.current.style.alignItems = 'baseline';
  };
  return (
    <div className={styles.alignItems}>
      <p className={common.propertyName}>align-items</p>
      <input
        type='button'
        name='align-items'
        value={'stretch'}
        onClick={changedStretch}
      />
      <input
        type='button'
        name='align-items'
        value={'center'}
        onClick={changedCenter}
      />
      <input
        type='button'
        name='align-items'
        value={'flex-start'}
        onClick={changedFlexStart}
      />
      <input
        type='button'
        name='align-items'
        value={'flex-end'}
        onClick={changedFlexEnd}
      />
      <input
        type='button'
        name='align-items'
        value={'baseline'}
        onClick={changedBaseline}
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

export default AlignItems;
