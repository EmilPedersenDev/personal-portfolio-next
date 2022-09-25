import React from "react";
import Image from "next/image";
import gengar from "../public/images/gengar.svg";
import profile from "../public/images/profil.jpg";
import fish from "../public/images/fish.png";

function about() {
  return (
    <section id="about">
      <div className="about__personal">
        <h2 className="section-header about__header">Who am I</h2>
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
          <p>
            &quot;I&#39;m a developer who thrives on challenging myself and to
            become better than I was yesterday&quot;.
          </p>
          <p>
            &quot;When I&#39;m not coding, It&#39;s probably fishing, Pokemon
            card hunting or being out in the wild that takes up my time&quot;.
          </p>
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
    </section>
  );
}

export default about;
