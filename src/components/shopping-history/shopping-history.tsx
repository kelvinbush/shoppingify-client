import React, { useCallback, useEffect } from "react";
import styles from "./shopping-history.module.scss";
import { MdDateRange } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/auth";
import {
  getShoppingHistory,
  HistoryItem,
  historySelector,
} from "../../features/history";
import { formatDate } from "../../util/types";

const ShoppingHistory = () => {
  const { data } = useAppSelector(authSelector);
  const { history } = useAppSelector(historySelector);
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(() => {
    const token = {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
    dispatch(getShoppingHistory(token));
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  type GroupedHistory = {
    date: string;
    items: HistoryItem[];
  };

  const groupedHistory = history.reduce((acc: GroupedHistory[], curr) => {
    const date = new Date(curr.created_at);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const dateString = `${month} ${year}`;
    const item = {
      date: dateString,
      items: [curr],
    };
    const index = acc.findIndex((item) => item.date === dateString);
    if (index === -1) {
      acc.push(item);
    } else {
      acc[index].items.push(curr);
    }
    return acc;
  }, []);
  return (
    <div className={styles.history}>
      <h2 className={styles.history__header}>Shopping history</h2>
      <div className={styles.history_scroll}>
        {groupedHistory &&
          groupedHistory.map((hist) => (
            <div key={hist.date} className={styles.history__container}>
              <p className={styles.history__title}>{hist.date}</p>
              {hist.items.map((item) => (
                <div key={item.id} className={styles.history__list_card}>
                  <p className={styles.history__list_card_title}>{item.name}</p>
                  <MdDateRange
                    className={styles.history__list_card_date_icon}
                  />
                  <p className={styles.history__list_card_date}>
                    {formatDate(item.created_at)}
                  </p>
                  <div
                    className={styles.history__list_card_status}
                    style={{
                      borderColor: `${item.isComplete ? "#56CCF2" : "#EB5757"}`,
                    }}
                  >
                    <p
                      style={{
                        color: `${item.isComplete ? "#56CCF2" : "#EB5757"}`,
                      }}
                    >
                      {item.isComplete ? "completed" : "cancelled"}
                    </p>
                  </div>
                  <AiOutlineRight
                    className={styles.history__list_card_right_icon}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShoppingHistory;
