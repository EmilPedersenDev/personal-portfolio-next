import { MenuTablistProps, Employment } from "../utils/interfaces";
import style from "../styles/__menu-tablist.module.scss";

const MenuTablist = ({ menuItems, selectedMenuItem, selectMenuItem, activeMenuItemPos }: MenuTablistProps) => {
  return (
    <div className={style["menu-tablist"]} role="tablist" aria-label="job tabs">
      {menuItems.map((item: Employment, i) => (
        <button
          key={i}
          id={"tab-" + item.id}
          className={`${style["menu-tablist__item"]} ${item.id === selectedMenuItem.id ? style["is-active"] : ""}`}
          role="tab"
          tabIndex={0}
          aria-selected={item.id === selectedMenuItem.id ? "true" : "false"}
          onClick={() => selectMenuItem(item)}
        >
          {item.company}
        </button>
      ))}
      <div className={style["menu-tablist__indicator"]} style={activeMenuItemPos}></div>
    </div>
  );
};

export default MenuTablist;
