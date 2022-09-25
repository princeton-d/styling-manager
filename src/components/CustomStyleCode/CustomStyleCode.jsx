import React from 'react';
import styles from './CustomStyleCode.module.css';

const CustomStyleCode = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Custom Style Code</h2>
        <div className={styles.contentsBox}>
          <p>contents</p>
          <div className={styles.content}>
            0<br />
            Click To Copy
          </div>
        </div>
        <div className={styles.contentsBox}>
          <p>contents</p>
          <div className={styles.content}>
            0<br />
            Click To Copy
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomStyleCode;
