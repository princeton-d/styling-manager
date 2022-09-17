import React from 'react';
import styles from './textShadowSampleList.module.css';
import textShadow from '../../data/textShadow.json';
import TextShadowSampleItem from '../textShadowSampleItem/textShadowSampleItem';

const TextShadowSampleList = () => {
  const textShadowSample = textShadow.textShadowSample;
  return (
    <ul className={styles.sampleBox}>
      {textShadowSample.map((item) => {
        return <TextShadowSampleItem key={item.num} style={item} />;
      })}
    </ul>
  );
};

export default TextShadowSampleList;
