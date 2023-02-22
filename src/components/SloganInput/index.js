import React from 'react';
import styles from './style.module.scss';

export const SloganInput = () => {
  return (
    <div className={styles['sloganMaker__container']}>
      <div className={styles['sloganMaker__container__header']}>
        <h1>Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
      </div>
      <div className={styles['sloganMaker__container__content']}>
        <h3>Word for your slogan</h3>
        <input type="text" placeholder="Enter a word.." defaultValue="cozy" />
      </div>
      <button>Generate slogans</button>
      <hr />
    </div>
  );
};
