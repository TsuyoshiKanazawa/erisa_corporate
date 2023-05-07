import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import Layout from "../components/layout"
import * as style from "../styles/recruit.module.scss"

import recruitTitle from '../images/recruitTitle.svg'
import ogp from '../images/OGP.jpg'

gsap.registerPlugin(ScrollTrigger);

const Index = ({data}) => {

    console.log(data)

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

        //共通/////////////////////////

        mm.add("(min-width: 901px)", () => {
            gsap.fromTo(
                '#recruitTitle',
                { y: 100, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                }
            )

            ScrollTrigger.batch('#productContent', {
                onEnter: batch => gsap.fromTo(batch,
                    {
                        y: 100,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.5,
                        start: 'top 80%',
                    }
                ),
                once: true
            });
        });


        mm.add("(max-width: 900px)", () => {
            gsap.fromTo(
                '#recruitTitle',
                { y: 50, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                }
            )

            ScrollTrigger.batch('#productContent', {
                onEnter: batch => gsap.fromTo(batch,
                    {
                        y: 50,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.5,
                        start: 'top 80%',
                    }
                ),
                once: true
            });

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


                <div className={style.recruitTitle}>
                    <div id="recruitTitle" className={style.titleText}>
                        <h1>採用情報</h1>
                        <img src={recruitTitle} alt="recruitTitle" className={style.recruitTitleImg} />
                    </div>
                </div>
                
                <div className={style.recruitContainer}>
                    <Accordion allowMultipleExpanded={true} allowZeroExpanded >
                        {data.allMicrocmsRecruit.edges.map((recruit, index) => (
                            <AccordionItem defaultCollapsed={true} className={style.accordionItem} key={index}>

                                <AccordionItemButton className={style.occupation} >
                                    <p>{recruit.node.occupation}</p><span></span>
                                </AccordionItemButton>

                                <AccordionItemPanel className={style.overview} >
                                    {recruit.node.bodyText.map((bodyText, index) => (
                                        <div className={style.bodyText} key={index}>
                                            <h1>{bodyText.item}</h1>
                                            <h2 dangerouslySetInnerHTML={{ __html: bodyText.overview }} />
                                        </div>
                                    ))}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                        )}

                    </Accordion>
                    <div className={style.bottomLine}></div>
                </div>


            </body>
        </Layout>
    )
}

export default Index

export const query = graphql`
    query MicrocmsRecruitQuery {
        allMicrocmsRecruit {
            edges {
                node {
                    id
                    bodyText {
                        item
                        overview
                    }
                    occupation
                }
            }
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