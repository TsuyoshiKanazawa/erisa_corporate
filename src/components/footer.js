import React, { useRef, useEffect } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticImage } from "gatsby-plugin-image"
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

    }
  //アニメーション専用/////////////////////////////////////////
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <AnchorLink href="#top" className={style.logoFooter}>
                    <img src={logoColor} alt="logo" className={style.logo} loading="lazy" />
                </AnchorLink>

                <div className={style.footerMenu}>
                    <a href="/">-&emsp;INFORMATION</a>
                    <a href="/">-&emsp;RECRUIT</a>
                    <a href="/">-&emsp;ABOUT</a>
                    <a href="/">-&emsp;CONTACT</a>
                    <a href="/">-&emsp;PRODUCT</a>
                    <a href="/">-&emsp;PRIVACY POLICY</a>
                    <a href="/">-&emsp;MEMBER</a>
                </div>

                <p className={style.copyright}>©2023 ERISA Co.</p>
            </div>

            <img src={footerEnd} alt="" className={style.footerEnd} />
            <img src={footerEndSP} alt="" className={style.footerEndSP} />
            <AnchorLink href="#top" className={style.toTop}>to TOP</AnchorLink >
        </footer>
    )
}

export default Footer

