import React, { useState, useEffect} from "react"
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image" 
import * as style from "../styles/index.module.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = (state) => {

    //ヘッダーが表示・非表示になる
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
    ////ヘッダーが表示・非表示になる


const [isShow, setIsShow] = useState(false);
  const closeWithClickOutSideMethod = (e, setter) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if (e.target === e.currentTarget) {
      //メニューの外側をクリックしたときだけメニューを閉じる
      setter(false);
    document.body.style.overflow = "auto";
    }
  };

    return (
        <header className={style.headerWrapper}>
            <div className={isHeaderShown ? "index-module--container--defd5" : "index-module--show--051e9"}>
                <div className={style.flexContainer}>
                    < Link to="/">
                        < StaticImage src="../images/logo.png" alt=" logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} width={50} />
                    </Link >
                    <ul>
                        < Link to="/">
                            <div className={style.switchButton}>
                                <p>医療関係者の方はこちら</p>
                                <div className={style.playButton}></div>
                            </div>
                        </Link>
                        
                        <button 
                            className={style.hmb} 
                            onClick={() => {
                            setIsShow(!isShow);
                            document.body.style.overflow = "hidden";
                        }}>
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
                                    <p>医療関係者の方はこちら</p>
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
                                <AnchorLink href="#feature"
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
                                <AnchorLink href="#about"
                                    className={style.list}
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        document.body.style.overflow = "auto";
                                    }}> 
                                    <hr /><li>お問い合わせ</li>
                                </AnchorLink>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        
    )
}

export default Header