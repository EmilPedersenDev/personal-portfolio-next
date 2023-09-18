import Image from "next/image";
import gengar from "../public/images/gengar.svg";
import profile from "../public/images/profil.jpg";
import fish from "../public/images/fish.png";
import { techniques } from "../utils/data";
import ObservableSection from "../components/observable-section";
import style from "../styles/__about.module.scss";

const About = () => {
  return (
    <ObservableSection id="about" class={style.about} transitionClass={style["is-visible"]}>
      <div className={style["about__personal"]}>
        <div className={style["about__info"]}>
          <div className={`${style["about-image-container"]} ${style.gengar}`}>
            <Image src={gengar} alt="Gengar" width={200} height={200} layout="intrinsic" quality={100} />
          </div>
          <div className={style["about__profile"]}>
            <h2 className={`section-header ${style["about__header"]}`}>Who am I</h2>
            <div className={`${style["about-image-container"]} ${style["profile"]}`}>
              <Image src={profile} alt="Profile" width={100} height={100} layout="intrinsic" quality={100} />
            </div>
          </div>
          <div className={style["about__text"]}>
            <p>
              &quot;I`m a developer who thrives on challenging myself and to become better than I was yesterday. I`ve
              spent the last four and a half years in web development, and the holistic approach of fullstack engineering is
              something that suits me well.&quot;
            </p>
            <p>
              &quot;When I`m not coding, It`s probably fishing, Pokemon card hunting or being out in the wild that takes
              up my time&quot;.
            </p>

            <div className={style["about__techniques"]}>
              <h3>Techniques i have used recently</h3>
              {techniques.map((technique: string, i) => (
                <span key={i} className="technique">
                  {technique}
                </span>
              ))}
            </div>
          </div>
          <div className={`${style["about-image-container"]} ${style["fish"]}`}>
            <Image src={fish} alt="Fish" width={300} height={300} layout="intrinsic" quality={100} />
          </div>
        </div>
      </div>
    </ObservableSection>
  );
};

export default About;
