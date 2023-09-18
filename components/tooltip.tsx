import style from "../styles/__tooltip.module.scss";
const Tooltip = ({ text = "Tooltip", visibleClass = "" }: { text: string, visibleClass: string }) => {
    return (
        <div className={`${style["tooltip"]} ${style[visibleClass]} `}>
            <div className={style["tooltip__wrapper"]}>
                <span className={style["tooltip__arrow"]}></span>
                <span className={style["tooltip__text"]}>{text}</span>
            </div>
        </div>
    )
}


export default Tooltip;
