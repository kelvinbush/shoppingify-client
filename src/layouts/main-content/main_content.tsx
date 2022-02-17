import styles from "./main_content.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/auth";
import { useCallback, useEffect } from "react";
import { getShopItems, shopItemsSelector } from "../../features/content";
import { Name } from "../../util/types";

export default function MainContent() {
  const { data } = useAppSelector(authSelector);
  const { data2 } = useAppSelector(shopItemsSelector);
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(() => {
    const token = {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
    dispatch(getShopItems(token));
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const beverages =
    data2.results.length > 0 ? (
      data2.results.map((item) => {
        if (item.item.category.name === Name.Beverages) {
          return (
            <>
              <div className={styles.content__item}>
                <p>{item.item.name}</p>
                <svg className={styles.item__plus}>
                  <use xlinkHref={"/img/sprite.svg#icon-plus"} />
                </svg>
              </div>
            </>
          );
        }
      })
    ) : (
      <div />
    );
  const fruit =
    data2.results.length > 0 ? (
      data2.results.map((item) => {
        if (item.item.category.name === Name.FruitAndVegetables) {
          return (
            <>
              <div className={styles.content__item}>
                <p>{item.item.name}</p>
                <svg className={styles.item__plus}>
                  <use xlinkHref={"/img/sprite.svg#icon-plus"} />
                </svg>
              </div>
            </>
          );
        }
      })
    ) : (
      <div />
    );
  const furniture =
    data2.results.length > 0 ? (
      data2.results.map((item) => {
        if (item.item.category.name === Name.Furniture) {
          return (
            <>
              <div className={styles.content__item}>
                <p>{item.item.name}</p>
                <svg className={styles.item__plus}>
                  <use xlinkHref={"/img/sprite.svg#icon-plus"} />
                </svg>
              </div>
            </>
          );
        }
      })
    ) : (
      <div />
    );

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
        <h3 className={styles.content__header}>{Name.Beverages}</h3>
        <div className={styles.content__items__box}>{beverages}</div>
        <h3 className={styles.content__header}>{Name.FruitAndVegetables}</h3>
        <div className={styles.content__items__box}>{fruit}</div>
        <h3 className={styles.content__header}>{Name.Furniture}</h3>
        <div className={styles.content__items__box}>{furniture}</div>
      </div>
    </section>
  );
}
