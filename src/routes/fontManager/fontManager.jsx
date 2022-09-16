import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './fontManager.module.css';
import common from '../../common/common.module.css';

const FontManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>Font Manager</p>
      </section>
    </>
  );
};

export default FontManager;
