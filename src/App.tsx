import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  authSelector,
  getTokensFromLocal,
  saveTokensToLocal,
} from "./features/auth";
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

  const getTokens = useCallback(() => {
    dispatch(getTokensFromLocal());
    if (data.accessToken.length > 1) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    getTokens();
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    } else navigate("/", { replace: true });
  }, [getTokens, isLoggedIn]);

  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"shop/list"} replace />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"shop"} element={<Shop />}>
        <Route path={"list"} element={<MainContent />} />
        <Route path={"stats"} element={<Statistics />} />
        <Route path={"history"} element={<ShoppingHistory />} />
      </Route>
      <Route path={"*"} element={<Navigate to={"shop/list"} replace />} />
    </Routes>
  );
}

export default App;
