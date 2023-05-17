import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss"
import "../styles/input.css"

import contactTitle from '../images/contactTitle.svg'


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
            { autoAlpha: 0 }, //fromの設定
            {  //toの設定
                autoAlpha: 1,
                duration: 0,
            }
        )
        gsap.fromTo(
            '#contactTitle',
            { y: 100, autoAlpha: 0 }, //fromの設定
            {  //toの設定
                y: 0,
                autoAlpha: 1,
                delay: 0.5,
                duration: 0.5,
            }
        )
        //共通/////////////////////////

    }
    //アニメーション専用/////////////////////////////////////////

    return (
        <Layout>
            <Helmet>
                <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
            </Helmet>
            <body id="body" className={style.body}>
                <div class="gtranslate_wrapper"></div>

                <div id="contactTitle" className={style.contactTitle}>
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
            <meta name="description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
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