import React from 'react';
import styles from './style.module.scss';

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles['feature__card']}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
