import styles from "./main_content.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/auth";
import { useCallback, useEffect } from "react";
import { getShopItems, shopItemsSelector } from "../../features/content";
import { getCategories } from "../../util/types";
import ShopItemList from "../../components/shop_item/shop-item";
import Rays from "../../components/spinners/Rays";

export default function MainContent() {
  const { data } = useAppSelector(authSelector);
  const { shopItemList, pending } = useAppSelector(shopItemsSelector);
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(() => {
    if (data.accessToken.length > 0) {
      dispatch(getShopItems(data));
    }
  }, [dispatch, data]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch, dispatch]);

  const categories = getCategories(shopItemList);
  return (
    <section className={styles.shop}>
      <div className={styles.header}>
        <header>
          <span>Shoppingify</span> allows you to take your shopping list
          wherever you go
        </header>
        <input
          className={styles.search}
          type="text"
          placeholder={"Search items"}
        />
      </div>
      {pending ? (
        <Rays />
      ) : (
        <ShopItemList categories={categories} list={shopItemList} />
      )}
    </section>
  );
}
