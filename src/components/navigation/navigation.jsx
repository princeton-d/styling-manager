import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../logout/logout';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigationBar}>
      <Link to='/'>
        <p className={styles.home}>Styling Manager</p>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link
            to='/boxShadowManager'
            onClick={(e) => {
              console.log(e.target);
            }}
          >
            box Shadow
          </Link>
        </li>
        <li>
          <Link to='/textShadowManager'>text Shadow</Link>
        </li>
        <li>
          <Link to='/colorManager'>color</Link>
        </li>
        <li>
          <Link to='/fontManager'>font</Link>
        </li>
        <li>
          <Link to='/flexManager'>flex</Link>
        </li>
        <li>
          <Link to='/gridManager'>grid</Link>
        </li>
        {/* <Logout /> */}
      </ul>
    </nav>
  );
};

export default Navigation;
