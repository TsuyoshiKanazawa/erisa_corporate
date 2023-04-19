import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss"
import "../styles/input.css"

import contactTitle from '../images/contactTitle.svg'
import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
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
            }
        )

        //共通/////////////////////////

        mm.add("(min-width: 901px)", () => {

        });


        mm.add("(max-width: 900px)", () => {

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
                <header id="headerWrapper" className={isHeaderShown ? "contact-module--container--6353d" : "contact-module--show--ef6ee"}>
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
                            className={`contact-module--menuWrapper--5421e ${isShow ? "contact-module--menuWrapper__active--99f07" : ""}`}
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

                <div className={style.contactTitle}>
                    <div className={style.titleText}>
                        <h1>お問い合わせ</h1>
                        <img src={contactTitle} alt="contactTitle" className={style.contactTitleImg} />
                    </div>
                </div>

                <div className={style.contactCompletionContainer}>
                    <div className={style.contactCompletion}>

                        <h1>お問い合わせが<br />完了いたしました。</h1>
                        <h2>メールアドレスに<br />確認用メールをお送りしますのでご確認ください。</h2>

                        <a href="/">
                            <p>TOPに戻る</p>
                            <span className={style.playButton}></span>
                        </a>
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