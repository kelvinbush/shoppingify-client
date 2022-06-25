import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./layouts/sidebar/sidebar";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { authSelector, getTokensFromLocal } from "./features/auth";
import Login from "./pages/auth";
import MainContent from "./layouts/main-content/main_content";
import Statistics from "./components/statistics/statistics";
import ShoppingHistory from "./components/shopping-history/shopping-history";
import { DetailState, displaySelector } from "./features/details-display-state";
import Details from "./components/details/details";
import ItemSection from "./layouts/item-section/item_section";
import styles from "./App.module.scss";
import axios from "axios";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useAppSelector(authSelector);
  const { screen } = useAppSelector(displaySelector);

  useEffect(() => {
    dispatch(getTokensFromLocal());
    if (data.accessToken.length > 1) {
      setIsLoggedIn(true);
    }
  }, [data.accessToken.length, dispatch]);

  let detail = <></>;

  if (isLoggedIn) {
    detail = screen === DetailState.details ? <Details /> : <ItemSection />;
  }

  axios.interceptors.response.use(
    (response) => {
      if (response.headers["x-access-token"])
        console.log(response.headers["x-access-token"]);
      return response;
    },
    (error) => {
      if (error.response.status == 403) {
        console.log("away");
      }
      return Promise.reject(error);
    }
  );

  return (
    <div className={styles.container}>
      <Sidebar />
      <Routes>
        <Route
          path={"/"}
          element={isLoggedIn ? <Navigate to="/shop/list" /> : <Login />}
        />
        <Route path={"shop"}>
          <Route path={"list"} element={<MainContent />} />
          <Route path={"stats"} element={<Statistics />} />
          <Route path={"history"} element={<ShoppingHistory />} />
        </Route>
      </Routes>
      {detail}
    </div>
  );
}

export default App;
