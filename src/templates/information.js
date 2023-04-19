import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react"
import { graphql } from "gatsby"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Layout from "../components/layout"
import * as style from "../styles/information.module.scss"
import { Pagenation } from "../components/pagination"

import informationTitle from '../images/informationTitle.svg'
import informationTitleSP from '../images/informationTitleSP.svg'

import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'

const IndexPage = ({ data, pageContext }) => {
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
      }
    )

    ScrollTrigger.batch('#informationContent', {
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


    //共通/////////////////////////

    mm.add("(min-width: 901px)", () => {


    });


    mm.add("(max-width: 900px)", () => {

    });
  }

    return (
        <Layout>
            <body id="body" className={style.body}>
                <header id="headerWrapper" className={isHeaderShown ? "information-module--container--1d93f" : "information-module--show--360cd"}>
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
                      className={`information-module--menuWrapper--889f6 ${isShow ? "information-module--menuWrapper__active--957ac" : ""}`}
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

                <div className={style.information}>
                    <h1>お知らせ</h1>
                    <img src={informationTitle} alt="informationTitle" className={style.informationTitle} />
                    <img src={informationTitleSP} alt="informationTitle" className={style.informationTitleSP} />

                    <div className={style.informationContentsContainer}>
                        <div className={style.informationContents}>
                            <hr />

                            {data.allMicrocmsInformation.edges.map((information, index) => (
                                <div className={style.informationContent} key={index}>
                                  <div id="informationContent" className={style.informationText}>
                                        <h1>{information.node.date}</h1>
                                        <hr className={style.vertical}></hr>
                                        <div className={style.bodyText} dangerouslySetInnerHTML={{ __html: information.node.bodyText }} />
                                    </div>
                                    <hr />
                                </div>
                                
                            )
                            )}
                        </div>
                        <div className={style.pagenations}>
                          <Pagenation pageContext={pageContext} />
                        </div>
                        <div className={style.space}></div>
                    </div>
                </div>

            </body>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation(limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          bodyText
          date(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`