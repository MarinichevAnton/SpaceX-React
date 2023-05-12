import React from "react";
import Card from "../Molecules/Card/Card";
import TitleAndButtonStart from "../Organism/TitleAndButtonStart/TitleAndButtonStart";
import styles from "./style.module.scss";
import cartItems from "../ArraysForMap/CartItems.json";
import ImageFC from "../Atoms/ImageFC/ImageFC";
import Line from "../Images/Pictures/line.png";

const MainPage: React.FC = () => {
  return (
    <div className={styles["mainPage"]}>
      <div>
        <TitleAndButtonStart />
      </div>
      <div className={styles["mainPage__carts"]}>
        {cartItems.map(
          (obj: {
            id: number;
            topText: string;
            middleText: string;
            lowerText: string;
          }) => (
            <Card
              topText={obj.topText}
              middleText={obj.middleText}
              lowerText={obj.lowerText}
              key={obj.topText}
            />
          )
        )}
      </div>
      <ImageFC className={styles["mainPage__line"]} src={Line} alt={"линия"} />
    </div>
  );
};

export default MainPage;
