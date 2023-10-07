import style from "../styles/__cookie-policy.module.scss";

const CookiePolicy = () => {
    return (
        <article id={style["cookie-policy"]}>
            <div className={style["cookie-policy__wrapper"]}>
                <section className={`${style["cookie-section"]} ${style["cookie-section__intro"]}`}>
                    <h1>Cookie Policy</h1>
                    <p><strong>Last Updated:</strong> 7/10 - 2023</p>
                    <p>This Cookie Policy explains how we are using cookies and similar tracking technologies on our
                        website. By using our website, you consent to the use of cookies as described in this
                        policy.</p>
                </section>
                <section className={style["cookie-section"]}>
                    <h2>What Are Cookies?</h2>
                    <p>Cookies are small text files that are placed on your computer, smartphone, or other devices when
                        you
                        visit our website. They are widely used to make websites work efficiently and provide
                        information to
                        website owners.</p>
                </section>
                <section className={`${style["cookie-section"]} ${style["cookie-section__types"]}`}>
                    <h2>Types of Cookies We Use</h2>
                    <p>We use only one type of cookie on our website:</p>
                    <ol>
                        <li>
                            <strong>Google Analytics Cookies:</strong> These cookies are used to collect information
                            about
                            how visitors use our website. We use this information to compile reports and help us improve
                            the
                            website. The cookies collect information in an anonymous form, including the number of
                            visitors
                            to the website, where visitors have come to the website from, and the pages they visited.
                            For
                            more information about Google Analytics cookies, please visit <a
                            href="https://policies.google.com/privacy" rel="noopener noreferrer"
                            target="_blank"
                            className="secondary-link">Google`s Privacy
                            Policy</a>.
                        </li>
                    </ol>
                </section>
                <section className={`${style["cookie-section"]} ${style["cookie-section__manage"]}`}>
                    <h2>Managing Cookies</h2>
                    <p>You can control and manage cookies in various ways. Please keep in mind that removing or blocking
                        cookies may affect your user experience and some features of our website may not function
                        correctly.</p>
                    <p><strong>Browser Controls:</strong> You can manage cookies through your web browser`s settings.
                        Please
                        refer to your browser`s help documentation for more information on how to do this.</p>
                </section>
                <section className={style["cookie-section"]}>
                    <h2>Changes to this Cookie Policy</h2>
                    <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for
                        other
                        operational, legal, or regulatory reasons. Please revisit this policy regularly to stay informed
                        about our use of cookies.</p>
                </section>
                <section className={style["cookie-section"]}>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or concerns about this Cookie Policy, please contact <a
                        href="mailto:pedersen268@gmail.com" rel="noopener noreferrer" target="_blank"
                        className="secondary-link">us</a>.</p>
                </section>
                <section className={style["cookie-section"]}>
                    <h2>Your Consent</h2>
                    <p>By using our website, you consent to the use of cookies as described in this Cookie Policy.</p>
                </section>
            </div>
        </article>
    )
};


export default CookiePolicy;
