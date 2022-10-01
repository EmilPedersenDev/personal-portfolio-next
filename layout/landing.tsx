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
          I`m a Software Developer currently working <span className="company">@Refined</span>. In my everyday work I´m
          trying to create web apps with great user experience for Refined`s customers. When I´m not working, i like to
          build fullstack apps and to learn new exciting technologies.
        </p>
      </div>
    </ObservableSection>
  );
};

export default Landing;
