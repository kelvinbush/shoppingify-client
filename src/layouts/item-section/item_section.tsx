import Image from "next/image";
import styles from "./item_section.module.scss";
import AddListItem from "../../components/list-item";

export default function ItemSection() {
  return (
    <section className={styles.details}>
      <div>
        <div className={styles.add}>
          <img
            className={styles.add__source}
            src={"/img/source.svg"}
            alt="Source image"
          />
          <div className={styles.add__container}>
            <p>Didn't find what you need?</p>
            <button>Add item</button>
          </div>
        </div>
        <div className={styles.list__header}>
          <h3>Shopping list</h3>
          <svg className={styles.list__header__icon}>
            <use xlinkHref={"/img/sprite.svg#icon-edit-pencil"} />
          </svg>
        </div>
        <AddListItem />
      </div>
      <div className={styles.details__actions}>
        <input placeholder="Enter a name" type="text" />
        <button>Save</button>
      </div>
    </section>
  );
}
