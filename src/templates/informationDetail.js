import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import { AzureMP } from 'react-azure-mp'

import Layout from "../components/layout"
import * as style from "../styles/information.module.scss"

import informationTitle from '../images/informationTitle.svg'
import informationTitleSP from '../images/informationTitleSP.svg'

import ogp from '../images/OGP.jpg'

gsap.registerPlugin(ScrollTrigger);

const Index = ({data}) => {

    console.log(data);

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
            { visibility: "hidden" }, //fromの設定
            {  //toの設定
                visibility: "visible",
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

                <div id="informationTitle" className={style.informationDetailTitle}>
                    <div className={style.titleText}>
                        <h1>お知らせ</h1>
                        <img src={informationTitle} alt="informationTitle" className={style.informationTitle} />
                        <img src={informationTitleSP} alt="informationTitle" className={style.informationTitleSP} />
                    </div>
                </div>

                <div className={style.informationDetailContents}>
                    <div className={style.informationContentsContainer}>
                        <div dangerouslySetInnerHTML={{ __html: data.microcmsInformationDetail.bodyText }} />
                        
                        {data.microcmsInformationDetail.azureswitch &&
                            <AzureMP
                                options={{ autoplayInView: false }}
                                skin="amp-flush"
                                src={[{ src: data.microcmsInformationDetail.azureurl, type: "application/vnd.ms-sstr+xml" }]}
                            />
                        }

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
            <meta property="og:title;" content="株式会社ERISA" />
            <meta property="og:site-name;" content="株式会社ERISA" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="株式会社ERISA" />
            <meta name="twitter:description" content="ERISAは、AI×OIを用いた脳画像解析技術の研究開発・販売事業を行っています。" />
        </>
    )
}