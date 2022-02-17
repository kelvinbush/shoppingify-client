import styles from "./main_content.module.scss";

export default function MainContent() {
  return (
    <section className={styles.shop}>
      <div className={styles.header}>
        <header>
          <span>Shoppingify</span> allows you to take your shopping list
          wherever you go
        </header>
        <form action="#" className={styles.search}>
          <button className={styles.search__button}>
            <svg className={styles.search__icon}>
              <use xlinkHref={"/img/sprite.svg#icon-magnifying-glass"} />
            </svg>
          </button>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Search items"
          />
        </form>
      </div>
      <div className={styles.content}>
        <h3 className={styles.content__header}>Fruit and Vegetables</h3>
        <div className={styles.content__items__box}>
          <div className={styles.content__item}>
            <p>Avocado</p>
            <svg className={styles.item__plus}>
              <use xlinkHref={"/img/sprite.svg#icon-plus"} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
