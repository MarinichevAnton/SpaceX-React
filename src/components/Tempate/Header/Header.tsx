import React, { useContext } from "react";
import styles from "./style.module.scss";
import navBarList from "../../ArraysForMap/NavBarList.json";
import ParagraphFC from "../../Atoms/ParagraphFC.tsx/ParagraphFC.tsx";
import LongMenu from "../../Atoms/LongMenu/LongMenu";
import { LongMenuContext } from "../../../App";
import Logotip from "../../Images/Pictures/logo.png";
import CornerOne from "../../Images/Pictures/cornerOne.png";
import CornerTwo from "../../Images/Pictures/cornerTwo.png";
import CornerThree from "../../Images/Pictures/cornerThree.png";
import CornerFour from "../../Images/Pictures/cornerFour.png";
import ImageFC from "../../Atoms/ImageFC/ImageFC";

const Header: React.FC = () => {
  const { setOpenLongMenu } = useContext(LongMenuContext);
  return (
    <div className={styles["header"]}>
      <div
        className={styles["header__container"]}
        onClick={():void => setOpenLongMenu(false)}
      >
        <div className={styles["header__container-logo"]}>
          <ImageFC src={Logotip} alt={"логотип"} />
          <ImageFC
            className={styles["header__container-cornerOne"]}
            src={CornerOne}
            alt={"угол1"}
          />
          <ImageFC
            className={styles["header__container-cornerTwo"]}
            src={CornerTwo}
            alt={"угол2"}
          />
          <ImageFC
            className={styles["header__container-cornerThree"]}
            src={CornerThree}
            alt={"угол3"}
          />
          <ImageFC
            className={styles["header__container-cornerFour"]}
            src={CornerFour}
            alt={"угол4"}
          />
        </div>
        <div className={styles["header__container-nav"]}>
          {navBarList.map((obj: { id: number; item: string }) => (
            <ParagraphFC
              className={styles["header__container-items"]}
              text={obj.item}
              key={obj.item}
            />
          ))}
        </div>
      </div>
      <LongMenu />
    </div>
  );
};

export default Header;
