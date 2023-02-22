import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';
import styles from './style.module.scss';

export const Products = () => {
  return (
    <section className={styles['products__container']}>
      <div className={styles['products__container__header']}>
        <h1>Try our other free products</h1>
      </div>
      <div className={styles['products__container__cards']}>
        {PRODUCTS.map(product => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              icon={product.icon}
              description={product.description}
            />
          );
        })}
      </div>
    </section>
  );
};
