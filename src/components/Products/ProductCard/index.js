import React from 'react';
import styles from './style.module.scss';

export const ProductCard = ({ title, description, icon }) => {
  return (
    <div className={styles['product__card']}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
