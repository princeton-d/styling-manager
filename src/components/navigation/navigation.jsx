import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navigationBar}>
      <Link to='/'>
        <p className={styles.home}>Styling Manager</p>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link to='/boxShadowManager'>box Shadow</Link>
        </li>
        <li>
          <Link to='/textShadowManager'>text Shadow</Link>
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
        <li
          onClick={() => {
            setIsLogin(!isLogin);
            navigate('/');
          }}
        >
          <a>{isLogin ? 'Logout' : 'Go auth page'}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
