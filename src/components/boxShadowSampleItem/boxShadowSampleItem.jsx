import React from 'react';
import styles from './boxShadowSampleItem.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRef } from 'react';

const BoxShadowSampleItem = ({ style }) => {
  const liRef = useRef();
  return (
    <CopyToClipboard text={`box-shadow: ${style.style};`}>
      <li
        ref={liRef}
        className={styles.box}
        onClick={(e) => {
          e.target.innerText = `Copy`;
          setTimeout(() => {
            e.target.innerText = `${style.num}
            Click To Copy`;
          }, 1000);
        }}
        style={{ boxShadow: style.style }}
        key={style.num}
      >
        <p>
          {style.num}
          {<br />}Click To Copy
        </p>
      </li>
    </CopyToClipboard>
  );
};

export default BoxShadowSampleItem;
