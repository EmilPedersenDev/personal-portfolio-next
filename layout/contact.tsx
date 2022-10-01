import ObservableSection from "../components/observable-section";
import style from "../styles/__contact.module.scss";

const Contact = () => {
  return (
    <ObservableSection id="contact" class={style.about} transitionClass={style["is-visible"]}>
      <h2>Contact</h2>
    </ObservableSection>
  );
};

export default Contact;
