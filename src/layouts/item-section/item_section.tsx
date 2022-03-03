import styles from './item_section.module.scss';
import AddListItem from '../../components/add_list/list-item';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authSelector } from '../../features/auth';
import { activeListSelector, getActiveList } from '../../features/added-list';
import { useCallback, useEffect, useState } from 'react';
import Spinner from '../../components/spinner/spinner';
import { getCategories } from '../../util/types';
import { updateCurrentListName } from '../../util/api';
import {
  DetailState,
  displaySelector,
} from '../../features/details-display-state';

export default function ItemSection() {
  const { data } = useAppSelector(authSelector);
  const [listName, setListName] = useState('');
  const dispatch = useAppDispatch();
  const { activeList, pending, error } = useAppSelector(activeListSelector);
  const { screen } = useAppSelector(displaySelector);

  const initialFetch = useCallback(() => {
    dispatch(getActiveList(data));
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch, dispatch]);

  async function submitListName() {
    await updateCurrentListName({ name: listName, id: '22' }, data);
    dispatch(getActiveList(data));
  }

  const categories = getCategories(activeList.list);

  const isPending = <Spinner />;
  const content = error ? (
    <p>Something Went Wrong</p>
  ) : (
    <>
      <AddListItem activeList={activeList} categories={categories} />
    </>
  );
  return (
    <section className={styles.details}>
      <div>
        <div className={styles.add}>
          <img
            className={styles.add__source}
            src={'/img/source.svg'}
            alt="Source image"
          />
          <div className={styles.add__container}>
            <p>Didn't find what you need?</p>
            <button>Add item</button>
          </div>
        </div>
        {pending ? isPending : content}
      </div>
      {screen === DetailState.edit ? (
        <div className={styles.details__actions}>
          <input
            placeholder="Enter a name"
            type="text"
            value={listName}
            onChange={(event) => setListName(event.target.value)}
          />
          <button
            onClick={() => submitListName()}
            className={styles.details__actions__save}
          >
            Save
          </button>
        </div>
      ) : (
        <div className={styles.details__actions}>
          <button className={styles.details__actions__cancel}>cancel</button>
          <button className={styles.details__actions__complete}>
            Complete
          </button>
        </div>
      )}
    </section>
  );
}
