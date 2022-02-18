import { ShopItem } from '../../features/content';
import styles from './shop-item.module.scss';

export default function ShopItemList({
  categories,
  list,
}: {
  categories: string[];
  list: ShopItem[];
}) {
  return (
    <div className={styles.content}>
      {categories.map((category) => {
        return (
          <>
            <h3 key={category} className={styles.content__header}>
              {category}
            </h3>
            <div className={styles.content__items__box}>
              {list.map((item) => {
                if (item.category === category) {
                  return (
                    <>
                      <div key={item.id} className={styles.content__item}>
                        <p>{item.name}</p>
                        <svg className={styles.item__plus}>
                          <use xlinkHref={'/img/sprite.svg#icon-plus'} />
                        </svg>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
