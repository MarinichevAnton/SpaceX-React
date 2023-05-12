import React, { useContext } from "react";
import MenuItems from "../../Molecules/MenuItems/MenuItems";
import styles from "./style.module.scss";
import { LongMenuContext } from "../../../App";

const LongMenu: React.FC = () => {
  const { openLongMenu, setOpenLongMenu } = useContext(LongMenuContext);
  return (
    <>
      <button
        className={styles["buttonLongMenu"]}
        onClick={() => setOpenLongMenu(!openLongMenu)}
      >
        <div className={styles["buttonLongMenu__dots"]} />
        <div className={styles["buttonLongMenu__dots"]} />
        <div className={styles["buttonLongMenu__dots"]} />
      </button>
      {openLongMenu && <MenuItems />}
    </>
  );
};

export default LongMenu;
