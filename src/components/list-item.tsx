import styles from "./add-list-item.module.scss";

export default function AddListItem() {
  return (
    <div className={styles.my__items}>
      <div className={styles.my__items__list}>
        <ul>
          <p className={styles.my__items__list__header}>Fruit and Vegetables</p>
          <div className={styles.list__item}>
            <p>Avocado</p>
            <div>
              <span>3pcs</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
