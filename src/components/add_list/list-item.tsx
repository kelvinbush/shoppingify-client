import { ActiveItemResponse } from '../../features/added-list/actions';
import styles from './add-list-item.module.scss';
import ShoppingListItem from '../complete-list/shopping-list-item';

export default function AddListItem({
  activeList,
  categories,
}: {
  categories: string[];
  activeList: ActiveItemResponse;
}) {
  return (
    <>
      <div className={styles.name__header}>
        <h3>{activeList.name}</h3>
        <svg className={styles.name__header__name__icon}>
          <use xlinkHref={'/img/sprite.svg#icon-edit-pencil'} />
        </svg>
      </div>
      <div className={styles.my__items}>
        <div className={styles.my__items__list}>
          {categories.map((category) => {
            return (
              <ul key={category}>
                <p className={styles.my__items__list__header}>{category}</p>
                {activeList.list.map((item) => {
                  if (item.category === category) {
                    return <ShoppingListItem item={item} isEdit={false} />;
                  }
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
