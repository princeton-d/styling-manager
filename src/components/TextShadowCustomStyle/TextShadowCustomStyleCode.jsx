import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { dbService } from '../../fbase';
import styles from './TextShadowCustomStyleCode.module.css';

const TextShadowCustomStyleCode = ({ textShadowStyles, userInfo }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Custom Style Code</h2>
        <div className={styles.contentsArea}>
          {textShadowStyles.map((prop) => {
            const isOwner = userInfo.uid === prop.creatorId;
            const onDeleteButton = async () => {
              const isOk = window.confirm(
                'Are you sure you want to delete the confirm style code?'
              );
              if (isOk) {
                await deleteDoc(doc(dbService, 'textShadowData', `${prop.id}`));
              }
            };
            return (
              isOwner && (
                <div className={styles.contentsBox} key={prop.id}>
                  <div className={styles.leftContent}>
                    <p className={styles.styleCode}>{prop.style}</p>
                    <div className={styles.buttonArea}>
                      <CopyToClipboard text={prop.style}>
                        <button>Copy</button>
                      </CopyToClipboard>
                      <button onClick={onDeleteButton}>
                        Delete style code
                      </button>
                    </div>
                  </div>
                  <div
                    className={styles.content}
                    style={{ textShadow: prop.styleCode }}
                  >
                    Content
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

export default TextShadowCustomStyleCode;
