import styles from './home.module.css';
import React, { useState } from 'react';
import Navigation from '../../components/navigation/navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>Styling Manager</div>
    </>
  );
};

export default Home;
