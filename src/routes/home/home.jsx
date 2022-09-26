import styles from './home.module.css';
import { dbService } from '../../fbase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>Styling Manager</div>
    </>
  );
};

export default Home;
