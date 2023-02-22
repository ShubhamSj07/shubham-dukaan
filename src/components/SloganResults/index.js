import React from 'react';
import { RightArrow } from '../../assets/Icons';
import { SLOGANS } from '../../data/slogans';
import Tooltip from '../Tooltip';
import styles from './style.module.scss';

export const SloganResults = () => {
  const copySlogan = async title => {
    if (!navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(title);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className={styles['sloganResult__container']}>
      <div className={styles['sloganResult__container__header']}>
        <h2>We have generated 1,023 slogans for “cozy”</h2>
        <button>Download all</button>
      </div>
      <div className={styles['sloganResult__container__content']}>
        {SLOGANS.map(slogan => {
          return (
            <Tooltip key={slogan.id} onClick={() => copySlogan(slogan.title)}>
              <div className={styles['slogan']}>
                <p>{slogan.title}</p>
              </div>
            </Tooltip>
          );
        })}
      </div>
      <hr />
      <div className={styles['sloganResult__container__pagination']}>
        <div className={styles['sloganResult__container__pagination-pages']}>
          <button className={styles['active']}>1</button>
          <button>2</button>
          <button>3</button>
          <p>...</p>
          <button>22</button>
        </div>
        <div className={styles['sloganResult__container__pagination-next']}>
          <button>
            Next <RightArrow />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
