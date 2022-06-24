import React from 'react';
import {ShopItem} from '../../features/content';
import styles from './shop-item.module.scss';
import {addToActiveList} from '../../util/api';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {authSelector} from '../../features/auth';
import {getActiveList} from '../../features/added-list';
import {addItemToPreview} from '../../features/item-preview';
import {showDetailsState} from '../../features/details-display-state';

type Props = {
  categories: string[];
  list: ShopItem[];
};

const ShopItemList: React.FC<Props> = ({categories, list}) => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(authSelector);
  
  async function addToList(id: string) {
    const input = {
      itemId: id,
      quantity: 1,
    };
    await addToActiveList(input, data);
    dispatch(getActiveList(data));
  }
  
  function previewItem(item: ShopItem) {
    dispatch(addItemToPreview(item));
    dispatch(showDetailsState());
  }
  
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
                        <p onClick={() => previewItem(item)}>{item.name}</p>
                        <svg
                          className={styles.item__plus}
                          onClick={() => addToList(item.id)}
                        >
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
};

export default ShopItemList;
