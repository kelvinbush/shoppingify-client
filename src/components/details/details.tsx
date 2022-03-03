import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from './details.module.scss';
import { MdKeyboardBackspace } from 'react-icons/md';

const Details = () => {
  const notes =
    ' Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.';
  return (
    <section className={styles.details__container}>
      <div className={styles.details__container__nav}>
        <MdKeyboardBackspace />
        <p>back</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <p className={styles.details__container__sub}>name</p>
      <p className={styles.details__container__text}>Avocado</p>
      <p className={styles.details__container__sub}>category</p>
      <p className={styles.details__container__text}>Fruit and Vegetables</p>
      <p className={styles.details__container__sub}>note</p>
      <p className={styles.details__container__text}>{notes}</p>
      <div className={styles.buttons}>
        <button className={styles.buttons__delete}>delete</button>
        <button className={styles.buttons__add}>Add to list</button>
      </div>
    </section>
  );
};

export default Details;
