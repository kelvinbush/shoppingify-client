import styles from './shopping-list-item.module.scss';
import { ActiveListItem } from '../../features/added-list';
import { useState } from 'react';

export default function EditListItem({ item }: { item: ActiveListItem }) {
  const [isEditing, setEditing] = useState(false);

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
          <img src={'/img/delete.svg'} alt="delete icon" />
        </div>
        <img
          src={'/img/remove.svg'}
          alt="remove icon"
          className={styles.item__controls__remove}
        />
        <div className={styles.list__item__quantity}>
          <span>{item.quantity}pcs</span>
        </div>
        <img
          src={'/img/add.svg'}
          alt="add icon"
          className={styles.item__controls__add}
        />
      </div>
    </div>
  );
}
