import { IconProps } from "../utils/interfaces";

const Icon = ({ iconClass }: IconProps) => {
  return <i className={`icon ${iconClass}`}></i>;
};

export default Icon;
