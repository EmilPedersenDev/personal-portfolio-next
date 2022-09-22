import type { NextPage } from "next";
import { distortionProps } from "../utils/interfaces";

const Distortion: NextPage<distortionProps> = ({ text }) => {
  return (
    <div className="distortion">
      <h2 className="distortion__glitch" data-text={text}>
        {text}
      </h2>
    </div>
  );
};

export default Distortion;
