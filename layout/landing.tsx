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
          <span>I`m</span> <Distortion text="EMIL" />
        </div>
        <div className={style["landing__description"]}>
          <h3>
            I make apps in
            <Typewriter
              options={{
                strings: ["Vue", "Java", "Spring", "React", "Node", "Svelte", "Next"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
        <p>
          I`m a Fullstack Engineer currently working <a className="company" href="https://www.refined.com/" target="_blank" rel="noreferrer">@Refined</a>. In my everyday work I`m
          trying to create web apps with great user experience for Refined`s customers. When I`m not working, I like to
          build fullstack apps and to learn new exciting technologies.
        </p>
      </div>
    </ObservableSection>
  );
};

export default Landing;
