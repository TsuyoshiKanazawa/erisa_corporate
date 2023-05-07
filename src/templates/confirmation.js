import React, { useRef, useEffect, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import * as style from "../styles/confirmation.module.scss"
import ogp from '../images/OGP.jpg'


const IndexPage = ({ data }) => {

  const post = data.microcmsProduct

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

    ScrollTrigger.batch('#informationContent', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          visibility: "hidden",
        },
        {
          y: 0,
          visibility: "visible",
          duration: 0.5,
          start: 'top 80%',
        }
      ),
      once: true
    });


    //共通/////////////////////////

    mm.add("(min-width: 901px)", () => {


    });


    mm.add("(max-width: 900px)", () => {

    });
  }

    return (
      <Layout hideFooter>
        <Helmet>
          <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
        </Helmet>
        <body id="body" className={style.body}>
          <div class="gtranslate_wrapper"></div>

          <div className={style.confirmation}>
            <h1>遷移先のページは医療関係者に対する情報提供を目的としているため、<br />
                事前の確認をさせていただいております。</h1>
            <h2>あなたは医療関係者ですか？</h2>

            <div className={style.buttonContainer}>
              <div className={style.noButtonConteiner}>
                <a onClick={() => window.history.back()} id="productContentSPFlug" className={style.noButton}>
                  <p>いいえ、違います</p>
                  <span className={style.playButton}></span>
                </a>
                <h1>直前のページへ遷移します</h1>
              </div>
              
              <div className={style.yesButtonConteiner}>
                <a href={post.url} target="_blank" rel="noopener noreferrer" id="productContentSPFlug" className={style.yesButton}>
                  <p>はい、医療関係者です</p>
                  <span className={style.playButton}></span>
                </a>
                <h1>製品ページへ遷移します</h1>
              </div>
            </div>
          </div>

        </body>
      </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query MicrocmsProductQuery($slug: String!) {
    microcmsProduct(slug: {eq: $slug}) {
      slug
      url
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