import { ElementChild, getMainLink, ImageSize, Link } from "./types";

export interface ButtonProps {
  text: string | undefined;
  size?: string;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface distortionProps {
  text: string;
}

export interface Employment {
  id: number;
  title: string;
  company: string;
  duration: string;
  summary: string;
  techniques: string[];
}

export interface IconProps {
  iconClass: string;
}

export interface cssTransform {
  transform: string;
}

export interface MenuIndicatorStyle {
  translateY: string;
  translateX: string;
  desktopSize: string;
  mobileSize: string;
}

export interface MenuIndicator {
  transform: string;
  size: string;
}

export interface MenuProps {
  menuItems: Employment[];
}

export interface MenuTablistProps {
  menuItems: Employment[];
  selectedMenuItem: Employment;
  selectMenuItem: (menuItem: Employment) => void;
  activeMenuItemPos: cssTransform;
}

export interface NavBarProps {
  toggleMobileNav: () => void;
  isMobileNavOpen: boolean;
}

export interface ObservableProps {
  id: string;
  class?: string;
  transitionClass: string;
  children: ElementChild;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techniques: string[];
  links: Link;
  getMainLink: getMainLink;
}

export interface ProjectProps {
  goToWebsite: (visibleProject: Project) => void;
  visibleProject: Project;
}

export interface ResizerProps {
  children: ElementChild;
}

export interface SocialsProp {
  imageSize: ImageSize;
}
