import React, { useState, useLayoutEffect, memo } from "react"
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image" 
import * as style from "../styles/index.module.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logoWhite from '../images/logoWhite.svg'
import logoColor from '../images/logoColor.svg'

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

//ハンバーガーメニューの開閉/////////////////
const [isShow, setIsShow] = useState(false);
  const closeWithClickOutSideMethod = (e, setter) => {
    if (e.target === e.currentTarget) {//メニュー外側をクリックしたら
      setter(false);//メニューを閉じる
      document.body.style.overflow = "auto"; //スクロール禁止解除
    }
  };

///////////////////////////////////////////

    return (
        <header id="body" className={style.headerWrapper}>
            <div className={isHeaderShown ? "index-module--container--defd5" : "index-module--show--051e9"}>
                <div className={style.flexContainer}>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.erisa.co.jp/">
                        <img src={logoWhite} className={`index-module--logoWhite--2bd0c ${isShow ? "index-module--logoWhite__active--7787c" : ""}`} alt="logo" />
                        <img src={logoColor} className={`index-module--logoColor--f67bf ${isShow ? "index-module--logoColor__active--bad48" : ""}`} alt="logo" />
                    </a>
                    <div className={style.headerRight}>
                        <div className={style.switchButton}>
                            < Link to="https://www.erisa.co.jp/">
                                <p>医療関係者の方はこちら</p>
                            </Link>
                            <div className={style.playButton}></div>
                        </div>

                        <button 
                            className={style.hmb} 
                            onClick={() => {
                                setIsShow(!isShow);
                                document.body.style.overflow = "hidden"; //スクロール禁止
                            }}
                        >
                            <StaticImage src="../images/hamberger.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.hamberger} />
                        </button>
                    </div>
                    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                        className={`index-module--menuWrapper--8e435 ${isShow ? "index-module--menuWrapper__active--16a38" : ""}`}
                        onClick={(e) => {
                            closeWithClickOutSideMethod(e, setIsShow);
                        }}
                        style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
                    >
                        <div className={style.menu}>
                            <div className={style.menuTop}>
                                
                                <div className={style.menuSwitchButton} >
                                    < Link to="/">
                                        <p>医療関係者の方はこちら</p>
                                    </Link>
                                    <div className={style.playButton}></div>
                                </div>
                                
                                <button 
                                    className={style.close}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}>
                                </button>
                            </div>

                            <div className={style.menuList}>
                                <AnchorLink href="#about" 
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><p>認知症リスク検査とは？</p>
                                </AnchorLink>
                                <AnchorLink href="#flow"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><p>検査の流れ</p>
                                </AnchorLink>
                                <AnchorLink href="#question"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><p>よくあるご質問</p>
                                </AnchorLink>
                                <AnchorLink href="#introduce"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><p>導入医療機関</p>
                                </AnchorLink>
                                <a href="https://www.erisa.co.jp/#contact"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><p>お問い合わせ</p>
                                </a>
                                <a href="https://www.erisa.co.jp/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}>
                                    <hr /><p>株式会社ERISA</p>
                                </a>
                            </div>
                            <div className={style.copyright}>
                                <hr />
                                <p>©2023 ERISA Co.</p>
                            </div>
                            <StaticImage src="../images/menuBack.png" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.menuBack} alt="background" />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        
    )
}

export default memo(Header)