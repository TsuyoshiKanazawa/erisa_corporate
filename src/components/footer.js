import * as React from "react" 
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/index.module.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
    return (
        <footer id="body">
            <div className={style.footerContainer}>
                <StaticImage src="../images/footerBack.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.footerBack} loading="lazy" alt="background" />

                <div className={style.logoFooter}>
                    <StaticImage src="../images/logoFooter.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.logo} loading="lazy" alt="logo" />
                    <h1>あなたらしさを支える<br />
                        「BRAIN」に
                    </h1>
                </div>

                <div className={style.listFooter}>
                    <div className={style.listStyle}>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#about"><p>認知症リスク検査とは？</p></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#introduce"><p>導入医療機関</p></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#flow"><p>検査の流れ</p></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noreferrer"><p>お問い合わせ</p></a>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#question"><p>よくあるご質問</p></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><a href="https://www.erisa.co.jp/" target="_blank" rel="noreferrer"><p>株式会社ERISA</p></a>
                        </div>
                    </div>
                    <AnchorLink href="#hero" className={style.toTop}>
                        < StaticImage src="../images/toTop.png" alt="logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} />
                    </AnchorLink>
                </div>
            </div>

            <div className={style.copyright}>
                <hr />
                <p>©2023 ERISA Co.</p>
            </div>

        </footer>
    )
}

export default Footer

