import React, { createContext, useRef, useState } from "react";
import MainPage from "./components/Pages/MainPage";
import Header from "./components/Tempate/Header/Header";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";

export const LongMenuContext = createContext();

function App() {
  const [openLongMenu, setOpenLongMenu] = useState(false);
  const MissClick = useRef(null);
  return (
    <LongMenuContext.Provider value={{ openLongMenu, setOpenLongMenu }}>
      <div className={styles["App"]} ref={MissClick}>
        <Header />
        <div onClick={() => setOpenLongMenu(false)}>
          <Routes>
            <Route path="/SpaceX-React/" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </LongMenuContext.Provider>
  );
}

export default App;
