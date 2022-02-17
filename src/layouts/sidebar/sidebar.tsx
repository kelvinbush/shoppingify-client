import Image from "next/image";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Image
        src={"/img/logo.svg"}
        alt="logo"
        className={styles.sidebar__logo}
        width={"41"}
        height={"41"}
      />
      <div className={styles.sidebar__selection}>
        <svg className={styles.sidebar__icon}>
          <use xlinkHref={"/img/sprite.svg#icon-file-text"} />
        </svg>
        <svg className={styles.sidebar__icon}>
          <use xlinkHref={"/img/sprite.svg#icon-spinner11"} />
        </svg>
        <svg className={styles.sidebar__icon}>
          <use xlinkHref={"/img/sprite.svg#icon-stats-dots"} />
        </svg>
      </div>
      <div className={styles.sidebar__cart}>
        <svg className={styles.sidebar__cart__icon}>
          <use xlinkHref={"/img/sprite.svg#icon-cart"} />
        </svg>
        <span className={styles.sidebar__cart__text}>3</span>
      </div>
    </section>
  );
}
