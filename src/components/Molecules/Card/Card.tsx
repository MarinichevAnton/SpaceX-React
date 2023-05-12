import React from "react";
import ParagraphFC from "../../Atoms/ParagraphFC.tsx/ParagraphFC.tsx";
import styles from "./style.module.scss";

export interface CartProps {
  topText: string;
  middleText: string;
  lowerText: string;
}

const Card: React.FC<CartProps> = ({ topText, middleText, lowerText }) => {
  return (
    <div className={styles["cart"]}>
      <ParagraphFC className={styles["cart__text"]} text={topText} />
      <ParagraphFC className={styles["cart__highText"]} text={middleText} />
      <ParagraphFC className={styles["cart__text"]} text={lowerText} />
    </div>
  );
};

export default Card;
