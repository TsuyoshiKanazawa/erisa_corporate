import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import { AzureMP } from 'react-azure-mp'
import "../styles/input.css"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import Layout from "../components/layout"
import * as style from "../styles/information.module.scss"

import informationTitle from '../images/informationTitle.svg'
import informationTitleSP from '../images/informationTitleSP.svg'

import ogp from '../images/OGP.jpg'

gsap.registerPlugin(ScrollTrigger);
dayjs.extend(utc);
dayjs.extend(timezone);

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

        //共通/////////////////////////

        mm.add("(min-width: 901px)", () => {

            gsap.fromTo(
                '#informationTitle',
                { y: 100, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.5,
                    duration: 0.5,
                }
            )

            gsap.fromTo(
                '#informationContents',
                { y: 100, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.5,
                    duration: 0.5,
                }
            )
        });


        mm.add("(max-width: 900px)", () => {
            gsap.fromTo(
                '#informationTitle',
                { y: 50, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.5,
                    duration: 0.5,
                }
            )

            gsap.fromTo(
                '#informationContents',
                { y: 50, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.5,
                    duration: 0.5,
                }
            )
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

                <div id="informationTitle" className={style.informationDetailTitle}>
                    <div className={style.titleText}>
                        <h1>お知らせ</h1>
                        <img src={informationTitle} alt="informationTitle" className={style.informationTitle} />
                        <img src={informationTitleSP} alt="informationTitle" className={style.informationTitleSP} />
                    </div>
                </div>

                <div className={style.informationDetailContents}>
                    <div className={style.informationContentsContainer}>
                        <h1 id="informationContents" className={style.date}>{dayjs.utc(data.microcmsInformationDetail.date).add(1, 'd').format('YYYY/MM/DD')}</h1>
                        <div id="informationContents" dangerouslySetInnerHTML={{ __html: data.microcmsInformationDetail.bodyText }} />
                        
                        {data.microcmsInformationDetail.azureswitch &&
                            <AzureMP
                                id="informationContents"
                                className={style.azureMedia}
                                tabIndex="0"
                                options={{ autoplayInView: false }}
                                skin="amp-flush"
                                src={[{ src: data.microcmsInformationDetail.azureurl, type: "application/vnd.ms-sstr+xml" }]}
                            />
                        }
                        <a href="/information" id="informationBack" className={style.informationBack}>
                            <p>戻る</p>
                            <span className={style.playButton}></span>
                        </a>
                    </div>
                </div>
            </body>
        </Layout>
    )
}

export default Index

export const query = graphql`
    query MicrocmsInformationDetailQuery($slug: String!) {
        microcmsInformationDetail(slug: {eq: $slug}) {
            date(formatString: "YYYY/MM/DD")
            slug
            bodyText
            azureurl
            azureswitch
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