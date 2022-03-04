import React from 'react';
import styles from './statistics.module.scss';

const Statistics = () => {
  const items = [
    { name: 'Banana', size: 24 },
    { name: 'Rice', size: 20 },
    { name: 'Chicken 1kg', size: 16 },
  ];
  const categories = [
    { name: 'Fruit and vegetables', size: 43 },
    { name: 'Meat and Fish', size: 24 },
    { name: 'Pets', size: 20 },
  ];

  return (
    <div className={styles.statistics__container}>
      <div className={styles.statistics__top}>
        <div className={styles.statistics__top__items}>
          <h2>Top items</h2>
          {items.map((item) => (
            <div className={styles.statistics__top__item_container}>
              <div className={styles.statistics__top__item_text}>
                <p>{item.name}</p>
                <p>{item.size}%</p>
              </div>
              <div className={styles.statistics__top__item_bar}>
                <div
                  style={{ width: `${item.size}%`, backgroundColor: '#F9A109' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.statistics__top__categories}>
          <h2>Top categories</h2>
          {categories.map((item) => (
            <div className={styles.statistics__top__item_container}>
              <div className={styles.statistics__top__item_text}>
                <p>{item.name}</p>
                <p>{item.size}%</p>
              </div>
              <div className={styles.statistics__top__item_bar}>
                <div
                  style={{ width: `${item.size}%`, backgroundColor: '#56CCF2' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.statistics__chart}>
        <h2>Monthly Summary</h2>
      </div>
    </div>
  );
};
export default Statistics;
