import React, { useState, useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import KvText from '../images/Kvtext.svg'
import KvTextSpUp from '../images/KvTextSpUp.svg'
import KvTextSpDown from '../images/KvTextSpDown.svg'
import about from '../images/about.png'
import lineVertical from '../images/line-vertical.png'
import featureImage from '../images/feature.png'
import flowImage from '../images/flow.png'
import questionImage from '../images/question.png'
import number1 from '../images/01.png'
import number2 from '../images/02.png'
import number3 from '../images/03.png'
import pointLine from '../images/pointLine.png';


gsap.registerPlugin(ScrollTrigger);

export const Index = (props) => {
  console.log(props);

  //ドロップダウンメニューの開閉////////////////
  const [clicked, setClicked] = useState(100);

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(100);
    }
    setClicked(index);
  };
  //ドロップダウンメニューの開閉////////////////

  //アニメーション専用/////////////////////////////////////////
  const div = useRef();
  useEffect(() => {
    setAnimation()
    
  }, [div])
  let mm = gsap.matchMedia();

  const setAnimation = () => {


    //KV/////////////////////////
    gsap.fromTo(
      '#KvText',
      { y: 200 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#KvText',
          start: 'top 90%', //要素のトップが、画面の中央まできたら開始
        },
        stagger: {
          each: 0.2,
        }
      }
    )
    //KV/////////////////////////

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
      { y: 100, opacity: 1 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
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
      '#mri',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#mri',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
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
      '#examination',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#examination',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
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
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#prevention',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
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

    gsap.fromTo(
      '#voiceMask',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: '#voiceMask',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
    gsap.fromTo(
      '#voiceText',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay:0.3,
        scrollTrigger: {
          trigger: '#voiceMask',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        }
      }
    )
    });

    mm.add("(max-width: 500px)", () => {
      // ここに500px以下のときのコードを書きます
      ScrollTrigger.batch('#voiceText', {
        onEnter: batch => gsap.fromTo(batch,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            start: 'top 60%',
          }
        ),
        once: true
      });
    });

    //voice//////////////////////

    //flow///////////////////////

    gsap.fromTo(
      '#flowImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: '#flowImageMask',
          start: 'top 60%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#circle',
        { scale: 0 }, //fromの設定
        {  //toの設定
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#circle',
            start: 'top 70%',
          },
          stagger: {
            each: 0.2,
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      // ここに500px以下のときのコードを書きます
      ScrollTrigger.batch('#circle', {
        onEnter: batch => gsap.fromTo(batch,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            start: 'top 60%',
          }

        ),
        once: true
      });
    });
    //flow///////////////////////

    //question///////////////////

    gsap.fromTo(
      '#questionImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#questionImageMask',
          start: 'top 60%',
        },
      }
    )

    gsap.fromTo(
      '#questionText0',
      { opacity: 0, y: 70}, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText0',
          start: 'top 60%',
        },
      }
    )

    gsap.fromTo(
      '#questionText1',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText1',
          start: 'top 60%',
        },
      }
    )

    gsap.fromTo(
      '#questionText2',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText2',
          start: 'top 60%',
        },
      }
    )

    gsap.fromTo(
      '#questionText3',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText3',
          start: 'top 60%',
        },
      }
    )
    
    //question///////////////////

    //introduce///////////////////



    ScrollTrigger.batch('#hospital', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 1.2,
          ease: 'power2.out'
        }
      ),
      once: true
    });

    gsap.set("#hospital", { opacity: 0, y: 100 }); //初期状態をセット

    ScrollTrigger.batch("#hospital", {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, }),
      start: "top 50%",
      once: true,
    });

    //introduce///////////////////




  }
  //アニメーション専用/////////////////////////////////////////

  return (
    <Layout>
      <body>

        <div id="hero" className={style.hero}>
          <StaticImage src="../images/KV.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.heroImg} />
          <StaticImage src="../images/KVSP.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.heroImg_sp} />
          <StaticImage src="../images/uneune.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.uneune} />
          <StaticImage src="../images/uneuneSp.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.uneuneSp} />
          
          <div className={style.textContainer}>
            <div className={style.mask}>
              <img id="KvText" src={KvText} className={style.KvText} />
              <img id="KvText" src={KvTextSpUp} className={style.KvTextSp1} />
            </div>

            <div className={style.mask}>
              <img src={lineVertical} id="KvText" className={style.lineVertical} />
            </div>

            <div className={style.mask}>
              <img id="KvText" src={KvTextSpDown} className={style.KvTextSp0} />
            </div>

            <div className={style.mask}>
              <h3 id="KvText">世界で唯一のAI解析技術で、<br></br>
                3年後の認知症リスクを知る。</h3>
            </div>
          </div>
          <StaticImage src="../images/scroll.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.scroll} />
        </div>

        <div id="about" className={style.about}>
          
          <div id="aboutTitleMask" className={style.mask}>
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
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0}>
                株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0}>
                脳の状態から3年後の認知症リスクを検査します。
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0}>
                脳の一部だけではなく、脳全体を膨大なデータと比較することで、
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0}>
                高い精度を実現。将来を見据えた認知症予防の検討材料として、
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0}>
                受診者様のライフスタイル見直しに貢献します。
              </div>
            </div>

            <div id="aboutTriger0" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                認知症リスク検査は、島根大学医学部、
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                滋賀医科大学株式会社ERISAで共同開
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                発された、世界で唯一の脳画像解析技術
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                で、脳の状態から3年後の認知症リスク
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                を検査します。脳の一部だけではなく、
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                脳全体を膨大なデータと比較すること
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                で、脳の状態から3年後の認知症リスク
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                で、高い精度を実現。将来を見据えた認
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                知症予防の検討材料として、受診者様の
              </div>
            </div>
            <div id="aboutText" className={style.mask}>
              <div id="aboutText0" className={style.aboutText0Sp}>
                ライフスタイル見直しに貢献します。
              </div>
            </div>
            
            <div id="reference" className={style.reference}>
            <div className={style.RMarkContainer}>
              <div id="RMark">
                <StaticImage src="../images/RMark.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.RMark} />
              </div>
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
          <StaticImage src="../images/aboutBack.png" quality={90} placeholder={"none"} formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutBack} loading="lazy" />

        </div>

        <div id="feature" className={style.featureContainer}>
          <StaticImage src="../images/featureBack.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureBack} loading="lazy" />
          <StaticImage src="../images/featureBackBottom.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureBackBottom} loading="lazy" />
          
          <div className={style.feature}>

            <div id="featureAnime" className={style.featureAnime}>
              <img src={featureImage} className={style.featureImage} loading="lazy" />
            </div>

            <div className={style.featureTitle}>
              <h1>認知症リスク検査の特徴</h1>
            </div>

            <div id="mri" className={style.mri}>
              <StaticImage id="mriImage" src="../images/mriImage.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.mriImage} loading="lazy" />
              <div className={style.mriText}>

                <div className={style.mriTexttextContainer}>
                  <h1>AIによる<br />
                    高精度のMRI画像解析で<br />
                    脳全体の状態を把握</h1>
                  <hr />
                  <p>脳の一部（海馬）のみならず、脳全体の状態を把握することで、膨大なデータベースと照合し高精度の解析を実現。脳各部位の体積の将来変化を予測することで、これまでの解析以上に正確な脳状態を確認できます。</p>
                  <p className={style.textSp}>
                    脳の一部（海馬）のみならず、脳全体の状態を把握することで、膨大なデータベースと照合し高精度の解析を実現。脳各部位の体積の将来変化を予測することで、これまでの解析以上に正確な脳状態を確認できます。</p>
                </div>

              </div>

            </div>

            <div id="examination" className={style.examination}>
              <StaticImage src="../images/examination.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.examinationImageSp} loading="lazy" />
              <div className={style.examinationText}>
                <h1>3年後の脳状態を予測し<br />
                  認知症リスクを検査</h1>
                <hr />
                <p>脳全体の状態から3年後の脳状態を予測することで、受診者様それぞれの認知症リスクを検査。解説付きの検査レポートを通じて、早期対策・予防に活用できます。</p>
                <p className={style.textSp}>脳全体の状態から3年後の脳状態を予測することで、受診者様それぞれの認知症リスクを検査。解説付きの検査レポートを通じて、早期対策・予防に活用できます。</p>
              </div>
              <StaticImage src="../images/examination.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.examinationImage} loading="lazy" />
            </div>

            <div id="prevention" className={style.prevention}>
              <StaticImage src="../images/prevention.jpg" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.preventionImage} loading="lazy" />
              <div className={style.preventionText}>
                <div className={style.preventionTextContainer}>
                  <h1>
                    早期対策・予防方針から<br />
                    生活習慣の見直しに繋がる</h1>
                  <hr />
                  <p>自身の脳状態や将来の認知症リスクを知ることで、レポートや医療機関を通じた早期対策・予防方針から、効果的な生活習慣の見直しを検討することに繋がります。</p>
                  <p className={style.textSp}>自身の脳状態や将来の認知症リスクを知ることで、レポートや医療機関を通じた早期対策・予防方針から、効果的な生活習慣の見直しを検討することに繋がります。</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      
        <div id="voiceMask" className={style.voiceMask}>
          <div id="voice" className={style.voiceContainer}>
              <div className={style.voiceText}>

                <div id="voiceText" className={style.voiceTextContainer}>
                  <p>認知症の今の状態が詳しくわかった
                    ので、安心して暮らしていけると
                    思っています。</p>
                  <hr />
                  <h6>80歳代・男性</h6>
                </div>
                <div id="voiceText" className={style.voiceTextContainer}>
                  <p>認知機能低下予防のために生活習慣
                    の見直しを決心できたので、また3年
                    後に検査を受けたいです。</p>
                  <hr />
                  <h6>70代・女性</h6>
                </div>
                <div id="voiceText" className={style.voiceTextContainer}>
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
          <div id="flowImageMask" className={style.flowImageMask} >
            <img src={flowImage} className={style.flowImage} loading="lazy" />
          </div>

          <div className={style.circleContainer}>
              <div id="circle" className={style.circle}>
              <img src={number1} className={style.number} loading="lazy" />
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
              <img id="circle" src={pointLine} className={style.pointLine} />
            </div>

            <div id="circle" className={style.circle}>
              <img src={number2} className={style.number} />
              <h3>頭部MRI撮影</h3>
                <h4>ご予約の医療機関にて<br />
                  脳ドックを受診いただき<br />
                  MRI撮像による脳画像データを取得</h4>
                <StaticImage src="../images/brain.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.brainImage} />
            </div>
            <div>
              <img id="circle" src={pointLine} className={style.pointLine} />
            </div>
            <div id="circle" className={style.circle}>
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
          
          <div className={style.questionContainer1}>
            <div id="questionImageMask" className={style.questionImageMask}>
              <img src={questionImage} className={style.questionImage} loading="lazy" />
            </div>
            <h1>よくあるご質問</h1>
            
            <div className={style.questionTextMask}>
              <div className={style.questionText}>
                <hr />

                <div className={style.mask}>
                  <div id="questionText0" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>どれくらいの頻度で受けるべきですか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText0" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>2～3年に1回の検査をおすすめします。</h3>
                  </div>
                </div>

              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText1" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>何歳から受けられますか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText1" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>50歳以上の方に推奨しています。</h3>
                  </div>
                </div>

              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText2" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>この検査で認知症を診断することができますか？</h3>
                  </div>
                </div>
                <div className={style.mask}>
                  <div id="questionText2" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>この検査で認知症を診断することはできません。</h3>
                  </div>
                </div>
              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText3" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>脳が萎縮すると認知症になるのですか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText3" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>脳の萎縮のみから認知症の診断はできません。検査結果が心配な方は専門医の受診をお勧めします。</h3>
                  </div>
                </div>
                <hr />
              </div>
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
                  <li >
                    
                    <div className={style.scrollbutton}>
                      <div className={style.button}
                        type="button"
                        onClick={() => {
                          handleClick(index);
                        }}>
                        <p>{region.node.region}</p>

                        <div className={style.triangle}
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
                    </div>
                    <hr
                      style={
                        clicked === index
                          ? {
                            height: "15px",
                            marginBottom: "85px"
                          }
                          : { height: "0", opacity: "0", transitionDelay: "0.5s" }
                      } />
                      
                    <li
                      className={style.menus}
                      style={
                        clicked === index
                          ? {
                            minheight: "85px",
                            backgroundColor: "#fff",
                            transitionDelay: "0.3s"
                          }
                          : { height: "0", opacity: "0"}
                      }>
                      <li>北海道</li><li>青森県</li><li>岩手県</li><li>北海道</li>
                    </li>

                  </li>
                ))}

              </ul>
          </div>


          <div id="hospitalContainer" className={style.hospitalContainer}>

            {props.data.allMicrocmsIntroduce.edges.map((Introduce, index) => (
              
                <div id="hospital" key={index} className={style.hospital}>

                  <h1>{Introduce.node.name}</h1>
                  <h2>Address：{Introduce.node.address}</h2>
                  <h3>Tel：{Introduce.node.number}</h3>

                    <div className={style.hospitalButton}>
                      <a href={Introduce.node.url}>
                        <p>VIEW WEB</p>
                      </a>
                      <div className={style.playButton}></div>
                    </div>
                  
                </div>
            ))}

          </div>
          <StaticImage src="../images/search.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.searchImage} />
        
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