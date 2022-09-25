export interface ButtonProps {
  text: string | undefined;
  size?: string;
  type?: string;
  disabled?: boolean;
  click?: () => void;
}

export interface NavBarProps {
  toggleMobileNav: () => void;
  isMobileNavOpen: boolean;
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
}

export interface MenuProps {
  menuItems: Employment[];
}
