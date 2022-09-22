import type { NextPage } from "next";
import Distortion from "../components/distortion";
import Typewriter from "typewriter-effect";

const About: NextPage = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <h1>Hello there!</h1>
        <div className="about__name">
          <span>I&#39;m</span> <Distortion text="EMIL" />
        </div>
        <div className="about__description">
          <h3>
            I make apps in
            <Typewriter
              options={{
                strings: ["Vue", "React", "Node", "Nuxt", "Next"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          officia dolorem fugiat placeat eligendi consequuntur praesentium,
          nesciunt, modi est consequatur amet! Asperiores qui omnis odio
          voluptatibus doloremque ipsam iusto enim!
        </p>
      </div>
    </div>
  );
};

export default About;
