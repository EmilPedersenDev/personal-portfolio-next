import type { NextPage } from "next";
import { ButtonProps } from "../utils/interfaces";

const Button: NextPage<ButtonProps> = ({
  text = "Button",
  size = "default",
  type = "primary",
  disabled,
  click,
}) => {
  return (
    <button
      className={`ep-button ${size} ${type}`}
      disabled={disabled}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
