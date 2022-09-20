import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../logout/logout';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigationBar}>
      <Link to='/home'>
        <p className={styles.home}>Styling Manager</p>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link to='/home/boxShadowManager'>box Shadow</Link>
        </li>
        <li>
          <Link to='/home/textShadowManager'>text Shadow</Link>
        </li>
        <li>
          <Link to='/home/colorManager'>color</Link>
        </li>
        <li>
          <Link to='/home/fontManager'>font</Link>
        </li>
        <li>
          <Link to='/home/flexManager'>flex</Link>
        </li>
        <li>
          <Link to='/home/gridManager'>grid</Link>
        </li>
        {/* <Logout /> */}
      </ul>
    </nav>
  );
};

export default Navigation;
