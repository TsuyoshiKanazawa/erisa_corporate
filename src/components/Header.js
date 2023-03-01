import React, { useState, useEffect} from "react"
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image" 
import * as style from "../styles/index.module.scss"
import classNames from "classnames";

const Header = () => {
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
                        <li>=</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header