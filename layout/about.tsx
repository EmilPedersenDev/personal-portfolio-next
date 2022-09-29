import type { NextPage } from "next";
import Image from "next/image";
import gengar from "../public/images/gengar.svg";
import profile from "../public/images/profil.jpg";
import fish from "../public/images/fish.png";
import { techniques } from "../utils/data";
import ObservableSection from "../components/observable-section";

const About: NextPage = () => {
  return (
    <ObservableSection id="about">
      <div className="about__personal">
        <div className="about__info">
          <div className="about-image-container gengar">
            <Image
              src={gengar}
              alt="Gengar"
              width={200}
              height={200}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className="about__profile">
            <h2 className="section-header about__header">Who am I</h2>
            <div className="about-image-container profile">
              <Image
                src={profile}
                alt="Profile"
                width={100}
                height={100}
                layout="intrinsic"
                quality={100}
              />
            </div>
          </div>
          <div className="about__text">
            <p>
              &quot;I&#39;m a developer who thrives on challenging myself and to
              become better than I was yesterday. I&#39;ve spent the last for
              years in web development, and the creative and fast paced style of
              frontend is something that suits me well.&quot;
            </p>
            <p>
              &quot;My aspirations in the near future is to pivot a bit more
              into the fullstack sphere. It&#39;s something that really
              intruiges me and i have gotten the opportunity to work more
              fullstack recently.&quot;
            </p>
            <p>
              &quot;When I&#39;m not coding, It&#39;s probably fishing, Pokemon
              card hunting or being out in the wild that takes up my time&quot;.
            </p>

            <div className="about__techniques">
              <h3>Techniques i have used recently</h3>
              {techniques.map((technique, i) => (
                <span key={i} className="techniques__item">
                  {technique}
                </span>
              ))}
            </div>
          </div>
          <div className="about-image-container fish">
            <Image
              src={fish}
              alt="Fish"
              width={300}
              height={300}
              layout="intrinsic"
              quality={100}
            />
          </div>
        </div>
      </div>
    </ObservableSection>
  );
};

export default About;
