import React from 'react';
import styles from './girdManager.module.css';
import common from '../../common/common.module.css';
import OnAuthStateChanged from '../../components/logout/AuthStateChanged/OnAuthStateChanged';

const GirdManager = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <OnAuthStateChanged setIsLogin={setIsLogin} />
      <section className={styles.container}>
        <p className={common.title}>Gird Manager</p>
      </section>
    </>
  );
};

export default GirdManager;
