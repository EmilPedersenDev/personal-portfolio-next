import { ButtonProps } from "../utils/interfaces";
import style from "../styles/__button.module.scss";

const Button = ({ text = "Button", size = "default", type = "primary", disabled, onClick }: ButtonProps) => {
  return (
    <button className={`${style["ep-button"]} ${style[size]} ${type}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
