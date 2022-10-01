import type { NextPage } from "next";
import React, { useEffect, useState, useMemo, useContext } from "react";
import { MenuProps, Employment } from "../utils/interfaces";
import { defaultMenuState, defaultMenuIndicator, menuIndicatorStyle } from "../utils/data";
import { cssTransform, MenuIndicator } from "../utils/interfaces";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "./resizer";
import style from "../styles/__menu.module.scss";

const Menu: NextPage<MenuProps> = ({ menuItems }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<Employment>(defaultMenuState);
  const [menuIndicatorTransfrom, setMenuIndicatorTransfrom] = useState<MenuIndicator>(defaultMenuIndicator);
  const windowWidth = useContext(WindowContext);

  useEffect((): void => {
    if (menuItems && menuItems.length > 0) {
      setSelectedMenuItem(Object.assign({}, menuItems[0]));
    }
  }, [menuItems]);

  // Set different transform styling on the menu indicator
  // when it's dektop or mobile
  useEffect(() => {
    const viewportWidth = windowWidth || window.innerWidth;
    console.log("running the new???");

    if (viewportWidth > mobileWidth) {
      setMenuIndicatorTransfrom(
        Object.assign({}, { transform: menuIndicatorStyle.translateY, size: menuIndicatorStyle.desktopSize })
      );
    } else {
      setMenuIndicatorTransfrom(
        Object.assign({}, { transform: menuIndicatorStyle.translateX, size: menuIndicatorStyle.mobileSize })
      );
    }
  }, [windowWidth]);

  // When a menu item is selected, then we are going to
  // calculate the position of the menu indicator
  const activeMenuItemPos = useMemo((): cssTransform => {
    const { transform, size } = menuIndicatorTransfrom;
    return {
      transform: `${transform}(calc(${selectedMenuItem.id - 1} * ${size}))`,
    };
  }, [selectedMenuItem, menuIndicatorTransfrom]);

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
