import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { authSelector, getTokensFromLocal } from "./features/auth";
import Login from "./pages/auth";
import MainContent from "./layouts/main-content/main_content";
import Statistics from "./components/statistics/statistics";
import ShoppingHistory from "./components/shopping-history/shopping-history";
import { DetailState, displaySelector } from "./features/details-display-state";
import Details from "./components/details/details";
import ItemSection from "./layouts/item-section/item_section";
import axios from "axios";
import Shop from "./pages/shop";

function App() {
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useAppSelector(authSelector);

  useEffect(() => {
    dispatch(getTokensFromLocal());
    if (data.accessToken.length > 1) {
      setIsLoggedIn(true);
    }
  }, [data.accessToken.length, dispatch]);

  axios.interceptors.response.use(
    (response) => {
      if (response.headers["x-access-token"]) {
        console.log(response.headers["x-access-token"]);
        const tokens = {
          accessToken: response.headers["x-access-token"],
          refreshToken: data.refreshToken,
        };
        const serializedAuth = JSON.stringify(tokens);
        localStorage.setItem("tokens", serializedAuth);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={isLoggedIn ? <Navigate to="/shop/list" /> : <Login />}
        />
        <Route path={"shop"} element={<Shop />}>
          <Route path={"list"} element={<MainContent />} />
          <Route path={"stats"} element={<Statistics />} />
          <Route path={"history"} element={<ShoppingHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
