import styles from './shopping-list-item.module.scss';
import { ActiveListItem } from '../../features/added-list';

export default function EditListItem({ item }: { item: ActiveListItem }) {
  return (
    <div key={item.id} className={styles.list__item}>
      <p>{item.name}</p>
      <div className={styles.list__item__quantity}>
        <span>{item.quantity}pcs</span>
      </div>
    </div>
  );
}
