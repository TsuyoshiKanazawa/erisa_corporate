import React, { useRef, useEffect } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import * as style from "../styles/index.module.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logoColor from '../images/logoColor.svg'
import footerEnd from '../images/footerEnd.svg'
import footerEndSP from '../images/footerEndSP.svg'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    //アニメーション専用/////////////////////////////////////////
    const div = useRef();

    useEffect(() => {
        setAnimation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [div])

    let mm = gsap.matchMedia();

    const setAnimation = () => {
        gsap.fromTo(
            '#footer',
            { visibility: "hidden" }, //fromの設定
            {  //toの設定
                visibility: "visible",
            }
        )
    }

  //アニメーション専用/////////////////////////////////////////
    return (
        <footer id="footer" className={style.footer}>
            <div className={style.footerContainer}>
                <a href="/#body" className={style.logoFooter}>
                    <img src={logoColor} alt="logo" className={style.logo} loading="lazy" />
                </a>

                <div className={style.footerMenu}>
                    <a href="/information">-&emsp;INFORMATION</a>
                    <a href="/recruit">-&emsp;RECRUIT</a>
                    <a href="/about">-&emsp;ABOUT</a>
                    <a href="/contact">-&emsp;CONTACT</a>
                    <a href="/product">-&emsp;PRODUCT</a>
                    <a href="/privacypolicy">-&emsp;PRIVACY POLICY</a>
                    <a href="/member">-&emsp;MEMBER</a>
                </div>

                <p className={style.copyright}>©2023 ERISA Co.,Ltd.</p>
            </div>

            <img src={footerEnd} alt="" className={style.footerEnd} />
            <img src={footerEndSP} alt="" className={style.footerEndSP} />
            <AnchorLink href="#body" className={style.toTop}>to TOP</AnchorLink >
        </footer>
    )
}

export default Footer

