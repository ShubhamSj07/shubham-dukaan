import React from 'react';
import { FEATURES } from '../../data/features';
import { FeatureCard } from './FeatureCard';
import styles from './style.module.scss';

export const Features = () => {
  return (
    <div className={styles['features__container']}>
      <div className={styles['features__container__cards']}>
        {FEATURES.map(feature => {
          return (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};
