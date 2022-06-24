import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Sidebar from "./layouts/sidebar/sidebar";
import {useAppSelector} from "./app/hooks";
import {authSelector} from "./features/auth";
import Login from "./pages/auth";
import MainContent from "./layouts/main-content/main_content";
import Statistics from "./components/statistics/statistics";
import ShoppingHistory from "./components/shopping-history/shopping-history";
import {DetailState, displaySelector} from "./features/details-display-state";
import Details from "./components/details/details";
import ItemSection from "./layouts/item-section/item_section";
import styles from "./layouts/home/home.module.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {data} = useAppSelector(authSelector);
  const { screen } = useAppSelector(displaySelector);
  
  useEffect(() => {
    if (data.accessToken.length > 1) {
      setIsLoggedIn(true);
    }
  }, [data.accessToken.length]);
  
  let detail = <></>
  
  if (isLoggedIn){
    detail = screen === DetailState.details ? <Details /> : <ItemSection />
  }
  
  return (
    <div className={styles.container}>
      {isLoggedIn && <Sidebar />}
      <Routes>
        <Route path={"/"} element={isLoggedIn ? <Navigate to="/shop/list" /> : <Login />} />
        <Route path={"shop"}>
          <Route path={'list'} element={<MainContent />} />
          <Route path={'stats'} element={<Statistics />} />
          <Route path={'history'} element={<ShoppingHistory />} />
        </Route>
      </Routes>
      {detail}
    </div>
  );
}

export default App;
