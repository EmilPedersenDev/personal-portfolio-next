import type { NextPage } from "next";
import React, { useEffect, useState, useMemo, useContext } from "react";
import { MenuProps, Employment } from "../utils/interfaces";
import { defaultMenuState } from "../utils/data";
import { cssTransform } from "../utils/interfaces";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "./resizer";
import style from "../styles/__menu.module.scss";

const Menu: NextPage<MenuProps> = ({ menuItems }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<Employment>(defaultMenuState);
  const windowWidth = useContext(WindowContext);

  useEffect((): void => {
    if (menuItems && menuItems.length > 0) {
      setSelectedMenuItem(Object.assign({}, menuItems[0]));
    }
  }, [menuItems]);

  const activeMenuItemPos = useMemo((): cssTransform => {
    if (windowWidth > mobileWidth) {
      return {
        transform: `translateY(calc(${selectedMenuItem.id - 1} * 42px))`,
      };
    } else {
      return {
        transform: `translateX(calc(${selectedMenuItem.id - 1} * 120px))`,
      };
    }
  }, [selectedMenuItem, windowWidth]);

  const onsSelectMenuItem = (menuItem: Employment): void => {
    const newSelectedMenuItem = Object.assign({}, menuItem);
    setSelectedMenuItem(newSelectedMenuItem);
  };

  return (
    <div className={style.menu}>
      <div className={style["menu__tablist"]} role="tablist" aria-label="job tabs">
        {menuItems.map((item, i) => (
          <button
            key={i}
            id={"tab-" + item.id}
            className={`${style["menu__item"]} ${item.id === selectedMenuItem.id ? style["is-active"] : ""}`}
            role="tab"
            tabIndex={0}
            aria-selected={item.id === selectedMenuItem.id ? "true" : "false"}
            onClick={() => onsSelectMenuItem(item)}
          >
            {item.company}
          </button>
        ))}
        <div className={style["menu__indicator"]} style={activeMenuItemPos}></div>
      </div>
      <div
        className={style["menu__active-item"]}
        aria-labelledby={"tab-" + selectedMenuItem.id}
        role="tabpanel"
        tabIndex={0}
      >
        <h3>
          <span> {selectedMenuItem?.title} </span>
          <span className={style["company"]}>{selectedMenuItem?.company}</span>
        </h3>
        <p>{selectedMenuItem?.duration}</p>
        <p>{selectedMenuItem?.summary}</p>
      </div>
    </div>
  );
};

export default Menu;
