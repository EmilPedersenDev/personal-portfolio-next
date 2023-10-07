import style from "../styles/__404.module.scss";
import Link from "next/link";

const Custom404 = () => {
    return (
        <div id={style["notfound"]}>
            <div className={style["notfound"]}>
                <div className={style["notfound-404"]}>
                    <h1>Oops!</h1>
                    <h2>404 - The Page can`t be found</h2>
                </div>
                <Link href="/">Go To Homepage</Link>
            </div>
        </div>
    )
}

export default Custom404;
