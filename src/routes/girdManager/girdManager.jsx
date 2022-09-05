import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './girdManager.module.css';

const GirdManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>GirdManager</section>
    </>
  );
};

export default GirdManager;
