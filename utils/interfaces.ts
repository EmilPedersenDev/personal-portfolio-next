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
