import styles from './item_section.module.scss';
import AddListItem from '../../components/add_list/list-item';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authSelector } from '../../features/auth';
import { activeListSelector } from '../../features/added-list/selectors';
import { useCallback, useEffect, useState } from 'react';
import { getActiveList } from '../../features/added-list';
import Spinner from '../../components/spinner/spinner';
import { getCategories } from '../../util/types';

export default function ItemSection() {
  const { data } = useAppSelector(authSelector);
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();
  const { activeList, pending, error } = useAppSelector(activeListSelector);

  const initialFetch = useCallback(() => {
    dispatch(getActiveList(data));
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const categories = getCategories(activeList.list);

  const isPending = <Spinner />;
  const content = error ? (
    <p>Something Went Wrong</p>
  ) : (
    <>
      <AddListItem
        activeList={activeList}
        categories={categories}
        toggleEdit={async () => setEdit(!edit)}
        isEditing={edit}
      />
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
      {!edit ? (
        <div className={styles.details__actions}>
          <input placeholder="Enter a name" type="text" />
          <button className={styles.details__actions__save}>Save</button>
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
