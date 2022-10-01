import ObservableSection from "../components/observable-section";
import Button from "../components/button";
import style from "../styles/__contact.module.scss";

const Contact = () => {
  const onContact = () => {
    console.log("on contact");
  };

  return (
    <ObservableSection id="contact" class={style.contact} transitionClass={style["is-visible"]}>
      <div className={style["contact__wrapper"]}>
        <h2 className={`section-header ${style["contact__header"]}`}>Contact</h2>
        <p>
          Send me an email if you would like to connect. I will try to get back to you as soon as i can. I`m not
          currently looking for new opportunities, but it`s always nice to connect and get to know new people!
        </p>
        <Button onClick={onContact} text="Contact Me" />
      </div>
    </ObservableSection>
  );
};

export default Contact;
