import React, { useState, useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import AnimationTrigger from "../components/AnimationTrigger"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import uneune from '../images/uneune.svg'
import KV from '../images/KV.svg'
import KVsp from '../images/KVSP.svg'
import aboutBack from '../images/aboutBack.svg'
import about from '../images/about.png'
import featureBack from '../images/featureBack.svg'
import featureBackBottom from '../images/featureBackBottom.svg'
import lineVertical from '../images/line-vertical.png';
import mri from '../images/mriImage.png' 
import examination from '../images/examination.png' 
import prevention from '../images/prevention.png' 
import voiceImage from '../images/voiceImage.png'
import number1 from '../images/01.png' 
import number2 from '../images/02.png' 
import number3 from '../images/03.png' 
import pointLine from '../images/pointLine.png' 


gsap.registerPlugin(ScrollTrigger);
export const Index = (props, rootMargin, triggerOnce) => {
  console.log(props);
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });

  //ドロップダウンメニューの開閉////////////////
  const [clicked, setClicked] = useState(100);

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(100);
    }
    setClicked(index);
  };
  //ドロップダウンメニューの開閉////////////////

  //アニメーション専用/////////////////////////
  useEffect(() => {
    setAnimation()
  }, [])

  const setAnimation = () => {

    //about//////////////////////
    gsap.fromTo(
      '#aboutTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTitle',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutImage',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#aboutImage',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#copy',
      { y: 200 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 50%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#line1',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#line1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutText0',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger0',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutText1',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#RMark',
      { scale: 0 }, //fromの設定
      {  //toの設定
        scale: 1,
        rotation: 1440,
        duration: 1,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#referenceImage',
      { y: 160 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )
    //about//////////////////////

    //feature////////////////////
    gsap.fromTo(
      '#featureAnime',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.7,
        scrollTrigger: {
          trigger: '#featureAnime',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#mri',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: '#mri',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#examination',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: '#examination',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#prevention',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: '#prevention',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )
    gsap.fromTo(
      '#prevention',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: '#prevention',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )
    //feature////////////////////

    //voice//////////////////////

  }
  //アニメーション専用/////////////////////////

  return (
    <Layout>
    <body>

      <div id="hero" className={style.hero}>
        <img src={KV} className={style.heroImg} />
        <img src={KVsp} className={style.heroImg_sp} />
        <img src={uneune} className={style.uneune} />

        <div className={style.textContainer}>
          <div className={style.mask}>
            <StaticImage src="../images/KvText.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.KvText} />
            <StaticImage src="../images/KvTextSp1.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.KvTextSp1} />
          </div>

          <div className={style.mask}>
            <img src={lineVertical} className={style.lineVertical} />
          </div>

          <div className={style.mask}>
            <StaticImage src="../images/KvTextSp0.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.KvTextSp0} />
          </div>

          <div className={style.mask}>
            <h3>世界で唯一のAI解析技術で、<br></br>
              3年後の認知症リスクを知る。</h3>
          </div>
        </div>
      </div>

      <div id="about" className={style.about}>
        
        <div className={style.mask}>
          <h1 id="aboutTitle" className={style.aboutTitle}>
            認知症リスク検査とは？
          </h1>
        </div>
        
        <div id="aboutImage" className={style.aboutImageMask}>
          <img src={about} className={style.aboutImage} />
        </div>

        <div id="aboutCopy" className={style.aboutCopy}>
          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              脳の状態から
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              3年後の認知症リスクを知り、
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              3将来を見据えたライフスタイルを
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
                見直すきっかけに。
            </p>
          </div>
        </div>

        <div id="aboutCopy" className={style.aboutCopySp}>
          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              脳の状態から3年後の
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              認知症リスクを知り、
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              3将来を見据えた
            </p>
          </div>
          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              ライフスタイルを
            </p>
          </div>

          <div className={style.mask}>
            <p id="copy" className={style.copy}>
              見直すきっかけに。
            </p>
          </div>
        </div>

        <div id="line1" className={style.lineMask}>
          <hr className={style.line1}></hr>
        </div>

          <div id="aboutTriger0" className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              認知症リスク検査は、島根大学医学部、滋賀医科大学、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              脳の状態から3年後の認知症リスクを検査します。
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              脳の一部だけではなく、脳全体を膨大なデータと比較することで、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              高い精度を実現。将来を見据えた認知症予防の検討材料として、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              受診者様のライフスタイル見直しに貢献します。
            </div>
          </div>

          <div id="aboutTriger0" className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              認知症リスク検査は、島根大学医学部、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              滋賀医科大学株式会社ERISAで共同開
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              発された、世界で唯一の脳画像解析技術
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              で、脳の状態から3年後の認知症リスク
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              を検査します。脳の一部だけではなく、
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              脳全体を膨大なデータと比較すること
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              で、脳の状態から3年後の認知症リスク
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              で、高い精度を実現。将来を見据えた認
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              知症予防の検討材料として、受診者様の
            </div>
          </div>
          <div className={style.mask}>
            <div id="aboutText0" className={style.aboutText0Sp}>
              ライフスタイル見直しに貢献します。
            </div>
          </div>
          
        <div className={style.reference}>
          <div id="RMark" className={style.RMarkContainer}>
            <StaticImage src="../images/RMark.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.RMark} />
          </div>

          <div>
            <div id="aboutTriger1" className={style.mask}>
              <div id="aboutText1" className={style.aboutText1}>
                日本における65歳以上の認知症患者数は約600万人。
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1}>
                高齢者の<font color="#BD0000">6人に1人</font>が発症する身近な問題です。
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1}>
                症状が現れる20年以上前から徐々に脳の変化が
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1}>
                始まっているとされ、早期から対策することにより
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1}>
                ある程度予防できることがわかっています。
              </div>
            </div>
          </div>
          <div>
            <div id="aboutTriger1" className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                日本における65歳以上の認知症患者数は
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                約600万人。高齢者の<font color="#BD0000">6人に1人</font>が発症す
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                る身近な問題です。症状が現れる20年以
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                上前から徐々に脳の変化が始まっていると
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                され、早期から対策することによりある
              </div>
            </div>
            <div className={style.mask}>
              <div id="aboutText1" className={style.aboutText1Sp}>
                程度予防できることがわかっています。
              </div>
            </div>
          </div>

          <div className={style.mask}>
            <div id="referenceImage">
              <StaticImage src="../images/referenceImage.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImage} />
              <StaticImage src="../images/referenceImageSp.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImageSp} />
            </div>
          </div>

        </div>

        <img src={aboutBack} className={style.aboutBack} />

      </div>

      <div id="feature" className={style.featureContainer}>
        <img src={featureBack} className={style.featureBack} />
        <img src={featureBackBottom} className={style.featureBackBottom} />
        <div className={style.feature}>
          <div id="featureAnime" className={style.featureAnime}>
            <StaticImage src="../images/feature.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureImage} />
          </div>
          <div className={style.featureTitle}>
            <h1>認知症リスク検査の特徴</h1>
          </div>
        </div>

        

        <div id="mri" className={style.mri}>
          <img src={mri} className={style.mriImage} />
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
              <p className={style.textSp}>
                脳の一部（海馬）のみならず、脳全体の状態を把握することで、膨大なデータベースと照合し高精度の解析を実現。脳各部位の体積の将来変化を予測することで、これまでの解析以上に正確な脳状態を確認できます。</p>
            </div>
          </div>
            
        </div>

        <div id="examination" className={style.examination}>
          <img src={examination} className={style.examinationImageSp} />
          <div className={style.examinationText}>
              <h1>3年後の脳状態を予測し<br />
                認知症リスクを検査</h1>
              <hr />
              <p>脳全体の状態から3年後の脳状態を予測する<br />
                ことで、受診者様それぞれの認知症リスクを<br />
                検査。解説付きの検査レポートを通じて、早<br />
                期対策・予防に活用できます。</p>
              <p className={style.textSp}>脳全体の状態から3年後の脳状態を予測することで、受診者様それぞれの認知症リスクを検査。解説付きの検査レポートを通じて、早期対策・予防に活用できます。</p>
            </div>
          <img src={examination} className={style.examinationImage} />
        </div>

        <div id="prevention" className={style.prevention}>
          <img src={prevention} className={style.preventionImage} />
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

    
      <div id="voiceMask" className={style.voiceMask}>
        <div id="voice" className={style.voiceContainer}>
            <img src={voiceImage} className={style.voiceImage} />

            <div className={style.voiceText}>

              <div className={style.voiceTextContainer}>
                <p>認知症の今の状態が詳しくわかった
                  ので、安心して暮らしていけると
                  思っています。</p>
                <hr />
                <h6>80歳代・男性</h6>
              </div>
              <div className={style.voiceTextContainer}>
                <p>認知機能低下予防のために生活習慣
                  の見直しを決心できたので、また3年
                  後に検査を受けたいです。</p>
                <hr />
                <h6>70代・女性</h6>
              </div>
              <div className={style.voiceTextContainer}>
                <p>特定健康診査やがん検診と同じよう
                  に、今後も定期的に検査していくつ
                  もりです。</p>
                <hr />
                <h6>70代・女性</h6>
              </div>

            </div>
        </div>
      </div>

      <div id="flow" className={style.flowContainer}>
        <h1>検査の流れ</h1>
        <StaticImage src="../images/flow.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.flowImage} />

        <div className={style.circleContainer}>
          <div className={style.circle}>
            <img src={number1} className={style.number} />
            <h3>導入医療機関で予約</h3>
              <h4>予約方法は<br />
                各医療機関により異なりますので<br />
                直接お問い合わせください</h4>
            <AnchorLink href="#introduce">
                <div className={style.flowButton}>
                <p>導入医療機関を探す</p>
                <div className={style.playButton}></div>
              </div>
            </AnchorLink>
          </div>
          <div>
            <img src={pointLine} className={style.pointLine} />
          </div>

          <div className={style.circle}>
            <img src={number2} className={style.number} />
            <h3>頭部MRI撮影</h3>
              <h4>ご予約の医療機関にて<br />
                脳ドックを受診いただき<br />
                MRI撮像による脳画像データを取得</h4>
              <StaticImage src="../images/brain.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.brainImage} />
          </div>
          <div>
            <img src={pointLine} className={style.pointLine} />
          </div>
          <div className={style.circle}>
            <img src={number3} className={style.number} />
              <h3>レポート受取</h3>
              <h4>解説付きの検査レポートが<br />
                発行され当日または翌日以降に<br />
                お送りいたします</h4>
              <StaticImage src="../images/report.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.reportImage} />
          </div>
        </div>
      </div>

      <div id="question" className={style.questionContainer0}>
        
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

      <div id="introduce" className={style.Introduce}>

        <div className={style.title}>
          <h1>導入医療機関</h1>
        </div>
        
        <div className={style.region}>
            <ul id="spacey2" className={style.spacey2}>
              {props.data.allMicrocmsRegion.edges.map((region, index) => (
                <li key={index}>
                  <div
                    className={style.button}
                    type="button"
                    onClick={() => {
                      handleClick(index);
                    }}>
                    <p>{region.node.region}</p>

                    <div 
                      className={style.triangle}
                      style={
                        clicked === index
                          ? {
                            borderColor: "transparent transparent #565656 #565656", marginTop: "11px"
                          }
                          : { borderColor: "#565656 #565656 transparent transparent", marginTop: "15px"}
                      }
                      >

                    </div>
                  </div>
                  <hr
                    style={
                      clicked === index
                        ? {
                          height: "15px",
                          marginBottom: "70px"
                        }
                        : { height: "0", opacity: "0", transitionDelay: "0.5s" }
                    } />
                    
                    <li
                      className={style.menus}
                      style={
                        clicked === index
                          ? {
                            height: "85px",
                            backgroundColor: "#fff",
                            transitionDelay: "0.3s"
                          }
                          : { height: "0", opacity: "0"}
                      }>
                      <li>北海道</li><li>青森県</li><li>岩手県</li><li>北海道</li><li>北海道</li><li>北海道</li><li>北海道</li>
                    </li>

                </li>
              ))}
            </ul>
        </div>


        <div className={style.hospitalContainer}>
        {props.data.allMicrocmsIntroduce.edges.map((Introduce, index) => (
          
            <div className={style.hospital} key={index}>
              <h1>{Introduce.node.name}</h1>
              <h2>Address：{Introduce.node.address}</h2>
              <h3>Tel：{Introduce.node.number}</h3>
              <a href={Introduce.node.url}>
                <div className={style.hospitalButton}>
                  <p>VIEW WEB</p>
                  <div className={style.playButton}></div>
                </div>
              </a>
            </div>
        )
        )}
        </div>
        <StaticImage src="../images/search.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.searchImage} />
      </div>

    </body>
    </Layout>
  )
}

export default Index
export const query0 = graphql`
query MicrocmsRegionQuery {
  allMicrocmsRegion {
    edges {
      node {
        region
        prefectures0 {
          fieldId
          prefecture
        }
      }
    }
  }
    allMicrocmsIntroduce {
    edges {
      node {
        address
        name
        number
        prefectures
        url
      }
    }
  }
}
`


export const Head = () => {
  return (
    <>
      <title>ERISA 認知症リスク検査</title>
      <description>世界で唯一のAI解析技術で、
        3年後の認知症リスクを知る。</description>
    </>
  )
}