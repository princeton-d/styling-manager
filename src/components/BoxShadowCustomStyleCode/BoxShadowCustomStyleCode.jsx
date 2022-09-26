import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './BoxShadowCustomStyleCode.module.css';

const BoxShadowCustomStyleCode = ({ boxShadowStyles, userInfo }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Custom Style Code</h2>
        <div className={styles.contentsArea}>
          {boxShadowStyles.map((prop) => {
            const isOwner = userInfo.uid === prop.creatorId;
            return (
              isOwner && (
                <div className={styles.contentsBox} key={prop.id}>
                  <div className={styles.leftContent}>
                    <p className={styles.styleCode}>{prop.style}</p>
                    <div className={styles.buttonArea}>
                      <CopyToClipboard text={prop.style}>
                        <button>Copy</button>
                      </CopyToClipboard>
                      <button>Delete style code</button>
                    </div>
                  </div>
                  <div
                    className={styles.content}
                    style={{ boxShadow: prop.styleCode }}
                  >
                    Click To Copy
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoxShadowCustomStyleCode;
