import * as React from "react" 
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/index.module.scss"

const Footer = () => {
    return (
        <footer>
            <div className={style.footerContainer}>
                <div className={style.logoFooter}>
                    < StaticImage src="../images/logoFooter.png" alt=" logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} width={140} />
                    <h1>あなたらしさを支える<br />
                        「BRAIN」に
                    </h1>
                </div>

                <div className={style.listFooter}>
                    <ul>
                        <div className={style.list}>
                            <hr />< Link to="/"><li>認知症リスク検査とは？</li></Link>
                        </div>
                        <div className={style.list}>
                            <hr />< Link to="/"><li>導入医療機関</li></Link>
                        </div>
                        <div className={style.list}>
                            <hr />< Link to="/"><li>検査の流れ</li></Link>
                        </div>
                        <div className={style.list}>
                            <hr />< Link to="/"><li>お問い合わせ</li></Link>
                        </div>
                        <div className={style.list}>
                            <hr />< Link to="/"><li>よくあるご質問</li></Link>
                        </div>
                    </ul>
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

