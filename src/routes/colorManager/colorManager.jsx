import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './colorManager.module.css';

const ColorManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>colorManager</section>
    </>
  );
};

export default ColorManager;
