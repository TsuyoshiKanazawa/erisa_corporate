import React, { useEffect } from "react"
import { motion, useViewportScroll } from "framer - motion"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import lineVertical from '../images/line-vertical.png'
import uneune from '../images/uneune.png'
import about from '../images/about.png'
import RMark from '../images/RMark.png'
import referenceImage from '../images/referenceImage.png';

const Index = () => {
  return (
    <Layout>
    <body>
      <header className={style.headerWrapper}>
        <div className={style.container}>
          <div className={style.flexContainer}>
            < Link to="/">
              < StaticImage src="../images/logo.png" alt=" logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} width={50} />
            </Link >
            <ul>
              < Link to="/">
                <div className={style.switchButton}>
                  <p>医療関係者の方はこちら</p>
                  <div className={style.playButton}></div>
                </div>
              </Link>

              <li>=</li>
            </ul>
          </div>
        </div>
      </header>

      <div className={style.hero}>
        <StaticImage src="../images/KV.png" alt="hero" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.heroImg} />
        <StaticImage src="../images/uneune.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.uneune} />
        <div className={style.textContainer}>
          <div className={style.mask}>
            <StaticImage src="../images/KvText.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.KvText} />
          </div>
          <div className={style.mask}>
            <img src={lineVertical} className={style.lineVertical} />
          </div>
          <div className={style.mask}>
            <h3>世界で唯一のAI解析技術で、<br></br>
              3年後の認知症リスクを知る。</h3>
          </div>
        </div>
      </div>

      <div className={style.about}>
        <div className={style.mask}>
          <h1>
            認知症リスク検査とは？
          </h1>
        </div>
        <hr className={style.line0}></hr>
        <StaticImage src="../images/about.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutImage} />

        <div className={style.mask}>
          <h2
            >脳の状態から
          </h2>
        </div>
        
        <div className={style.mask}>
          <h2
          >3年後の認知症リスクを知り、
          </h2>
        </div>

        <div className={style.mask}>
          <h2
            >将来を見据えたライフスタイルを
          </h2>
        </div>

        <div className={style.mask}>
          <h2

            >見直すきっかけに。
          </h2>
        </div>

        <hr className={style.line1}></hr>

        <div className={style.mask}>
            <h3

              >認知症リスク検査は、島根大学医学部、滋賀医科大学、
            </h3>
        </div>

        <div className={style.mask}>
            <h3

              >株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、
            </h3>
        </div>

        <div className={style.mask}>
            <h3
              >脳の状態から3年後の認知症リスクを検査します。
            </h3>
        </div>

        <div className={style.mask}>
            <h3 
              >脳の一部だけではなく、脳全体を膨大なデータと比較することで、
            </h3>
        </div>

        <div className={style.mask}>
            <h3

              >高い精度を実現。将来を見据えた認知症予防の検討材料として、
            </h3>
        </div>

        <div className={style.mask}>
            <h3>
              受診者様のライフスタイル見直しに貢献します。
            </h3>
        </div>

        <div className={style.reference}>
          <StaticImage src="../images/RMark.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.RMark} />
          
          <h4>
            日本における65歳以上の認知症患者数は約600万人。<br/>
            高齢者の<font color="#BD0000">6人に1人</font>が発症する身近な問題です。<br/>
            症状が現れる20年以上前から徐々に脳の変化が<br/>
            始まっているとされ、早期から対策することにより<br/>
            ある程度予防できることがわかっています。
          </h4>

          <StaticImage src="../images/referenceImage.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImage} />
        </div>

      </div>
    </body>
    </Layout>
  )
}

export default Index

export const Head = () => {
  return (
    <>
      <title>ERISA 認知症リスク検査</title>
      <description>世界で唯一のAI解析技術で、
        3年後の認知症リスクを知る。</description>
    </>
  )
}