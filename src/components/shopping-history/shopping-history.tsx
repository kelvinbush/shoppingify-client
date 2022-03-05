import React from 'react';
import styles from './shopping-history.module.scss';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';

const ShoppingHistory = () => {
  const data = [
    {
      title: 'August 2021',
      list: [
        { name: 'Grocery List', date: 'Mon 27.8.2021', completed: true },
        {
          name: "Eero's farewell party",
          date: 'Mon 24.8.2021',
          completed: true,
        },
      ],
    },
    {
      title: 'July 2021',
      list: [
        {
          name: 'Boarding game week 2',
          date: 'Mon 27.7.2021',
          completed: true,
        },
        {
          name: 'Grocery List',
          date: 'Mon 16.7.2021',
          completed: false,
        },
      ],
    },
  ];
  return (
    <div className={styles.history}>
      <h2 className={styles.history__header}>Shopping history</h2>
      <div className={styles.history_scroll}>
        {data.map((list) => (
          <div className={styles.history__container}>
            <p className={styles.history__title}>{list.title}</p>
            {list.list.map((item) => (
              <div className={styles.history__list_card}>
                <p className={styles.history__list_card_title}>{item.name}</p>
                <MdDateRange className={styles.history__list_card_date_icon} />
                <p className={styles.history__list_card_date}>{item.date}</p>
                <div
                  className={styles.history__list_card_status}
                  style={{
                    borderColor: `${item.completed ? '#56CCF2' : '#EB5757'}`,
                  }}
                >
                  <p
                    style={{
                      color: `${item.completed ? '#56CCF2' : '#EB5757'}`,
                    }}
                  >
                    {item.completed ? 'completed' : 'cancelled'}
                  </p>
                </div>
                <AiOutlineRight
                  className={styles.history__list_card_right_icon}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingHistory;
