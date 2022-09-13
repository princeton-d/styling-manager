import React from 'react';
import styles from './boxShadowSampleItem.module.css';

const BoxShadowSampleItem = ({ style }) => {
  return (
    <li
      className={styles.box}
      style={{ boxShadow: style.style }}
      key={style.num}
    >
      {style.num}
    </li>
  );
};

export default BoxShadowSampleItem;
