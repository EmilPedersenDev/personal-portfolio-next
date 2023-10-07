import style from "../styles/__cookie-banner.module.scss";
import Button from "./button";
import Link from "next/link";

const CookieBanner = ({onClick}: { onClick: (param: boolean) => void }) => {
    return (
        <div className={style['cookie-banner']}>
            <div className={style['cookie-banner__info']}>
                <span>We use third-party cookies to personalise your site experience. <Link href="/cookie-policy">Cookie Policy</Link></span>

            </div>
            <div className={style['cookie-banner__cta']}>
                <Button text="Accept" onClick={() => onClick(true)}/>
                <Button text="Reject" onClick={() => onClick(false)} border={false}/>
            </div>
        </div>
    )
};

export default CookieBanner;
