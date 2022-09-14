import React from 'react';
import styles from './boxShadowSampleItem.module.css';

const BoxShadowSampleItem = ({ style }) => {
  return (
    <li
      className={styles.box}
      style={{ boxShadow: style.style }}
      key={style.num}
    >
      <p>{style.num}</p>
      Click to copy
      <br />
      box-shadow
    </li>
  );
};

export default BoxShadowSampleItem;
