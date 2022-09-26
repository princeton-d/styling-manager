import React from 'react';
import styles from './CustomStyleCode.module.css';

const CustomStyleCode = ({ boxShadowStyles }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Custom Style Code</h2>
        {boxShadowStyles.map((prop) => (
          <div className={styles.contentsBox} key={prop.id}>
            <p>{prop.style}</p>
            <div
              className={styles.content}
              style={{ boxShadow: prop.styleCode }}
            >
              Click To Copy
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomStyleCode;
