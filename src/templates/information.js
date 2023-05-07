import React, { useRef, useEffect, useLayoutEffect } from "react"
import { graphql, Link } from "gatsby"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import Layout from "../components/layout"
import * as style from "../styles/information.module.scss"

import informationTitle from '../images/informationTitle.svg'
import informationTitleSP from '../images/informationTitleSP.svg'

import ogp from '../images/OGP.jpg'

dayjs.extend(utc);
dayjs.extend(timezone);

const IndexPage = ({ data, pageContext }) => {

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
    });
  }

  const { currentPage, numPages } = pageContext

  // ページネーションの開始ページと終了ページを計算
  let startPage = currentPage - 2 > 0 ? currentPage - 2 : 1
  let endPage = startPage + 4
  if (endPage > numPages) {
    endPage = numPages
    startPage = endPage - 4 > 0 ? endPage - 4 : 1
  }

  // ページ番号の配列を作成
  const pageNumbers = [...Array(endPage - startPage + 1)].map(
    (_, i) => startPage + i
  )

    return (
        <Layout>
        <Helmet>
          <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
        </Helmet>
            <body id="body" className={style.body}>
            <div class="gtranslate_wrapper"></div>

              <div id="informationTitle" className={style.information}>

                <h1>お知らせ</h1>
                <img src={informationTitle} alt="informationTitle" className={style.informationTitle} />
                <img src={informationTitleSP} alt="informationTitle" className={style.informationTitleSP} />

                <div className={style.informationContentsContainer}>
                  <div className={style.informationContents}>
                    <hr />
                    {data.allMicrocmsInformation.edges.map((information, index) => (
                      <div className={style.informationContent} key={index}>
                        <div id="informationContent" className={style.informationText}>
                            <h1>{dayjs.utc(information.node.date).add(1, 'd').format('YYYY/MM/DD')}</h1>
                            <hr className={style.vertical}></hr>
                            <div className={style.bodyText} dangerouslySetInnerHTML={{ __html: information.node.bodyText }} />
                        </div>
                        <hr />
                      </div>
                    )
                    )}
                  </div>

                  <div className={style.pagenations}>
                    {pageNumbers.map((page) => (
                      <Link
                        key={`pagination-number${page}`}
                        to={page === 1 ? `/information/` : `/information/page/${page}`}
                        style={{
                          textDecoration: 'none',
                          color: page === currentPage ? '#ffffff' : '',
                          background: page === currentPage ? '#7FC0EF' : '',
                          pointerEvents: page === currentPage ? 'none' : 'auto',
                          cursor: page === currentPage ? 'default' : 'pointer',
                        }}
                      >
                        {page}
                      </Link>
                    ))}


                  </div>
                  <div className={style.space}></div>
                </div>

              </div>

            </body>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation(limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          bodyText
          date(formatString: "YYYY/MM/DD")
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