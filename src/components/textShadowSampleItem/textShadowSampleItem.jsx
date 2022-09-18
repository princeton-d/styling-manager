import React from 'react';
import { useRef } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './textShadowSampleItem.module.css';

const TextShadowSampleItem = ({ style }) => {
  const liRef = useRef();
  return (
    <CopyToClipboard
      text={`text-shadow: ${style.textShadow};
    color: ${style.color};
    background-color: ${style.backgroundColor};
    ${
      style.letterSpacing === undefined
        ? ''
        : `letter-spacing: ${style.letterSpacing};`
    }`}
    >
      <li
        ref={liRef}
        className={styles.box}
        onClick={(e) => {
          e.target.innerText = `Copy`;
          setTimeout(() => {
            e.target.innerText = `Text Shadow
            Click To Copy`;
          }, 1000);
        }}
        style={{
          textShadow: style.textShadow,
          color: style.color,
          backgroundColor: style.backgroundColor,
          letterSpacing: style.letterSpacing,
        }}
      >
        <p>
          Text Shadow
          <br />
          Click To Copy
        </p>
      </li>
    </CopyToClipboard>
  );
};

export default TextShadowSampleItem;
