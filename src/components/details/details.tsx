import React from 'react';
import styles from './details.module.scss';
import {MdKeyboardBackspace} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {previewSelector} from '../../features/item-preview';
import {showEditState} from '../../features/details-display-state';
import {addToActiveList} from '../../util/api';
import {authSelector} from '../../features/auth';

const Details = () => {
  const {item} = useAppSelector(previewSelector);
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(authSelector);
  
  async function addToList() {
    if (item) {
      const input = {
        itemId: item.id,
        quantity: 1,
      };
      await addToActiveList(input, data);
      dispatch(showEditState());
    }
  }
  
  const notes =
    ' Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.';
  return item ? (
    <section className={styles.details__container}>
      <div
        className={styles.details__container__nav}
        onClick={() => dispatch(showEditState())}
      >
        <MdKeyboardBackspace />
        <p>back</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <p className={styles.details__container__sub}>name</p>
      <p className={styles.details__container__text}>{item.name}</p>
      <p className={styles.details__container__sub}>category</p>
      <p className={styles.details__container__text}>{item.category}</p>
      <p className={styles.details__container__sub}>note</p>
      <p className={styles.details__container__text}>{item.note}</p>
      <div className={styles.buttons}>
        <button className={styles.buttons__delete}>delete</button>
        <button className={styles.buttons__add} onClick={() => addToList()}>
          Add to list
        </button>
      </div>
    </section>
  ) : (
    <div />
  );
};

export default Details;
