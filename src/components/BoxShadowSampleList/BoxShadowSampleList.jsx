import React from 'react';
import styles from './BoxShadowSampleList.module.css';
import BoxShadowSampleItem from '../boxShadowSampleItem/boxShadowSampleItem';
import boxShadowSampleData from '../../data/boxShadow.json';

const BoxShadowSampleList = () => {
  const boxShadowSample = boxShadowSampleData.boxShadowSample;
  return (
    <ul className={styles.sampleBox}>
      {boxShadowSample.map((item) => {
        return <BoxShadowSampleItem style={item} key={item.num} />;
      })}
    </ul>
  );
};

export default BoxShadowSampleList;
