import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './style.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['layout']}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
