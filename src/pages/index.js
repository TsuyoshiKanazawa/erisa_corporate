import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql, Link } from "gatsby"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import KVTitle from '../images/KVTitle.svg'
import KVTitleSp from '../images/KVTitleSp.svg'
import KVText from '../images/KVTextPC.svg'
import KVTextSp from '../images/KVTextSp.svg'
import ourMission from '../images/ourMission.jpg'

import logoWhite from '../images/logoWhite.svg'
import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'
import ogp from '../images/OGP.jpg'

dayjs.extend(utc);
dayjs.extend(timezone);
gsap.registerPlugin(ScrollTrigger);

export const Index = (props) => {

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
      '#headerWrapper',
      { backgroundColor: "transparent" }, //fromの設定
      {  //toの設定
        backgroundColor: "white",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#headerMenu',
      { textShadow: "none" }, //fromの設定
      {  //toの設定
        textShadow: "",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#body',
      { autoAlpha: 0 }, //fromの設定
      {  //toの設定
        autoAlpha: 1,
        duration: 0,
      }
    )
    
    gsap.fromTo(
      '#headerWrapper',
      { visibility: "hidden" }, //fromの設定
      {  //toの設定
        visibility: "visible",
      }
    )

    gsap.fromTo(
      '#logoWhite',
      { display: "block" }, //fromの設定
      {  //toの設定
        display: "none",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#logoColor',
      { display: "none" }, //fromの設定
      {  //toの設定
        display: "block",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )
  //共通/////////////////////////

  mm.add("(min-width: 901px)", () => {

//KV/////////////////////////
  gsap.fromTo(
    '#lineMask',
    { width: 0 }, //fromの設定
    {  //toの設定
      width: "100%",
      duration: 0.85,
      delay: 0.5,
      stagger: {
        each: 0.3,
      }
    },
  )

  gsap.fromTo(
    '#KVTitleMask',
    { width: 0 }, //fromの設定
    {  //toの設定
      width: "60vw",
      duration: 0.85,
      delay: 1,
    }
  )

  gsap.fromTo(
    '#KVTextMask',
    { width: 0 }, //fromの設定
    {  //toの設定
      width: "75vw",
      duration: 1.14,
      delay: 1,
    }
  )

  gsap.fromTo(
    '#kvBlockUp',
    { height: 0 }, //fromの設定
    {  //toの設定
      height: "300px",
      duration: 0.57,
      delay: 1,
    }
  )

  gsap.fromTo(
    '#kvBlockbottom0',
    { height: 0 }, //fromの設定
    {  //toの設定
      height: "100%",
      duration: 0.57,
      delay: 1,
    }
  )

  gsap.fromTo(
    '#kvBlockbottom1',
    { height: 0 }, //fromの設定
    {  //toの設定
      height: "100%",
      duration: 0.57,
      delay: 1.5,
    }
  )
//KV/////////////////////////
//information////////////////
  gsap.fromTo(
    '#informationTitle',
    { y: 120 }, //fromの設定
    {  //toの設定
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#informationTitle',
        start: 'top 80%',
      },
    }
  )

  gsap.fromTo(
    '#informationContent',
    { y: 70, autoAlpha: 0 }, //fromの設定
    {  //toの設定
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#informationContent',
        start: 'top 80%',
      },
    }
  )

//information////////////////
//ourmission////////////////
  gsap.fromTo(
    '#ourMissionImageMask',
    { width: 0 }, //fromの設定
    {  //toの設定
      width: "50vw",
      duration: 0.5,
      scrollTrigger: {
        trigger: '#ourMissionImageMask',
        start: 'top 80%',
      },
    }
  )

  gsap.fromTo(
    '#ourMissionText',
    { autoAlpha: 0, y: 50 }, //fromの設定
    {  //toの設定
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: '#ourMissionText',
        start: 'top 70%',
      },
      stagger: {
        each: 0.3,
      }
    }
  )

//ourmission////////////////
//product///////////////////
  gsap.fromTo(
    '#productTitle',
    { y: 120 }, //fromの設定
    {  //toの設定
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#productTitle',
        start: 'top 90%',
      },
    }
  )

  ScrollTrigger.batch('#productContent', {
    onEnter: batch => gsap.fromTo(batch,
      {
        y: 100,
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

//product///////////////////
//details///////////////////
  gsap.fromTo(
    '#detailTitle1',
    { y: 200, autoAlpha: 1 }, //fromの設定
    {  //toの設定
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#detailTitle1',
        start: 'top 80%',
      },
    }
  )
  gsap.fromTo(
    '#detailTitle2',
    { y: 150, autoAlpha: 1 }, //fromの設定
    {  //toの設定
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#detailTitle1',
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

  });


  mm.add("(max-width: 900px)", () => {

    gsap.fromTo(
      '#hamberger',
      { filter: 'brightness(1)' }, //fromの設定
      {  //toの設定
        filter: 'brightness(0)',
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )
    gsap.fromTo(
      '#lineMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.85,
        delay: 0.5,
        stagger: {
          each: 0.5,
        }
      }
    )
    gsap.fromTo(
      '#lineMaskSP',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1,
        delay: 1.2,
      }
    )

    gsap.fromTo(
      '#KVTitleMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "auto",
        duration: 0.57,
        delay: 1.5,
      }
    )

    gsap.fromTo(
      '#KVTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "95vw",
        duration: 0.57,
        delay: 1.5,
      }
    )

    gsap.fromTo(
      '#kvBlockUp',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: "85px",
        duration: 0.28,
        delay: 1,
      }
    )

    gsap.fromTo(
      '#kvBlockbottom0',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: "100%",
        duration: 0.85,
        delay: 1,
      }
    )

    gsap.fromTo(
      '#kvBlockbottom1',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: "100%",
        duration: 0.85,
        delay: 1.5,
      }
    )
    //information////////////////
    gsap.fromTo(
      '#informationTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#informationTitle',
          start: 'top 80%',
        },
      }
    )
    ScrollTrigger.batch('#informationContent', {
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
    //information////////////////
    //ourmission////////////////
    gsap.fromTo(
      '#ourMissionImageSpMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#ourMissionImageSpMask',
          start: 'top 70%',
        },
      }
    )
    ScrollTrigger.batch('#ourMissionText', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          start: 'top 70%',
        }
      ),
      once: true
    });
    //ourmission////////////////
    //product///////////////////
    gsap.fromTo(
      '#productTitle',
      { y: 70, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#productTitle',
          start: 'top 80%',
        },
      }
    )
    ScrollTrigger.batch('#productContent', {
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
    ScrollTrigger.batch('#productContentSPFlug', {
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
      '#productMore',
      { y: 50, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#productMore',
          start: 'top 80%',
        },
      }
    )
    //product///////////////////
    //details///////////////////
    gsap.fromTo(
      '#detailTitle1',
      { y: 150, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 100%',
        },
      }
    )
    gsap.fromTo(
      '#detailTitle2',
      { y: 150, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 100%',
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

    //details///////////////////
  });

  }


  //アニメーション専用/////////////////////////////////////////
  return (
    <Layout hideHeader>
      <Helmet>
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
      </Helmet>

      <body id="body" className={style.body}>
        <div class="gtranslate_wrapper"></div>

        <header id="headerWrapper" className={isHeaderShown ? "index-module--container--defd5" : "index-module--show--051e9"}>
          <div className={style.flexContainer}>
            <a href="#top">
              <img src={logoColor} id="logoColor" className={style.logoColor} alt="logo" />
              <img src={logoWhite} id="logoWhite" className={style.logoWhite} alt="logo" />
            </a>
            <div className={style.headerRight}>
              <a href="/information/" ><p id="headerMenu">INFORMATION</p></a>
              <a href="/about" ><p id="headerMenu">ABOUT</p></a>
              <a href="/product" ><p id="headerMenu">PRODUCT</p></a>
              <a href="/member"><p id="headerMenu">MEMBER</p></a>
              <a href="/recruit"><p id="headerMenu">RECRUIT</p></a>
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
              className={`index-module--menuWrapper--8e435 ${isShow ? "index-module--menuWrapper__active--16a38" : ""}`}
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
                  <a href="/product"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>PRODUCT</p>
                  </a>
                  <a href="/member"
                    className={style.list}
                    onClick={() => {
                      setIsShow(!isShow);
                      scrollLockLift();
                    }}>
                    <p>MEMBER</p>
                  </a>
                  <a href="/recruit"
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
                  <p>©2023 ERISA Co.,Ltd.</p>
                </div>


              </div>
            </div>
          </div>
        </header>

        <div id="top" className={style.hero}>
          <div id="lineMask" className={style.lineMask}><div className={style.line1}></div></div>

          <div className={style.kvUp}>
            <div id="KVTitleMask" className={style.KVTitleMask}>
              <img src={KVTitle} alt="KVTitle" className={style.KVTitle} />
              <img src={KVTitleSp} alt="KVTitle" className={style.KVTitleSp} />
            </div>
            <div className={style.kvBlockUpDamy}></div>

            <div id="kvBlockUp" className={style.mask}>
              <div className={style.kvBlockUp} >
                <div className={style.kvBlockUp0} ></div>
                <div className={style.kvBlockUp1} ></div>
              </div>
            </div>
          </div>

          <div id="lineMask" className={style.lineMask}><div className={style.line2}></div></div>

          <div className={style.kvBottom}>

            <div id="kvBlockbottom0" className={style.kvBlockbottom0Mask}>
              <div className={style.kvBlockbottom0} ></div>
            </div>
            <div className={style.kvBlockbottomDamy} ></div>

            <div id="lineMaskSP" className={style.lineMaskSP}><div className={style.centerSP} ></div></div>
            
            <div id="kvBlockbottom1" className={style.kvBlockbottom1Mask}>
              <div className={style.kvBlockbottom1} >
                <div className={style.center}></div>
                <div className={style.up}></div>
                <div className={style.bottom}></div>
              </div>
            </div>

          </div>

          <div id="lineMask" className={style.lineMask}><div className={style.line3}></div></div>
          
          <div id="KVTextMask" className={style.KVTextMask}>
            <img src={KVText} alt="KVText" className={style.KVText} />
            <img src={KVTextSp} alt="KVText" className={style.KVTextSp} />
          </div>
        </div>

        <div id="information" className={style.information}>
          <div className={style.informationTitle} >
            <h1 id="informationTitle">INFORMATION</h1>
            <a href="/information" className={style.informationMore}>
              <p>VIEW MORE</p>
              <span className={style.playButton}></span>
            </a>
          </div>
          
          <div className={style.informationContents}>
            <hr />

            {props.data.allMicrocmsInformation.edges.map((information, index) => (
              <div className={style.informationContent} key={index}>
                <div id="informationContent" className={style.informationText}>
                  <h1>{dayjs.utc(information.node.date).add(1, 'd').format('YYYY/MM/DD')}</h1>
                  <hr className={style.vertical}></hr>
                  <div className={style.bodyText} dangerouslySetInnerHTML={{ __html: information.node.bodyText }} />
                </div>
                <hr />
              </div>
            )
            )}

          </div>
        </div>

        <div id="ourMissionImageSpMask" className={style.ourMissionImageSpMask}>
          <StaticImage src="../images/ourMissionSP.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.ourMissionImageSp} />
        </div>

        <div id="ourMission" className={style.ourMission}>
          <div id="ourMissionImageMask" className={style.ourMissionImageMask}>
            <img src={ourMission} alt="profile" className={style.ourMissionImage}/>
          </div>
          
          <div id="ourMissionTexts" className={style.ourMissionText}>
            <h1 id="ourMissionText">脳を知り、<br />
              あなたらしさを<br />
              支える。</h1>
            <p id="ourMissionText">人生１００年時代の現代社会。<br />
              脳や神経、それに由来する疾患における脳の構造は人類未到の<br />
              超高齢化社会でますます多様化し、<br />
              その疾患人口は今後も増加が見込まれています。</p>
            <p id="ourMissionText">重要なのは脳の状態を把握して、<br />
              いかに病気を予知・予防するかということ。<br />
              しかし、複雑な脳の状態を安全かつ正確に把握することは<br />
              非常に困難とされています。</p>
            <p id="ourMissionText">私たちERISAは、<br />
              AI(ArtificialIntelligence)とOI(OpenInnovation)によって、<br />
              「脳を知る」ために必要なソリューション開発を担い、<br />
              すべての人々の「あなたらしさ」を支える企業として、<br />
              安心できる社会づくりを目指します。</p>
          </div>
        </div>

        <div id="product" className={style.product}>

          <div className={style.productContainer}>
            <div className={style.productTitle}>
              <h1 id="productTitle">PRODUCT<br /><small>開発・販売製品</small></h1>
            </div>

            <div className={style.productContentsTop}>
              {props.data.allMicrocmsProduct.edges.map((product, index) => (
                <div id="productContent" className={style.productContent} key={index}>
                  <div className={style.topLine}></div>
                  <div className={style.contentContainer}>
                    <img src={product.node.eyecatch.url} id="productContentImageFlug" alt="productContentImage" className={style.productImage} />
                    <div className={style.productText}>
                      <div className={style.productTextConteiner}>
                        <h1 id="productContentSPFlug">{product.node.title}</h1>
                        <h2 id="productContentSPFlug" dangerouslySetInnerHTML={{ __html: product.node.bodyText }}></h2>
                      </div>
                      {product.node.switch1 &&
                        <a href={product.node.url} target="_blank" rel="noopener noreferrer" id="productContentSPFlug" className={style.productMore}>
                          <p>製品サイトはこちら</p>
                          <span className={style.playButton}></span>
                        </a>
                      }
                      {product.node.switch2 &&
                        <a href={"/product/" + product.node.slug} id="productContentSPFlug" className={style.productMore}>
                          <p>製品サイトはこちら</p>
                          <span className={style.playButton}></span>
                        </a>
                      }
                    </div>
                  </div>
                  <div className={style.bottomLine}></div>
                </div>
              )
              )}
            </div>
            <a href="/product" id="productMore" className={style.productMore1}>
              <p>VIEW MORE</p>
              <span className={style.playButton}></span>
            </a>
          </div>
        </div>

        <div id="details" className={style.details}>
          <div className={style.detailTitle}>
            <h1 id="detailTitle1">BUSINESS<br />DETAILS</h1>
            <h2 id="detailTitle2">AI×OIを用いた<br />脳画像解析技術の研究開発・販売事業</h2>
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

        <div id="links" className={style.links}>
          <a href="/about" className={style.link}>
            <h1>会社概要</h1>
          </a>
          <a href="/recruit" className={style.link}>
            <h1>採用情報</h1>
          </a>
          <a href="/contact" className={style.link}>
            <h1>お問い合わせ</h1>
          </a>
        </div>

      </body>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query MicrocmsInformationQuery {
    allMicrocmsInformation(skip: 0, limit: 3) {
      edges {
        node {
          bodyText
          date(formatString: "YYYY/MM/DD")
        }
      }
    }
    allMicrocmsProduct(sort: {createdAt: ASC}, limit: 3) {
        edges {
            node {
                bodyText
                slug
                switch1
                switch2
                title
                url
                eyecatch {
                    url
                }
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
      <meta property="og:title;" content="株式会社ERISA｜脳を知り、あなたらしさを支える。" />
      <meta property="og:site-name;" content="株式会社ERISA｜脳を知り、あなたらしさを支える。" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="株式会社ERISA｜脳を知り、あなたらしさを支える。" />
      <meta name="twitter:description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
    </>
  )
}