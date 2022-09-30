import type { NextPage } from "next";
import Menu from "../components/menu";
import ObservableSection from "../components/observable-section";
import { work } from "../utils/data";
import style from "../styles/__work.module.scss";

const Work: NextPage = () => {
  return (
    <ObservableSection id={style.work} transitionClass={style["is-visible"]}>
      <h2 className={`section-header ${style["work__header"]}}`}>Work</h2>
      <div className={style["work__summary"]}>
        <Menu menuItems={work} />
      </div>
    </ObservableSection>
  );
};

export default Work;
