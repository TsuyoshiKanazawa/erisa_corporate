import React, { useState, useLayoutEffect, useRef, useEffect, useCallback } from "react"
import * as style from "../styles/header.module.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
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

    const setAnimation = () => {
        gsap.fromTo(
            '#headerWrapper',
            { visibility: "hidden" }, //fromの設定
            {  //toの設定
                visibility: "visible",
            }
        )
    }
//アニメーション専用/////////////////////////////////////////

    return (
        <header id="headerWrapper" className={isHeaderShown ? "header-module--container--621b5" : "header-module--show--e0006"}>
            <div className={style.flexContainer}>
                <a href="/">
                    <img src={logoColor} id="logoColor" className={style.logoColor} alt="logo" />
                </a>
                <div className={style.headerRight}>
                    <a href="/information/" ><p id="headerMenu">INFORMATION</p></a>
                    <a href="/about" ><p id="headerMenu">ABOUT</p></a>
                    <a href="/product" ><p id="headerMenu">PRODUCT</p></a>
                    <a href="/member" ><p id="headerMenu">MEMBER</p></a>
                    <a href="/recruit" ><p id="headerMenu">RECRUIT</p></a>
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
                    className={`header-module--menuWrapper--6f039 ${isShow ? "header-module--menuWrapper__active--1803f" : ""}`}
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
    )
} 

export default Header
