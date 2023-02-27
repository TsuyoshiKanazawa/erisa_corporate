import React, { } from "react"
import { useInView } from "react-intersection-observer"
import AnimationTrigger from "../components/AnimationTrigger";

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import lineVertical from '../images/line-vertical.png'

const Index = (rootMargin, triggerOnce) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });

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
            <AnimationTrigger animation={style.aboutTitle}>
              認知症リスク検査とは？
            </AnimationTrigger>
          </div>
        


        <hr className={style.line0}></hr>
        <StaticImage src="../images/about.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutImage} />

        <div className={style.aboutCopy}>
          <div className={style.mask}>
            <AnimationTrigger animation={style.copy}>
              脳の状態から
            </AnimationTrigger>
          </div>
          
          <div className={style.mask}>
              <AnimationTrigger animation={style.copy}>
              3年後の認知症リスクを知り、
            </AnimationTrigger>
          </div>

          <div className={style.mask}>
              <AnimationTrigger animation={style.copy}>
              3将来を見据えたライフスタイルを
            </AnimationTrigger>
          </div>

          <div className={style.mask}>
            <AnimationTrigger animation={style.copy}>
              見直すきっかけに。
            </AnimationTrigger>
          </div>
        </div>
        <hr className={style.line1}></hr>

          <AnimationTrigger animation={style.aboutText0}>
            認知症リスク検査は、島根大学医学部、滋賀医科大学、<br />
            株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、<br />
            脳の状態から3年後の認知症リスクを検査します。<br />
            脳の一部だけではなく、脳全体を膨大なデータと比較することで、<br />
            高い精度を実現。将来を見据えた認知症予防の検討材料として、<br />
            受診者様のライフスタイル見直しに貢献します。
          </AnimationTrigger>

        <div className={style.reference}>
          <StaticImage src="../images/RMark.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.RMark} />
          
          <AnimationTrigger animation={style.aboutText1}>
            日本における65歳以上の認知症患者数は約600万人。<br/>
            高齢者の<font color="#BD0000">6人に1人</font>が発症する身近な問題です。<br/>
            症状が現れる20年以上前から徐々に脳の変化が<br/>
            始まっているとされ、早期から対策することにより<br/>
            ある程度予防できることがわかっています。
          </AnimationTrigger>

          <StaticImage src="../images/referenceImage.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImage} />
        </div>

      </div>

      <div className={style.featureContainer}>
        <div className={style.feature}>
          <StaticImage src="../images/feature.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureImage} />
          <div className={style.featureTitle}>
            <h1>認知症リスク検査の特徴</h1>
          </div>
        </div>

        <div className={style.mri}>
          <StaticImage src="../images/mriImage.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.mriImage} />
          <div className={style.mriText}>
            <div className={style.mriTexttextContainer}>
              <h1>AIによる<br />
                高精度のMRI画像解析で<br />
                脳全体の状態を把握</h1>
                <hr />
              <p>脳の一部（海馬）のみならず、脳全体の状態<br />
                を把握することで、膨大なデータベースと照<br />
                合し高精度の解析を実現。脳各部位の体積の<br />
                将来変化を予測することで、これまでの解析<br />
                以上に正確な脳状態を確認できます。</p>
            </div>
          </div>
        </div>

        <div className={style.examination}>
            <StaticImage src="../images/examination.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.examinationImage} />
            <div className={style.examinationText}>
              <div className={style.examinationTextContainer}>
                <h1>3年後の脳状態を予測し<br />
                  認知症リスクを検査</h1>
                <hr />
                <p>脳全体の状態から3年後の脳状態を予測する<br />
                  ことで、受診者様それぞれの認知症リスクを<br />
                  検査。解説付きの検査レポートを通じて、早<br />
                  期対策・予防に活用できます。</p>
              </div>
            </div>
        </div>

        <div className={style.prevention}>
          <StaticImage src="../images/prevention.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.preventionImage} />
          <div className={style.preventionText}>
            <div className={style.preventionTextContainer}>
              <h1>
                早期対策・予防方針から<br />
                生活習慣の見直しに繋がる</h1>
              <hr />
                <p>自身の脳状態や将来の認知症リスクを知るこ<br />
                  とで、レポートや医療機関を通じた早期対<br />
                  策・予防方針から、効果的な生活習慣の見直<br />
                  しを検討することに繋がります。</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.voiceContainer}>
        <h1>受診者の声</h1>
          <StaticImage src="../images/voiceImage.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.voiceImage} />

          <div className={style.voiceText}>

            <div className={style.voiceTextContainer}>
              <p>認知症の今の状態が詳しくわかった<br />
                ので、安心して暮らしていけると<br />
                思っています。</p>
              <hr />
              <h6>80歳代・男性</h6>
            </div>
            <div className={style.voiceTextContainer}>
              <p>認知機能低下予防のために生活習慣<br />
                の見直しを決心できたので、また3年<br />
                後に検査を受けたいです。</p>
              <hr />
              <h6>70代・女性</h6>
            </div>

            <div className={style.voiceTextContainer}>
              <p>特定健康診査やがん検診と同じよう<br />
                に、今後も定期的に検査していくつ<br />
                もりです。</p>
              <hr />
              <h6>70代・女性</h6>
            </div>


          </div>
      </div>

      <div className={style.flowContainer}>
        <h1>検査の流れ</h1>
        <StaticImage src="../images/flow.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.flowImage} />

        <div className={style.circleContainer}>
          <div className={style.circle}>
            <h2>01</h2>
            <h3>導入医療機関で予約</h3>
              <h4>予約方法は<br />
                各医療機関により異なりますので<br />
                直接お問い合わせください</h4>
            < Link to="/">
                <div className={style.flowButton}>
                <p>導入医療機関を探す</p>
                <div className={style.playButton}></div>
              </div>
            </Link>
          </div>


          <div className={style.circle}>
            <h2>02</h2>
            <h3>頭部MRI撮影</h3>
              <h4>ご予約の医療機関にて<br />
                脳ドックを受診いただき<br />
                MRI撮像による脳画像データを取得</h4>
              <StaticImage src="../images/brain.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.brainImage} />
          </div>

          <div className={style.circle}>
            <h2>03</h2>
              <h3>レポート受取</h3>
              <h4>解説付きの検査レポートが<br />
                発行され当日または翌日以降に<br />
                お送りいたします</h4>
              <StaticImage src="../images/report.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.reportImage} />
          </div>
        </div>
      </div>

      <div className={style.questionContainer0}>
        
        <StaticImage src="../images/question.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.questionImage} />
        <div className={style.questionContainer1}>
          <h1>よくあるご質問</h1>
          
          <div className={style.questionText}>
            <hr />

            <div className={style.question}>
              <h2 className={style.Q}>Q.</h2>
              <h3 className={style.title}>どれくらいの頻度で受けるべきですか？</h3>
            </div>
            <div className={style.question}>
              <h2 className={style.A}>A.</h2>
              <h3 className={style.answer}>2～3年に1回の検査をおすすめします。</h3>
            </div>

          </div>

          <div className={style.questionText}>
            <hr />

            <div className={style.question}>
              <h2 className={style.Q}>Q.</h2>
              <h3 className={style.title}>何歳から受けられますか？</h3>
            </div>
            <div className={style.question}>
              <h2 className={style.A}>A.</h2>
              <h3 className={style.answer}>50歳以上の方に推奨しています。</h3>
            </div>

          </div>

          <div className={style.questionText}>
            <hr />

            <div className={style.question}>
              <h2 className={style.Q}>Q.</h2>
              <h3 className={style.title}>この検査で認知症を診断することができますか？</h3>
            </div>
            <div className={style.question}>
              <h2 className={style.A}>A.</h2>
              <h3 className={style.answer}>この検査で認知症を診断することはできません。</h3>
            </div>

          </div>

          <div className={style.questionText}>
            <hr />

            <div className={style.question}>
              <h2 className={style.Q}>Q.</h2>
              <h3 className={style.title}>脳が萎縮すると認知症になるのですか？</h3>
            </div>
            <div className={style.question}>
              <h2 className={style.A}>A.</h2>
              <h3 className={style.answer}>脳の萎縮のみから認知症の診断はできません。検査結果が心配な方は専門医の受診をお勧めします。</h3>
            </div>
            <hr />
          </div>

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