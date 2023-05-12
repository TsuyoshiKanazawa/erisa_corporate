import React, { useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as style from "../styles/member.module.scss"

import memberTitle from '../images/memberTitle.svg'
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
                '#memberTitle',
                { y: 100, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                }
            )

            ScrollTrigger.batch('#memberContents', {
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
                '#memberTitle',
                { y: 50, autoAlpha: 0 }, //fromの設定
                {  //toの設定
                    y: 0,
                    autoAlpha: 1,
                }
            )

            ScrollTrigger.batch('#memberContents', {
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

                <div className={style.memberTitle}>
                    <div id="memberTitle" className={style.titleText}>
                        <h1>チーム紹介</h1>
                        <img src={memberTitle} alt="memberTitle" className={style.memberTitleImg} />
                    </div>
                </div>
                
                <div className={style.memberContainer}>
                    {data.allMicrocmsMember.edges.map((member, index) => (
                        <div id="memberContents" className={style.memberContents} key={index}>
                            <img src={member.node.picture.url} id="memberImg" alt="memberImg" className={style.memberImg} />
                            <div className={style.membertext}>
                                <h1>{member.node.director}</h1>
                                <h2>{member.node.name}</h2>
                                <h3 translate="no">{member.node.tlName}</h3>
                                <h4>{member.node.Introduction}</h4>
                            </div>
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
    query MicrocmsMemberQuery {
        allMicrocmsMember(sort: {order: ASC}) {
            edges {
                node {
                    Introduction
                    name
                    picture {
                        url
                    }
                    tlName
                    director
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