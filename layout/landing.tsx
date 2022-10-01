import Distortion from "../components/distortion";
import Typewriter from "typewriter-effect";
import ObservableSection from "../components/observable-section";
import style from "../styles/__landing.module.scss";

const Landing = () => {
  return (
    <ObservableSection id="landing" class={style.landing} transitionClass={style["is-visible"]}>
      <div className={style["landing__wrapper"]}>
        <h1>Hello there!</h1>
        <div className={style["landing__name"]}>
          <span>I&#39;m</span> <Distortion text="EMIL" />
        </div>
        <div className={style["landing__description"]}>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, officia dolorem fugiat placeat eligendi
          consequuntur praesentium, nesciunt, modi est consequatur amet! Asperiores qui omnis odio voluptatibus
          doloremque ipsam iusto enim!
        </p>
      </div>
    </ObservableSection>
  );
};

export default Landing;
