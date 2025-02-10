import React from "react";
import { IconType } from "react-icons";

import styles from "./Styles.module.scss";
interface Item {
  id: number;
  name: string;
  icon: IconType;
}

interface ListMenuProps {
  item: Item;
  state: string;
}
const ListMenu: React.FC<ListMenuProps> = ({ item, state }) => {
    const Icon = item.icon;
  
    return (
      <>
        <div className={styles.ListMenu}>
          <Icon />
          {state !== "mobile" && <p>{item.name}</p>}
        </div> 
      </>
    );
  };

export default ListMenu;
