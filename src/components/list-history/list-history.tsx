import React from 'react';
import { MdDateRange, MdKeyboardBackspace } from 'react-icons/md';
import styles from './list-history.module.scss';

const ListHistory = () => {
  const data = {
    title: "Eero's farewell party",
    date: 'Mon 24.8.2021',
    list: [
      { name: 'Cookies Chocolate', quantity: 3, category: 'Cookies' },
      { name: 'Doris Truffle', quantity: 1, category: 'Cookies' },
      { name: 'Coke', quantity: 4, category: 'Beverages' },
      { name: 'Sprite', quantity: 8, category: 'Beverages' },
      { name: '2 x Soft drink 1.5 l', quantity: 1, category: 'Beverages' },
    ],
  };

  const categories = ['Cookies', 'Beverages'];

  return (
    <div className={styles.list_hist}>
      <div className={styles.list_hist__nav}>
        <MdKeyboardBackspace />
        <p>back</p>
      </div>
      <div>
        <MdDateRange className={styles.history__list_card_date_icon} />
        <p className={styles.history__list_card_date}>{}</p>
      </div>
    </div>
  );
};

export default ListHistory;
