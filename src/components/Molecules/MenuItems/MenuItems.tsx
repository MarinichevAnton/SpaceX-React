import React, { useContext } from "react";
import navBarList from"../../ArraysForMap/NavBarList.json"
import ParagraphFC from "../../Atoms/ParagraphFC.tsx/ParagraphFC.tsx";
import styles from "./style.module.scss";
import {LongMenuContext} from "../../../App";

const MenuItems: React.FC = () => {
    const { setOpenLongMenu } = useContext(LongMenuContext);
    return (
        <div className={styles["menuItems"]} onClick={():void => setOpenLongMenu(true)}>
            {navBarList.map((obj)=>(
                <ParagraphFC className={styles["menuItems__items"]} text={obj.item} key={obj.item} />
            ))}
        </div>
    )
}

export default MenuItems