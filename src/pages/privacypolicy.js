import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as style from "../styles/privacypolicy.module.scss"
import "../styles/input.css"

import privacypolicyTitle from '../images/privacypolicyTitle.svg'
import privacypolicyTitleSP from '../images/privacypolicyTitleSP.svg'

import ogp from '../images/OGP.jpg'

gsap.registerPlugin(ScrollTrigger);

const Index = ({data}) => {

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
            '#privacypolicyTitle',
            { y: 100, autoAlpha: 0 }, //fromの設定
            {  //toの設定
                y: 0,
                autoAlpha: 1,
                delay: 0.5,
                duration: 0.5,
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
            <body id="body" className={style.body} name='scrollTarget'>
                <div class="gtranslate_wrapper"></div>

                <div id="privacypolicyTitle" className={style.privacypolicyTitle}>
                    <div className={style.titleText}>
                        <h1>プライバシーポリシー</h1>
                        <img src={privacypolicyTitle} alt="privacypolicyTitle" className={style.privacypolicyTitleImg} />
                        <img src={privacypolicyTitleSP} alt="privacypolicyTitle" className={style.privacypolicyTitleImgSP} />
                    </div>
                </div>

                <div className={style.privacypolicyContents}>
                    <div className={style.privacypolicyContentsContainer}>
                        <div dangerouslySetInnerHTML={{ __html: data.microcmsPrivacypolicy.ppText }} />
                    </div>
                </div>
            </body>
        </Layout>
    )
}

export default Index

export const query = graphql`
    query MicrocmsPrivacypolicyQuery {
        microcmsPrivacypolicy {
            ppText
        }
    }
`

export const Head = () => {
    return (
        <>
            <title>株式会社ERISA</title>
            <meta name="description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
            <meta property="og:image" content={ogp} />
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