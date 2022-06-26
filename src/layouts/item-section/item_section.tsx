import styles from "./item_section.module.scss";
import AddListItem from "../../components/add_list/list-item";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/auth";
import { activeListSelector, getActiveList } from "../../features/added-list";
import { useCallback, useEffect, useState } from "react";
import Spinner from "../../components/spinners/spinner";
import { getCategories } from "../../util/types";
import { updateCurrentListName } from "../../util/api";
import {
  DetailState,
  displaySelector,
} from "../../features/details-display-state";
import SlideIn from "../../components/spinners/SlideIn";

export default function ItemSection() {
  const { data } = useAppSelector(authSelector);
  const [listName, setListName] = useState("");
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
    await updateCurrentListName({ name: listName, id: "22" }, data);
    dispatch(getActiveList(data));
  }

  const categories = getCategories(activeList.list);

  let displaying: JSX.Element;

  if (pending && activeList.list.length == 0) {
    displaying = <Spinner />;
  } else if (pending && activeList.list.length > 0) {
    displaying = (
      <AddListItem activeList={activeList} categories={categories} />
    );
  } else {
    displaying = error ? (
      <p>Something Went Wrong</p>
    ) : (
      <AddListItem activeList={activeList} categories={categories} />
    );
  }

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
            <p>Didn&apos;t find what you need?</p>
            <button>Add item</button>
          </div>
          <div>{pending && activeList.list.length > 0 && <SlideIn />}</div>
        </div>
        {displaying}
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
