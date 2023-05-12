import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as style from "../styles/product.module.scss"
import "../styles/input.css"

import productTitle from '../images/productTitle.svg'

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



        //共通/////////////////////////

        mm.add("(min-width: 901px)", () => {
            gsap.fromTo(
                '#productTitle',
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
                '#productTitle',
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

                <div className={style.productTitle}>
                    <div id="productTitle" className={style.titleText}>
                        <h1>開発・販売製品</h1>
                        <img src={productTitle} alt="productTitle" className={style.productTitleImg} />
                    </div>
                </div>

                <div className={style.productContents}>
                    {data.allMicrocmsProduct.edges.map((product, index) => (
                        <div id="productContent" className={style.productContent} key={index}>
                            <div className={style.topLine}></div>
                            <div className={style.contentContainer}>
                                <img src={product.node.eyecatch.url} id="productContentImageFlug" alt="productContentImage" className={style.productImage} />
                                <div className={style.productText}>
                                    <div className={style.productTextConteiner}>
                                        <h1 id="productContentSPFlug">{product.node.title}</h1>
                                        <h2 id="productContentSPFlug" dangerouslySetInnerHTML={{ __html: product.node.bodyText }}></h2>
                                    </div>
                                    {product.node.switch1 && 
                                    <a href={product.node.url} target="_blank" rel="noopener noreferrer" id="productContentSPFlug" className={style.productMore}>
                                        <p>製品サイトはこちら</p>
                                        <span className={style.playButton}></span>
                                    </a>
                                    }
                                    {product.node.switch2 &&
                                        <a href={product.node.slug} id="productContentSPFlug" className={style.productMore}>
                                            <p>製品サイトはこちら</p>
                                            <span className={style.playButton}></span>
                                        </a>
                                    }
                                </div>
                            </div>
                            <div className={style.bottomLine}></div>
                        </div>
                    )
                    )}

                </div>
            </body>
        </Layout>
    )
}

export default Index

export const query = graphql`
    query MicrocmsProductQuery {
        allMicrocmsProduct(sort: {createdAt: ASC}) {
            edges {
                node {
                    bodyText
                    slug
                    switch1
                    switch2
                    title
                    url
                    eyecatch {
                        url
                    }
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