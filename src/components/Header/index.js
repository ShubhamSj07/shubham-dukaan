import React from 'react';
import dukaan from '../../assets/dukaan.svg';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <nav className={styles['nav']}>
      <div className="logo">
        <img src={dukaan} alt="Dukaan" />
      </div>
      <div className={styles['nav_links']}>
        <p>Sign in</p>
        <button>Dukaan for PC</button>
      </div>
    </nav>
  );
};
