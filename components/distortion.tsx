import { distortionProps } from "../utils/interfaces";
import style from "../styles/__distortion.module.scss";

const Distortion = ({ text }: distortionProps) => {
  return (
    <div className={style.distortion}>
      <h2 className={style["distortion__glitch"]} data-text={text}>
        {text}
      </h2>
    </div>
  );
};

export default Distortion;
