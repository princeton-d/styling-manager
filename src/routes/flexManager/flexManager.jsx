import React from 'react';
import Navigation from '../../components/navigation/navigation';
import AlignContent from './alignContent/alignContent';
import AlignItems from './alignItems/alignItems';
import FlexDirection from './flexDirection/flexDirection';
import styles from './flexManager.module.css';
import FlexWrap from './flexWrap/flexWrap';
import JustifyContent from './justifyContent/justifyContent';

const FlexManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <FlexWrap />
        <FlexDirection />
        <JustifyContent />
        <AlignItems />
        <AlignContent />
      </section>
    </>
  );
};

export default FlexManager;
