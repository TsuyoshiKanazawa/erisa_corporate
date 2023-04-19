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
import aboutCopy from '../images/aboutCopyImg.svg'
import aboutCopySP from '../images/aboutCopyImgSP.svg'
import shimadzuLogo from '../images/shimadzuLogo.png'
import fujikkoLogo from '../images/fujikkoLogo.svg'
import mcsLogo from '../images/mcsLogo.svg'
import dvgLogo from '../images/dvgLogo.svg'
import saninsansoLogo from '../images/saninsansoLogo.png'
import imaiLogo from '../images/imaiLogo.svg'

import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'

gsap.registerPlugin(ScrollTrigger);

const Index = (props) => {

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
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
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
      { y: 100, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: '#detailContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
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
      { y: 100, visibility: "hidden" }, //fromの設定
      {  //toの設定
        y: 0,
        visibility: "visible",
        duration: 1.5,
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
                  <a href="/"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>PRODUCT</p>
                  </a>
                  <a href="/"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>MEMBER</p>
                  </a>
                  <a href="/"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
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
                  <p>©2023 ERISA Co.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="aboutTitle" className={style.aboutTitle}>
          <div className={style.titleText}>
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

                <h2 id="ourMissionText">人生１００年時代の超高齢社会。<br />
                  要介護の原因で上位を占める認知症患者は６００万人を超え、<br />
                  今後も増加が見込まれています。</h2>
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
            <img src={aboutCopy} alt="aboutCopyImg" className={style.aboutCopyImg} />
            <img src={aboutCopySP} alt="aboutCopyImg" className={style.aboutCopyImgSP} />
          </div>
          <hr className={style.bottomLine}></hr>
        </div>

        <div className={style.businessDetails}>
          <div className={style.detailsTitle}>
            <div className={style.mask}><h1 id="detailsTitle1">BUSINESS DETAILS</h1></div>
            <div className={style.mask}><h2 id="detailsTitle1">事業概要</h2></div>
          </div>

          <div className={style.mask}>
            <p id="details">AI×OIを用いた<br />脳画像解析技術の開発・販売事業</p>
          </div>

          <div className={style.detailContents}>
            <div id="detailContents" className={style.content}>
              <h1>01</h1>
              <h2>検査サービス</h2>
              <h3>一般コンシューマ向けに脳ドックのオプションサービスや、
                認知機能簡便チェックアプリを提供
                日本や中国、その他地域で導入施設を拡大中</h3>
            </div>
            <div id="detailContents" className={style.content}>
              <h1>02</h1>
              <h2>診断支援<br />
                ソフトウェア販売</h2>
              <h3>脳の関心領域ごとの萎縮度算定を行うBAADをベースとした、
                医師向けのAIソフトウェアを開発
                うつ、認知症、脳動脈瘤、水頭症、統合失調症などの中枢神経系疾患を、客観的に脳画像から判別することが可能となる</h3>
            </div>
            <div id="detailContents" className={style.content0}>
              <h1>03</h1>
              <h2>AI画像解析<br />
                受託研究</h2>
              <h3>AIを活用したデータ解析受託業務<br />
                デジタルバイオマーカーへの応用を目指す</h3>
            </div>

          </div>

        </div>

        <div className={style.companyProfile}>
          <div className={style.companyContainer}>
            <div className={style.companyTitle}>
              <div className={style.mask}><h1 id="companyTitle">COMPANY<br />PROFILE</h1></div>
              <div className={style.titleMask}><h2 id="companyTitle">会社概要</h2></div>
            </div>


            <div className={style.overview}>
              <div id="companyPic" className={style.mask}>
                <StaticImage src="../images/companyPic.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.companyPic} />
              </div>

              <div id="profile" className={style.profile}>
                <div id="profileContent" className={style.profileContent}>
                  <h1>会社名</h1>
                  <h2>株式会社ERISA<br /><small>Everyplan Research Institute of<br className={style.brSP}></br> Statistics and Analysis</small></h2>
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
                  <h2>河原 八郎</h2>
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
                <h2>■認証番号：303AGBZX00065000</h2>
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
              <img src={fujikkoLogo} alt="logo" id="partnerLogo" className={style.fujikkoLogo} />
              <img src={mcsLogo} alt="logo" id="partnerLogo" className={style.mcsLogo} />
            </div>
            <div className={style.partnerLogoContainerSP}>
              <img src={mcsLogo} alt="logo" id="partnerLogo" className={style.mcsLogo} />
            </div>
            <div className={style.partnerLogoContainer}>
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
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2017年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>会社設立</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>島根県より「ヘルスケアビジネス先進モデル構築支援事業」を受託</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2018年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>第三者割当増資により1.45億円を調達</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>デジタルガレージ社Onlab Bioプログラムに採択</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>島津製作所、メディカル・ケア・サービス、島根大学、ERISAで共同研究契約締結</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>滋賀医科大学よりBAADの独占商用ライセンスを取得</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2019年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>島根大学より脳画像解析技術（認知症将来リスク検査技術）に関する特許権を譲り受け</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>経産省の中国における認知症ケア拠点化、認知症早期発見拠点化の事業化に関する実証調査事業にMCSと共同参画</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>AMEDのフィージビリティ研究事業に協力機関として参画</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2020年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>中国（青島）で開催されたピッチ大会に、日本予選1位企業として参加し、優秀賞を受賞</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>アルツハイマー病の発症時期予測プログラムについて医学専門サイトBrain Communicationsに掲載</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>中国江蘇省南通市の大手医療グループ瑞慈医療集団と認知症リスク検査サービスの提供契約を締結</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>第二種医療機器の製造販売業許可を取得</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2021年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>島根県とCOVID-19対策としてのPCR用検体採取事業を受託</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>中国江蘇省の大手医療グループと認知症リスク検査サービスのトライアル実施契約</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>脳画像解析プログラムBAADの医療機器認証取得</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>日本国内で認知症リスク検査マーケットイン</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2022年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>韓国に合弁会社を設立</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>慶應義塾大学と大うつ病と双極性障害に関する共同研究を開始</p></p>
                </div>
              </div>
            </div>
            <div className={style.historyContent}>
              <hr />
              <div id="historyContent" className={style.historyText}>
                <div className={style.circle}></div>
                <p className={style.year}>2023年</p>
                <div className={style.content}>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>認知機能簡便チェックツール「CADi２」のリリース</p></p>
                  <p className={style.textContainer}><p className={style.point}>・</p><p>認知機能簡便チェックツール「CADi２」のリリース</p></p>
                </div>
              </div>
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
      <title>株式会社ERISA</title>
    </>
  )
}