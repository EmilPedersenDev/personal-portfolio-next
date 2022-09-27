import type { NextPage } from "next";
import React, { useEffect, useState, useMemo } from "react";
import { MenuProps, Employment } from "../utils/interfaces";
import { defaultMenuState } from "../utils/data";
import useWindowSize from "../utils/resize";
import { cssTransform } from "../utils/interfaces";
import { mobileWidth } from "../utils/variables";

const Menu: NextPage<MenuProps> = ({ menuItems }) => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<Employment>(defaultMenuState);

  const [windowWidth]: Array<number> = useWindowSize();

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
    <div className="menu">
      <div className="menu__tablist" role="tablist" aria-label="job tabs">
        {menuItems.map((item, i) => (
          <button
            key={i}
            id={"tab-" + item.id}
            className={`menu__item${
              item.id === selectedMenuItem.id ? " is-active" : ""
            }`}
            role="tab"
            tabIndex={0}
            aria-selected={item.id === selectedMenuItem.id ? "true" : "false"}
            onClick={() => onsSelectMenuItem(item)}
          >
            {item.company}
          </button>
        ))}
        <div className="menu__indicator" style={activeMenuItemPos}></div>
      </div>
      <div
        className="menu__active-item"
        aria-labelledby={"tab-" + selectedMenuItem.id}
        role="tabpanel"
        tabIndex={0}
      >
        <h3>
          <span> {selectedMenuItem?.title} </span>
          <span className="company">{selectedMenuItem?.company}</span>
        </h3>
        <p>{selectedMenuItem?.duration}</p>
        <p>{selectedMenuItem?.summary}</p>
      </div>
    </div>
  );
};

export default Menu;
