import { Employment } from "../utils/interfaces";
import style from "../styles/__menu-item.module.scss";

const MenuItem = ({ id, title, company, duration, summary, techniques }: Employment) => {
  return (
    <div className={style["menu-item"]} aria-labelledby={"tab-" + id} role="tabpanel" tabIndex={0}>
      <h3>
        <span>{title}</span>&nbsp;
        <span className={style["company"]}>{company}</span>
      </h3>
      <p>{duration}</p>
      <p>{summary}</p>
      <div className={style["menu-item__techniques"]}>
        {techniques.map((technique: string, j) => (
          <span className="technique" key={j}>
            {technique}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
