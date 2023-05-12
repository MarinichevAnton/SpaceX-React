import React, { createContext, useRef, useState } from "react";
import MainPage from "./components/Pages/MainPage";
import Header from "./components/Tempate/Header/Header";
import styles from "./App.module.scss";

export const LongMenuContext = createContext();

function App() {
  const [openLongMenu, setOpenLongMenu] = useState(false);
  const MissClick = useRef(null);
  return (
    <LongMenuContext.Provider value={{ openLongMenu, setOpenLongMenu }}>
      <div className={styles["App"]} ref={MissClick}>
        <Header />
        <div onClick={() => setOpenLongMenu(false)}>
          <MainPage />
        </div>
      </div>
    </LongMenuContext.Provider>
  );
}

export default App;
