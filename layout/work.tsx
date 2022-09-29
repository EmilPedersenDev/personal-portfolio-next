import type { NextPage } from "next";
import Menu from "../components/menu";
import ObservableSection from "../components/observable-section";
import { work } from "../utils/data";

const Work: NextPage = () => {
  return (
    <ObservableSection id="work">
      <h2 className="section-header work__header">Work</h2>
      <div className="work__summary">
        <Menu menuItems={work} />
      </div>
    </ObservableSection>
  );
};

export default Work;
