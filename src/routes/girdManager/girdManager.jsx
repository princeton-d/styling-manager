import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './girdManager.module.css';
import common from '../../common/common.module.css';

const GirdManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>Gird Manager</p>
      </section>
    </>
  );
};

export default GirdManager;
