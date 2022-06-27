import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { authSelector, getTokensFromLocal } from "./features/auth";
import Login from "./pages/auth";
import MainContent from "./layouts/main-content/main_content";
import Statistics from "./components/statistics/statistics";
import ShoppingHistory from "./components/shopping-history/shopping-history";
import axios from "axios";
import Shop from "./pages/shop";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data } = useAppSelector(authSelector);

  useEffect(() => {
    dispatch(getTokensFromLocal());
    if (data.accessToken.length > 1) {
      setIsLoggedIn(true);
    }
  }, [data.accessToken.length, dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else navigate("/shop/list");
  }, [isLoggedIn]);

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
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Navigate to={"shop/list"} replace={false} />}
      />
      <Route path={"/login"} element={<Login />} />
      <Route path={"shop"} element={<Shop isLoggedIn={isLoggedIn} />}>
        <Route path={"list"} element={<MainContent />} />
        <Route path={"stats"} element={<Statistics />} />
        <Route path={"history"} element={<ShoppingHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
