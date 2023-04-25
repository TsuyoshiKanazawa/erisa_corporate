import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/about.module.scss"

import aboutTitle from '../images/aboutTitle.svg'
import aboutTitlePic from '../images/aboutTitlePic.png'
import aboutOurMission from '../images/aboutOurMission.jpg'
import aboutOurMissionSP from '../images/aboutOurMissionSP.jpg'
import brain from '../images/brain.svg'
import shimadzuLogo from '../images/shimadzuLogo.png'
import fujikkoLogo from '../images/fujikkoLogo.svg'
import mcsLogo from '../images/mcsLogo.svg'
import dvgLogo from '../images/dvgLogo.svg'
import saninsansoLogo from '../images/saninsansoLogo.png'
import imaiLogo from '../images/imaiLogo.svg'

import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'
import ogp from '../images/OGP.jpg'

gsap.registerPlugin(ScrollTrigger);

const Index = (props) => {
  console.log(props)

  useLayoutEffect(() => {
    window.gtranslateSettings = {
      "default_language": "ja",
      "detect_browser_language": false,
      "languages": ["ja", "en", "zh-CN"],
      "wrapper_selector": ".gtranslate_wrapper"
    }
  });

  //ヘッダーが表示・非表示になる/////////////////
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 100;
  const scrollEvent = React.useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderShown(false);

    } else {
      setIsHeaderShown(true);
    }

    if (offset < lastPosition) {
      setIsHeaderShown(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);
  ///////////////////////////////////////////
  //ハンバーガーメニューの開閉////////////////
  const handle = useCallback((e) => {
    e.preventDefault();
  }, []);

  const scrollLock = () => {//ハンバーガーメニューを空けた時はスクロール禁止
    document.addEventListener('touchmove', handle, { passive: false });
    document.addEventListener('mousewheel', handle, { passive: false });
  }

  const scrollLockLift = () => {//ハンバーガーメニューを閉じたらスクロール禁止解除
    document.removeEventListener('touchmove', handle,);
    document.removeEventListener('mousewheel', handle,);
  }


  const [isShow, setIsShow] = useState(false);
  const closeWithClickOutSideMethod = (e, setter) => {
    if (e.target === e.currentTarget) {//メニュー外側をクリックしたら
      setter(false);//メニューを閉じる
      document.body.style.overflow = "auto";
      scrollLockLift();
    }
  };
///////////////////////////////////////////

  //アニメーション専用/////////////////////////////////////////
  const div = useRef();

  useEffect(() => {
    setAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [div])

  let mm = gsap.matchMedia();

  const setAnimation = () => {
  //共通/////////////////////////

  gsap.fromTo(
    '#body',
    { visibility: "hidden" }, //fromの設定
    {  //toの設定
      visibility: "visible",
      delay: 0.2,
    }
  )

  gsap.fromTo(
    '#ourMission',
    { visibility: "hidden" }, //fromの設定
    {  //toの設定
      visibility: "visible",
      delay: 0.2,
    }
  )

  //共通/////////////////////////

  mm.add("(min-width: 901px)", () => {

  //title///////////////////
    gsap.fromTo(
      '#aboutTitlePic',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "54.3vw",
        delay: 0.5,
        duration: 2.5,
        ease: "power4.out",
      }
    )

    gsap.fromTo(
      '#aboutTitleText',
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
        duration: 0.5,
      }
    )
  //title///////////////////
  //ourMission///////////////////
    gsap.fromTo(
      '#aboutOurMissionImg',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "50vw",
        delay: 0.5,
        duration: 1,
      }
    )

    gsap.fromTo(
      '#ourMissionText',
      { y: 100, visibility: "hidden" }, //fromの設定
      {  //toの設定
        y: 0,
        visibility: "visible",
        delay: 1.6,
        duration: 0.5,
        stagger: {
          each: 0.2,
        }
      }
    )
  //ourMission///////////////////
  //ourVision///////////////////
    gsap.fromTo(
      '#ourVisionTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#ourVisionTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#ourVisionTitleLine',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "600px",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#ourVisionTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutCopy',
      { opacity: 0 }, //fromの設定
      {  //toの設定
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#brain',
      { opacity: 0 }, //fromの設定
      {  //toの設定
        opacity: 1,
        duration: 1.75,
        delay: 1,
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 80%',
        },
      }
    )
  //ourVision///////////////////
  //details///////////////////
    gsap.fromTo(
      '#detailsTitle1',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailsTitle1',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#details',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#details',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#detailContents',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#detailContents',
          start: 'top 80%',
        },
      }
    )
    gsap.fromTo(
      '#detailContents0',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailContents',
          start: 'top 80%',
        },
      }
    )
  //details///////////////////
  //profile///////////////////
    gsap.fromTo(
      '#companyTitle',
      { y: 150 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#companyTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#companyPic',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "600px",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#companyPic',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#profile',
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#profile',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#certification',
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#certification',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        }
      }
    )
  //profile///////////////////
  //partner///////////////////
    gsap.fromTo(
      '#partnerTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#partnerTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#partnerLogo',
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#partnerLogo',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        }
      }
    )
  //partner//////////////////
  //history//////////////////
    ScrollTrigger.batch('#historyContent', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          start: 'top 80%',
        }
      ),
      once: true
    });

    gsap.fromTo(
      '#historyTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#historyTitle',
          start: 'top 80%',
        },
      }
    )
  //history//////////////////
  });

  mm.add("(max-width: 900px)", () => {
    gsap.fromTo(
      '#aboutTitle',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "auto",
        delay: 0.5,
        duration: 1,
        ease: "power4.out",
      }
    )

    gsap.fromTo(
      '#aboutOurMissionImgSP',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "auto",
        delay: 0.5,
        duration: 1,
        ease: "power4.out",
      }
    )
    gsap.fromTo(
      '#aboutTitleText',
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
        duration: 0.5,
      }
    )
    ScrollTrigger.batch('#ourMissionText', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          visibility: "hidden",
        },
        {
          y: 0,
          visibility: "visible",
          duration: 0.5,
          start: 'top 80%',
        }
      ),
      once: true
    });

    gsap.fromTo(
      '#ourVisionTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#ourVisionTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#ourVisionTitleLine',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "230px",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#ourVisionTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutCopy',
      { autoAlpha: 0 }, //fromの設定
      {  //toの設定
        autoAlpha: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#brain',
      { autoAlpha: 0 }, //fromの設定
      {  //toの設定
        autoAlpha: 1,
        duration: 1.75,
        delay: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#detailsTitle1',
      { y: 150 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailsTitle1',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#detailsTitle2',
      { y: 50 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailsTitle1',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#details',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#details',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#detailContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
          start: 'top 80%',
        }
      ),
      once: true
    });

    gsap.fromTo(
      '#detailContents0',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailContents0',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#companyTitle',
      { y: 150 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#companyTitle',
          start: 'top 90%',
        },
      }
    )

    gsap.fromTo(
      '#companyPic',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#companyPic',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#profile',
      { y: 100, visibility: "hidden" }, //fromの設定
      {  //toの設定
        y: 0,
        visibility: "visible",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#profile',
          start: 'top 80%',
        },
      }
    )
    
    gsap.fromTo(
      '#partnerLogo',
      { y: 100, visibility: "hidden" }, //fromの設定
      {  //toの設定
        y: 0,
        visibility: "visible",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#partnerLogo',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        }
      }
    )

    ScrollTrigger.batch('#certification', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          visibility: "hidden",
        },
        {
          y: 0,
          visibility: "visible",
          duration: 0.5,
          start: 'top 80%',
        }
      ),
      once: true
    });

    gsap.fromTo(
      '#partnerTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#partnerTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#historyTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#history',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#historyContent', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          visibility: "hidden",
        },
        {
          y: 0,
          visibility: "visible",
          duration: 0.5,
          start: 'top 70%',
        }
      ),
      once: true
    });
  });

  }
  //アニメーション専用/////////////////////////////////////////
  return (
    <Layout>
      <Helmet>
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
      </Helmet>
      <body id="body" className={style.body}>
        <div class="gtranslate_wrapper"></div>
        <header id="headerWrapper" className={isHeaderShown ? "about-module--container--517ce" : "about-module--show--6213c"}>
          <div className={style.flexContainer}>
            <a href="/">
              <img src={logoColor} id="logoColor" className={style.logoColor} alt="logo" />
            </a>
            <div className={style.headerRight}>
              <a href="/information/" ><p id="headerMenu">INFORMATION</p></a>
              <a href="/about" ><p id="headerMenu">ABOUT</p></a>
              <a href="/" ><p id="headerMenu">PRODUCT</p></a>
              <a href="/" ><p id="headerMenu">MEMBER</p></a>
              <a href="/" ><p id="headerMenu">RECRUIT</p></a>
              <a href="/contact" ><p id="headerMenu">CONTACT</p></a>
              <button
                className={style.hmb}
                id="hamberger"
                onClick={() => {
                  setIsShow(!isShow);
                  scrollLock();
                }}
              >
                <img src={hamberger} id="hambergerSVG" className={style.hamberger} />
              </button>
            </div>
            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
              className={`about-module--menuWrapper--8a103 ${isShow ? "about-module--menuWrapper__active--b0964" : ""}`}
              onClick={(e) => {
                closeWithClickOutSideMethod(e, setIsShow);
              }}
              style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
            >
              <div id="menu" className={style.menu}>
                <div className={style.menuTop}>
                  <button
                    className={style.close}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                  </button>
                </div>

                <div className={style.menuList}>
                  <a href="/information"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>INFORMATION</p>
                  </a>
                  <a href="/about"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>ABOUT</p>
                  </a>
                  <a
                    className={style.list}>
                    <p>PRODUCT</p>
                  </a>
                  <a
                    className={style.list}>
                    <p>MEMBER</p>
                  </a>
                  <a
                    className={style.list}>
                    <p>RECRUIT</p>
                  </a>
                  <a href="/contact"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>CONTACT</p>
                  </a>
                </div>
                <div className={style.copyright}>
                  <p>©2023 ERISA Co.,Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="aboutTitle" className={style.aboutTitle}>
          <div id="aboutTitleText" className={style.titleText}>
            <h1>ERISAについて</h1>
            <img src={aboutTitle} alt="aboutTitle" className={style.aboutTitleImg}/>
          </div>

          <div id="aboutTitlePic" className={style.mask}>
            <img src={aboutTitlePic} alt=" profile" className={style.aboutTitlePic} />
          </div>
        </div>

        <div id="ourMission" className={style.ourMission}>
          <div id="aboutOurMissionImgSP" className={style.mask}>
            <img src={aboutOurMissionSP} alt="aboutOurMission" className={style.aboutOurMissionImgSP} />
          </div>
          
          <div className={style.ourMissionContainer}>
            <div className={style.ourMissionTextContainer}>

              <div id="aboutOurMissionImg" className={style.mask}>
                <img src={aboutOurMission} alt="aboutOurMission" className={style.aboutOurMissionImg} />
              </div>

              <div className={style.ourMissionText}>
                <h1 id="ourMissionText">脳を知り、<br />
                  あなたらしさを<br />
                  支える。</h1>

                <h2 id="ourMissionText">人生１００年時代の現代社会。<br />
                  脳や神経、それに由来する疾患における脳の構造は人類未到の<br />
                  超高齢化社会でますます多様化し、<br />
                  その疾患人口は今後も増加が見込まれています。</h2>
                <h2 id="ourMissionText">重要なのは脳の状態を把握して、<br />
                  いかに病気を予知・予防するかということ。<br />
                  しかし、複雑な脳の状態を安全かつ正確に把握することは<br />
                  非常に困難とされています。</h2>
                <h2 id="ourMissionText">私たちERISAは、<br />
                  AI(ArtificialIntelligence)とOI(OpenInnovation)によって、<br />
                「脳を知る」ために必要なソリューション開発を担い、<br />
                すべての人々の「あなたらしさ」を支える企業として、<br />
                安心できる社会づくりを目指します。</h2>
              </div>

            </div>
          </div>
        </div>

        <div className={style.ourVision}>
          <div className={style.mask}>
            <h1 id="ourVisionTitle">OUR <br />VISION</h1>
          </div>
          <div className={style.mask}>
            <h2 id="ourVisionTitle">ERISAが目指す未来</h2>
          </div>
          <div id="ourVisionTitleLine" className={style.lineMask}>
            <hr />
          </div>

          <div id="aboutCopy" className={style.aboutCopy}>
            {/* 
            <img src={aboutCopy} alt="aboutCopyImg" className={style.aboutCopyImg} />
            <img src={aboutCopySP} alt="aboutCopyImg" className={style.aboutCopyImgSP} />
            */}
            <img src={brain} id="brain" alt="aboutCopyImg" className={style.brain} />

            <div className={style.copyText}>
              <h1>あなたらしさを支える</h1>
              <h2>「<color id="brain">BRAIN</color>」<span>に</span></h2>
            </div>
          </div>
          <div className={style.bottomLine}></div>
        </div>

        <div className={style.businessDetails}>
          <div className={style.detailsTitle}>
            <div className={style.mask}><h1 id="detailsTitle1">BUSINESS DETAILS</h1></div>
            <div className={style.mask}><h2 id="detailsTitle1">事業概要</h2></div>
          </div>

          <div className={style.mask}>
            <p id="details">AI×OIを用いた<br />脳画像解析技術の研究開発・販売事業</p>
          </div>

          <div className={style.detailContents}>

            <div className={style.detailContainer}>
              <div id="detailContents" className={style.mask}>
                <div className={style.content}>
                  <h1>01</h1>
                  <h2>検査サービス</h2>
                  <h3>一般コンシューマ向けに脳ドックのオプションサービスや、
                    認知機能チェックアプリを提供<br />
                    日本や中国、その他地域で導入施設を拡大中</h3>
                </div>
              </div>
            </div>

            <div className={style.detailContainer}>
              <div id="detailContents" className={style.mask}>
                <div className={style.content}>
                  <h1>02</h1>
                  <h2>診断支援<br />
                    ソフトウェア販売</h2>
                  <h3>脳の関心領域ごとの萎縮度算定を行うBAADをベースとした、
                    医師向けのAIソフトウェアを開発<br />
                    うつ・双極性障害、認知症、脳動脈瘤、水頭症、統合失調症などの中枢神経系疾患を、客観的に脳画像から判別することが可能となる</h3>
                </div>
              </div>
            </div>

            <div className={style.detailContainer0}>
              <div id="detailContents0" className={style.mask}>
                <div className={style.content}>
                  <h1>03</h1>
                  <h2>AI画像解析<br />
                    受託研究</h2>
                  <h3>AIを活用したデータ解析受託業務<br />
                    デジタルバイオマーカーへの応用を目指す</h3>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={style.companyProfile}>
          <div className={style.companyContainer}>
            <div className={style.companyTitle}>
              <div className={style.mask}><h1 id="companyTitle" translate="no">COMPANY<br />PROFILE</h1></div>
              <div className={style.titleMask}><h2 id="companyTitle">会社概要</h2></div>
            </div>


            <div className={style.overview}>
              <div id="companyPic" className={style.mask}>
                <StaticImage src="../images/companyPic.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.companyPic} />
              </div>

              <div id="profile" className={style.profile}>
                <div id="profileContent" className={style.profileContent}>
                  <h1>会社名</h1>
                  <h2 translate="no">株式会社ERISA(ERISA Co.,Ltd.)</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>所在地</h1>
                  <h2>〒690-0816<br />島根県松江市北陵町46-6</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>TEL</h1>
                  <h2>0852-61-8400</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>FAX</h1>
                  <h2>0852-61-8401</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>代表取締役</h1>
                  <h2 translate="no">河原 八郎(Hachiro Gobara)</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>設立</h1>
                  <h2>2017年4月10日</h2>
                </div>
                <div id="profileContent" className={style.profileContent}>
                  <h1>資本金</h1>
                  <h2>8,250万円</h2>
                </div>
              </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18375.428671631627!2d133.05067595147918!3d35.49568335470689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f4.1!3m3!1m2!1s0x3557043386d6dd69%3A0x2c185922801cd47f!2z5qCq5byP5Lya56S-RVJJU0EgKOOCqOODluODquODl-ODqeODs-e1seioiOino-aekOeglOeptuaJgCk!5e0!3m2!1sja!2sjp!4v1681299641493!5m2!1sja!2sjp" width="1120" height="400" className={style.googleMap} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div className={style.certifications}>
              <div id="certification" className={style.certification}>
                <h1>第二種医療機器製造販売業許可</h1>
                <h2>■許可番号：32B2X10001</h2>
                <h2>■主たる機能を有する事務所の名称：株式会社ERISA</h2>
              </div>
              <div id="certification" className={style.certification}>
                <h1>医療機器認証取得</h1>
                <h2>■販売名：脳画像解析プログラム BAAD</h2>
                <h2>■医療機器認証番号：303AGBZX00065000</h2>
              </div>
            </div>

          </div>
        </div>

        <div className={style.partner}>
          <div className={style.partnerTitle}>
            <div className={style.partnerTitleMask}><h1 id="partnerTitle">PARTNER</h1></div>
            <div className={style.mask}><h2 id="partnerTitle"> 連携企業・団体</h2></div>
          </div>

          <div className={style.partnerLogo}>
            <div className={style.partnerLogoContainer}>
              <img src={shimadzuLogo} alt="logo" id="partnerLogo" className={style.shimadzuLogo} />
              <img src={mcsLogo} alt="logo" id="partnerLogo" className={style.mcsLogo} />
              <img src={fujikkoLogo} alt="logo" id="partnerLogo" className={style.fujikkoLogo} />
            </div>

            <div className={style.partnerLogoContainer0}>
              <img src={dvgLogo} alt="logo" id="partnerLogo" className={style.dvgLogo} />
              <img src={saninsansoLogo} alt="logo" id="partnerLogo" className={style.saninsansoLogo} />
              <img src={imaiLogo} alt="logo" id="partnerLogo" className={style.imaiLogo} />
            </div>
          </div>

          <div className={style.bottomSpace}></div>
        </div>

        <div id="history" className={style.history}>
          <div className={style.historyTitle}>
            <div className={style.mask}><h1 id="historyTitle">HISTORY</h1></div>
            <div className={style.mask}><h2 id="historyTitle">沿革</h2></div>
          </div>

          <div className={style.historyContents}>
            {props.data.allMicrocmsHistory.edges.map((history, index) => (
              <div className={style.historyContent} key={index}>
                <hr />
                  <div id="historyContent" className={style.historyText}>
                    <div className={style.circle}></div>
                    <p className={style.year}>{history.node.year}</p>
                    <div className={style.content} dangerouslySetInnerHTML={{ __html: history.node.history }}>
                    </div>
                  </div>
              </div>
            )
            )}
          </div>

        </div>

      </body>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query MicrocmsHistoryQuery {
    allMicrocmsHistory {
      edges {
        node {
          year
          history
        }
      }
    }
  }
`

export const Head = () => {
  return (
    <>
      <title>株式会社ERISA</title>
      <meta name="description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
      <meta property="og:image" content={ogp} />
      <meta property="og:title;" content="株式会社ERISA" />
      <meta property="og:site-name;" content="株式会社ERISA" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="株式会社ERISA" />
      <meta name="twitter:description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
    </>
  )
}