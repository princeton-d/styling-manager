import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './colorManager.module.css';
import common from '../../common/common.module.css';

const ColorManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>Color Manager</p>
      </section>
    </>
  );
};

export default ColorManager;
