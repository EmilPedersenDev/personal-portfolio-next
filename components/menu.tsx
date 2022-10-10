import React, { useEffect, useState, useMemo, useContext } from "react";
import { MenuProps, Employment } from "../utils/interfaces";
import { defaultMenuState, defaultMenuIndicator, menuIndicatorStyle } from "../utils/data";
import { cssTransform, MenuIndicator } from "../utils/interfaces";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "./resizer";
import MenuItem from "./menu-item";
import MenuTablist from "./menu-tablist";
import style from "../styles/__menu.module.scss";

const Menu = ({ menuItems }: MenuProps) => {
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
  useEffect((): void => {
    const viewportWidth: number = windowWidth || window.innerWidth;

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
    const { transform, size }: MenuIndicator = menuIndicatorTransfrom;
    return {
      transform: `${transform}(calc(${selectedMenuItem.id - 1} * ${size}))`,
    };
  }, [selectedMenuItem, menuIndicatorTransfrom]);

  const onsSelectMenuItem = (menuItem: Employment): void => {
    const newSelectedMenuItem: Employment = Object.assign({}, menuItem);
    setSelectedMenuItem(newSelectedMenuItem);
  };

  return (
    <div className={style.menu}>
      <MenuTablist
        menuItems={menuItems}
        selectedMenuItem={selectedMenuItem}
        selectMenuItem={onsSelectMenuItem}
        activeMenuItemPos={activeMenuItemPos}
      />
      <MenuItem
        id={selectedMenuItem?.id}
        title={selectedMenuItem?.title}
        company={selectedMenuItem?.company}
        duration={selectedMenuItem?.duration}
        summary={selectedMenuItem?.summary}
        techniques={selectedMenuItem?.techniques}
      />
    </div>
  );
};

export default Menu;
