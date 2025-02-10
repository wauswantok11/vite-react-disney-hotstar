import { FaHome, FaSearch, FaPlus, FaStar, FaPlayCircle } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import ListMenu from "./ListMenu";
import styles from "./Styles.module.scss"; 

function Header() {
  const menu = [
    { id: 1, name: "HOME", icon: FaHome },
    { id: 2, name: "SEARCH", icon: FaSearch },
    { id: 3, name: "WATCH LIST", icon: FaPlus },
    { id: 4, name: "ORIGINALS", icon: FaStar },
    { id: 5, name: "MOVIES", icon: FaPlayCircle },
    { id: 6, name: "SERIES", icon: FaDisplay },
  ]; 
  const renderMenu = (state : string) => (
    menu.map((item) => <ListMenu key={item.id} item={item} state={state} />)
  );
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.HeaderContent}>
        <img
          className="w-[80px] md:w-[115px] object-cover"
          src="/images/disney-plus-hotstar-logo.webp"
          alt="logo"
        />
        <div className={styles.HeaderMenu}>
           {renderMenu("desktop")}
        </div>

        <div className={styles.MobHeaderMenu}>
          {renderMenu("mobile")}
        </div> 
      </div>
      <img src="/images/me.png" className={`w-[40px] rounded-full float-right`} />
    </div>
  );
}

export default Header;
