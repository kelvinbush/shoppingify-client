import styles from './main_content.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authSelector } from '../../features/auth';
import { useCallback, useEffect } from 'react';
import { getShopItems, shopItemsSelector } from '../../features/content';
import { getCategories } from '../../util/types';
import ShopItemList from '../../components/shop_item/shop-item';

export default function MainContent() {
  const { data } = useAppSelector(authSelector);
  const { shopItemList } = useAppSelector(shopItemsSelector);
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

  const categories = getCategories(shopItemList);
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
              <use xlinkHref={'/img/sprite.svg#icon-magnifying-glass'} />
            </svg>
          </button>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Search items"
          />
        </form>
      </div>
      <ShopItemList categories={categories} list={shopItemList} />
    </section>
  );
}
