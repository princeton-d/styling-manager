import React from 'react';
import AlignContent from './alignContent/alignContent';
import AlignItems from './alignItems/alignItems';
import FlexDirection from './flexDirection/flexDirection';
import styles from './flexManager.module.css';
import common from '../../common/common.module.css';
import FlexWrap from './flexWrap/flexWrap';
import JustifyContent from './justifyContent/justifyContent';
import OnAuthStateChanged from '../../components/logout/AuthStateChanged/OnAuthStateChanged';

const FlexManager = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <OnAuthStateChanged setIsLogin={setIsLogin} />
      <section className={styles.container}>
        <p className={common.title}>Flex Manager</p>
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
