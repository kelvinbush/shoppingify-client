import React from "react";
import Sidebar from "../layouts/sidebar/sidebar";
import {
  DetailState,
  displaySelector,
} from "../features/details-display-state";
import Details from "../components/details/details";
import ItemSection from "../layouts/item-section/item_section";
import { useAppSelector } from "../app/hooks";
import { Outlet } from "react-router";
import styles from "../App.module.scss";

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const Shop = () => {
  const { screen } = useAppSelector(displaySelector);
  const detail = screen === DetailState.details ? <Details /> : <ItemSection />;
  return (
    <div className={styles.container}>
      <Sidebar />
      <Outlet />
      {detail}
    </div>
  );
};

export default Shop;
