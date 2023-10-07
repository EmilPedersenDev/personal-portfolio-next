import PropTypes from 'prop-types';
import { ButtonProps } from "../utils/interfaces";
import style from "../styles/__button.module.scss";

const Button = ({ text = "Button", size = "default", type = "primary", color = "default", border = true, disabled, onClick }: ButtonProps) => {
  return (
    <button className={`${style["ep-button"]} ${style[size]} ${style[color]} ${style[border ? "border-style" : ""]} ${type}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["default", "secondary"])
}

export default Button;
