import React, { useState, useEffect, memo } from "react"
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image" 
import * as style from "../styles/index.module.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logoWhite from '../images/logoWhite.svg'
import logoColor from '../images/logoColor.svg'

const Header = (state) => {

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

useEffect(() => {
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

const [active, setActive] = useState(false);

const classToggle = () => {
    setActive(!active)
}

///////////////////////////////////////////


    return (
        <header className={style.headerWrapper}>
            <div className={isHeaderShown ? "index-module--container--defd5" : "index-module--show--051e9"}>
                <div className={style.flexContainer}>
                    <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.erisa.co.jp/">
                        <img src={logoWhite} className={`index-module--logoWhite--2bd0c ${isShow ? "index-module--logoWhite__active--7787c" : ""}`} />
                        <img src={logoColor} className={`index-module--logoColor--f67bf ${isShow ? "index-module--logoColor__active--bad48" : ""}`} />
                    </a>
                    <ul>
                        <a href="https://translate.google.com/translate?sl=ja&tl=en&u=https://salmon-pond-0af8d4c10.2.azurestaticapps.net" className={style.honyaku}>
                            <p>英語</p>
                        </a>
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
                    </ul>
                    <div
                        className={`index-module--menuWrapper--8e435 ${isShow ? "index-module--menuWrapper__active--16a38" : ""}`}
                        onClick={(e) => {
                            closeWithClickOutSideMethod(e, setIsShow);
                        }}
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

                            <ul className={style.menuList}>
                                <AnchorLink href="#about" 
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>認知症リスク検査とは？</li>
                                </AnchorLink>
                                <AnchorLink href="#flow"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>検査の流れ</li>
                                </AnchorLink>
                                <AnchorLink href="#question"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>よくあるご質問</li>
                                </AnchorLink>
                                <AnchorLink href="#introduce"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>導入医療機関</li>
                                </AnchorLink>
                                <a href="https://www.erisa.co.jp/#contact"
                                    target="_blank"
                                    rel="noopener"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>お問い合わせ</li>
                                </a>
                                <a href="https://www.erisa.co.jp/"
                                    target="_blank"
                                    rel="noopener"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}>
                                    <hr /><li>株式会社ERISA</li>
                                </a>
                            </ul>
                            <div className={style.copyright}>
                                <hr />
                                <p>©2023 ERISA Co.</p>
                            </div>
                            <StaticImage src="../images/menuBack.png" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.menuBack} />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        
    )
}

export default memo(Header)