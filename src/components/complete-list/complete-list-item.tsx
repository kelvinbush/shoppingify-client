import styles from "./shopping-list-item.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ActiveListItem, getActiveList } from "../../features/added-list";
import { toggleSelectItem } from "../../util/api";
import { authSelector } from "../../features/auth";

export default function CompleteListItem({ item }: { item: ActiveListItem }) {
  const { data } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  async function submit(isChecked: boolean) {
    try {
      const input = {
        itemId: item.activeId,
        isSelected: isChecked,
      };
      await toggleSelectItem(input, data);
      dispatch(getActiveList(data));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div key={item.id} className={styles.list__item}>
      <div className={styles.item__edit}>
        <label
          className={`${styles.checkbox} ${styles.path} ${styles.edit__item}`}
        >
          <input
            type="checkbox"
            checked={item.isSelected}
            onChange={() => submit(!item.isSelected)}
          />
          <svg viewBox="0 0 21 21">
            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
          </svg>
        </label>
        <p
          className={`${item.isSelected ? styles.strike : ""} ${
            styles.edit__item__text
          }`}
        >
          {item.name}
        </p>
      </div>
      <div className={styles.list__item__quantity}>
        <span>{item.quantity}pcs</span>
      </div>
    </div>
  );
}
