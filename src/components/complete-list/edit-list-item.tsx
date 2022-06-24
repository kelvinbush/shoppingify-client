import styles from './shopping-list-item.module.scss';
import { ActiveListItem, getActiveList } from '../../features/added-list';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteActiveItem, updateQuantity } from '../../util/api';
import { authSelector } from '../../features/auth';

export default function EditListItem({ item }: { item: ActiveListItem }) {
  const [isEditing, setEditing] = useState(false);
  const { data } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  async function submitQuantity(quantity: number) {
    const input = {
      itemId: item.activeId,
      quantity,
    };
    await updateQuantity(input, data);
    dispatch(getActiveList(data));
  }

  async function deleteItem(quantity: number) {
    const input = {
      ...item,
      quantity,
    };
    await deleteActiveItem(input, data);
    dispatch(getActiveList(data));
  }

  return !isEditing ? (
    <div key={item.id} className={styles.list__item}>
      <p>{item.name}</p>
      <div
        className={styles.list__item__quantity}
        onClick={() => setEditing(true)}
      >
        <span>{item.quantity}pcs</span>
      </div>
    </div>
  ) : (
    <div key={item.id} className={styles.list__item}>
      <p>{item.name}</p>
      <div
        className={styles.item__controls}
        contentEditable={true}
        onBlur={() => setEditing(false)}
      >
        <div className={styles.item__controls__delete}>
          <img
            src={'/img/delete.svg'}
            alt="delete icon"
            onClick={() => deleteItem(item.quantity)}
          />
        </div>
        <img
          src={'/img/remove.svg'}
          alt="remove icon"
          className={styles.item__controls__remove}
          onClick={() => submitQuantity(item.quantity - 1)}
        />
        <div className={styles.list__item__quantity}>
          <span>{item.quantity}pcs</span>
        </div>
        <img
          src={'/img/add.svg'}
          alt="add icon"
          className={styles.item__controls__add}
          onClick={() => submitQuantity(item.quantity + 1)}
        />
      </div>
    </div>
  );
}
