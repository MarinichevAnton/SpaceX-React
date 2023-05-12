import React from "react";
import ButtonFC from "../../Atoms/ButtonFC/ButtonFC";
import FirstTitleFC from "../../Atoms/FirstTitleFC/FirstTitleFC";
import ParagraphFC from "../../Atoms/ParagraphFC.tsx/ParagraphFC.tsx";
import styles from "./style.module.scss";

const  TitleAndButtonStart: React.FC = () => {
  return (
    <div className={styles["titleAndButtonStart"]}>
      <div className={styles["titleAndButtonStart__text"]}>
        <FirstTitleFC
          className={styles["titleAndButtonStart__text-journey"]}
          text={"ПУТЕШЕСТВИЕ"}
        />
        <ParagraphFC
          className={styles["titleAndButtonStart__text-planet"]}
          text={"на красную планету"}
        />
      </div>
      <ButtonFC
        className={styles["titleAndButtonStart__buttonStart"]}
        text={"Начать путешествие"}
      />
    </div>
  );
};

export default TitleAndButtonStart;
