import React, { useRef, useEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import kvBlock1 from '../images/kvBlock1.svg'
import kvBlock2 from '../images/kvBlock2.svg'
import kvBlock3 from '../images/kvBlock3.svg'
import kvBlock1SP from '../images/kvBlock1SP.svg'
import kvBlock2SP from '../images/kvBlock2SP.svg'
import kvBlock3SP from '../images/kvBlock3SP.svg'

import KVTitle from '../images/KVTitle.svg'
import KVTitleSp from '../images/KVTitleSp.svg'
import KVText from '../images/KVTextPC.svg'
import KVTextSp from '../images/KVTextSp.svg'

gsap.registerPlugin(ScrollTrigger);


export const Index = () => {

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
      '#headerWrapper',
      { backgroundColor: "transparent", borderBottom: "none" }, //fromの設定
      {  //toの設定
        backgroundColor: "white",
        borderBottom: "1px solid #000",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#headerMenu',
      { textShadow: "none" }, //fromの設定
      {  //toの設定
        textShadow: "",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#top',
      { visibility: "hidden" }, //fromの設定
      {  //toの設定
        visibility: "visible",
      }
    )

    gsap.fromTo(
      '#logoWhite',
      { display: "block" }, //fromの設定
      {  //toの設定
        display: "none",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )

    gsap.fromTo(
      '#logoColor',
      { display: "none" }, //fromの設定
      {  //toの設定
        display: "block",
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )
  //共通/////////////////////////

    mm.add("(min-width: 901px)", () => {

  //KV/////////////////////////
    gsap.fromTo(
      '#lineMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 2,
        delay: 0.6,
      }
    )

    gsap.fromTo(
      '#KVTitleMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "60vw",
        duration: 1.5,
        delay: 1,
      }
    )

    gsap.fromTo(
      '#KVTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "70vw",
        duration: 1.5,
        delay: 1.5,
      }
    )
  //KV/////////////////////////
  //information////////////////
    gsap.fromTo(
      '#informationTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#informationTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#informationContent',
      { y: 70, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#informationContent',
          start: 'top 80%',
        },
      }
    )

  //information////////////////
  //ourmission////////////////
    gsap.fromTo(
      '#ourMissionImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: 720,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#ourMissionImageMask',
          start: 'top 80%',
        },
      }
    )
    gsap.fromTo(
      '#ourMissionText',
      { autoAlpha: 0, y: 50 }, //fromの設定
      {  //toの設定
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#ourMissionText',
          start: 'top 70%',
        },
        stagger: {
          each: 0.3,
        }
      }
    )


  //ourmission////////////////
  //product///////////////////
    gsap.fromTo(
      '#productTitle',
      { y: 70 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#productTitle',
          start: 'top 80%',
        },
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

  //product///////////////////
  //details///////////////////
    gsap.fromTo(
      '#detailTitle1',
      { y: 150, autoAlpha: 1 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 80%',
        },
      }
    )
    gsap.fromTo(
      '#detailTitle2',
      { y: 150, autoAlpha: 1 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 80%',
        },
      }
    )
    gsap.fromTo(
      '#detailContent',
      { y: 150, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailContent',
          start: 'top 80%',
        },
        stagger: {
          each: 0.3,
        }
      }
    )
  //details///////////////////


    });


  mm.add("(max-width: 900px)", () => {

    gsap.fromTo(
      '#hamberger',
      { filter: 'brightness(1)' }, //fromの設定
      {  //toの設定
        filter: 'brightness(0)',
        duration: 0.3,
        scrollTrigger: {
          trigger: '#top',
          start: 'bottom 0%',
          end: 'bottom 0%',
          toggleActions: 'restart none none reset',
        },
      }
    )
    gsap.fromTo(
      '#lineMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 2,
        delay: 0.6,
      }
    )

    gsap.fromTo(
      '#KVTitleMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "auto",
        duration: 1,
        delay: 1,
      }
    )

    gsap.fromTo(
      '#KVTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "90vw",
        duration: 1,
        delay: 1.5,
      }
    )
    //information////////////////
    gsap.fromTo(
      '#informationTitle',
      { y: 50, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#informationTitle',
          start: 'top 80%',
        },
      }
    )
    ScrollTrigger.batch('#informationContent', {
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
    //information////////////////
    //ourmission////////////////
    gsap.fromTo(
      '#ourMissionImageSpMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#ourMissionImageSpMask',
          start: 'top 70%',
        },
      }
    )
    ScrollTrigger.batch('#ourMissionText', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          start: 'top 70%',
        }
      ),
      once: true
    });
    //ourmission////////////////
    //product///////////////////
    gsap.fromTo(
      '#productTitle',
      { y: 70 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#productTitle',
          start: 'top 80%',
        },
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
    ScrollTrigger.batch('#productContentSPFlug', {
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
    gsap.fromTo(
      '#productMore',
      { y: 50, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#productMore',
          start: 'top 80%',
        },
      }
    )
    //product///////////////////
    //details///////////////////
    gsap.fromTo(
      '#detailTitle1',
      { y: 150, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 100%',
        },
      }
    )
    gsap.fromTo(
      '#detailTitle2',
      { y: 150, autoAlpha: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#detailTitle1',
          start: 'top 100%',
        },
      }
    )

    ScrollTrigger.batch('#detailContent', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          start: 'top 70%',
        }
      ),
      once: true
    });
    //details///////////////////
  });

  }
  //アニメーション専用/////////////////////////////////////////
  return (
    <Layout>
      <body id="body" className={style.body}>

        <div id="top" className={style.hero}>
          <div id="lineMask" className={style.lineMask}><div className={style.line1}></div></div>

          <div className={style.kvUp}>
            <div id="KVTitleMask" className={style.KVTitleMask}>
              <img src={KVTitle} alt="KVTitle" className={style.KVTitle} />
              <img src={KVTitleSp} alt="KVTitle" className={style.KVTitleSp} />
            </div>
            <img src={kvBlock1} alt="line" className={style.kvBlock1} />
            <img src={kvBlock1SP} alt="line" className={style.kvBlock1SP} />
          </div>


          <div id="lineMask" className={style.lineMask}><div className={style.line2}></div></div>

          <div className={style.kvBottom}>
            <img src={kvBlock2} alt="line" className={style.kvBlock2}/>
            <img src={kvBlock2SP} alt="line" className={style.kvBlock2SP}/>
            <div className={style.kvBottomLineSP}></div>
            <img src={kvBlock3} alt="line" className={style.kvBlock3}/>
            <img src={kvBlock3SP} alt="line" className={style.kvBlock3SP}/>
          </div>

          <div id="lineMask" className={style.lineMask}><div className={style.line3}></div></div>

          <div id="KVTextMask" className={style.KVTextMask}>
            <img src={KVText} alt="KVText" className={style.KVText} />
            <img src={KVTextSp} alt="KVText" className={style.KVTextSp} />
          </div>
        </div>

        <div id="information" className={style.information}>
          <div className={style.informationTitle} >
            <h1 id="informationTitle">INFORMATION</h1>
            <a href="/" className={style.informationMore}>
              <p>VIEW MORE</p>
              <span className={style.playButton}></span>
            </a>
          </div>
          
          <div className={style.informationContents}>
            <hr id="informationContent" />

            <div id="informationContent" className={style.informationContent}>
              <div className={style.informationText}>
                <h1>2022/02/10</h1>
                <hr className={style.vertical}></hr>
                <h2>認知症に立ち向かうしまねっと　NEWS610 - NHK　2021.10.14 <br />
                  <a href="/">Youtube動画へ遷移</a></h2>
              </div>
              <hr />
            </div>
            <div id="informationContent" className={style.informationContent}>
              <div className={style.informationText}>
                <h1>2022/02/10</h1>
                <hr className={style.vertical}></hr>
                <h2>島根県の支援のもと、島根大学医学部、滋賀医科大学で開発されたAI による認知症の将来リスク判別プログラム全国初の実用化、認知症リスク検査がスタート－公益財団法人ヘルスサイエンスセンター島根と業務委託契約を締結<br />
                  <a href="/">記事へ遷移</a></h2>
              </div>
              <hr />
            </div>
            <div id="informationContent" className={style.informationContent}>
              <div className={style.informationText}>
                <h1>2022/02/10</h1>
                <hr className={style.vertical}></hr>
                <h2>脳画像解析プログラム BAAD について島根県初となる プログラム医療機器認証を取得、販売開始<br />
                  <a href="/">記事へ遷移</a></h2>
              </div>
              <hr />
            </div>


          </div>
        </div>

        <div id="ourMissionImageSpMask" className={style.ourMissionImageSpMask}>
          <StaticImage src="../images/ourMissionSP.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.ourMissionImageSp} />
        </div>

        <div id="ourMission" className={style.ourMission}>
          <div id="ourMissionImageMask" className={style.ourMissionImageMask}>
            <StaticImage src="../images/ourMission.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.ourMissionImage} />
          </div>
          
          <div id="ourMissionTexts" className={style.ourMissionText}>
            <h1 id="ourMissionText">脳を知り、<br />
              あなたらしさを<br />
              支える。</h1>
            <p id="ourMissionText">人生１００年時代の超高齢社会。<br />
              要介護の原因で上位を占める認知症患者は６００万人を超え、<br />
              今後も増加が見込まれています。</p>
            <p id="ourMissionText">重要なのは脳の状態を把握して、<br />
              いかに病気を予知・予防するかということ。<br />
              しかし、複雑な脳の状態を安全かつ正確に把握することは<br />
              非常に困難とされています。</p>
            <p id="ourMissionText">私たちERISAは、<br />
              AI(ArtificialIntelligence)とOI(OpenInnovation)によって、<br />
              「脳を知る」ために必要なソリューション開発を担い、<br />
              すべての人々の「あなたらしさ」を支える企業として、<br />
              安心できる社会づくりを目指します。</p>
          </div>
        </div>

        <div id="product" className={style.product}>

          <div className={style.productContainer}>
            <div className={style.productTitle}>
              <h1 id="productTitle">PRODUCT<br /><small>開発・販売製品</small></h1>
            </div>

            <div className={style.productContents}>
              <hr />
              <div id="productContent" className={style.productContent}>
                <StaticImage src="../images/product1.jpg" id="productContentImageFlug" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.productImage1} />
                <div className={style.productText}>
                  <h1 id="productContentSPFlug">認知症リスク検査</h1>
                  <h2 id="productContentSPFlug">認知症リスク検査は、島根大学医学部、滋賀医科大学、株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、脳の状態から3年後の認知症リスクを検査します。<br />
                    脳の一部だけではなく、脳全体を膨大なデータと比較することで、高い精度を実現。将来を見据えた認知症予防の検討材料として、受診者様のライフスタイル見直しに貢献します。</h2>

                  <a href="/" id="productContentSPFlug" className={style.productMore}>
                    <p>製品サイトはこちら</p>
                    <span className={style.playButton}></span>
                  </a>
                </div>
              </div>
              <hr />
              <div id="productContent" className={style.productContent}>
                <StaticImage src="../images/product2.jpg" id="productContentImageFlug" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.productImage1SP} />
                <div className={style.productText0}>
                  <h1 id="productContentSPFlug">脳画像解析プログラムBAAD</h1>
                  <h2 id="productContentSPFlug"><b>認証番号：303AGBZX00065000脳画像解析プログラム</b><br />
                    BAAD（バード）は弊社が国立大学法人滋賀医科大学と共同開発したプログラムです。脳MRI画像を用いて、脳全体の萎縮度合いを視覚的・数値的に表現することにより、客観的な疾病診断を臨床医療現場へ普及させ、診断の迅速化や精度向上に資すると共に 、臨床医療現場でのMRI画像診断に関する負担軽減を目的としています。プログラム上の画面操作で、脳MRI画像を読み込み、画像処理や統計処理を行います。ROIごとの体積（ml）、萎縮率（%）、Z値の計算を脳全体に対して実施します。</h2>

                  <a href="/" id="productContentSPFlug" className={style.productMore0}>
                    <p>製品サイトはこちら</p>
                    <span className={style.playButton}></span>
                  </a>
                </div>
                <StaticImage src="../images/product2.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.productImage1PC} />
              </div>
              <hr />
              <div id="productContent" className={style.productContent}>
                <StaticImage src="../images/product3.jpg" id="productContentImageFlug" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.productImage1} />
                <div className={style.productText}>
                  <h1 id="productContentSPFlug">CADi2</h1>
                  <h2 id="productContentSPFlug">「CADi2（キャディーツー）」は認知症早期発見のための検査アプリです。スマートフォン、タブレット、PCなどあらゆるデバイスから利用可能です。音声を聞きながら１０個の検査項目に回答することで、数分間で検査できます。いくつかの自治体における住民健診や，全国複数の脳ドック施設において認知症早期発見のため活用がなされています。</h2>
                </div>
              </div>
              <hr />
            </div>
            <a href="/" id="productMore" className={style.productMore}>
              <p>VIEW MORE</p>
              <span className={style.playButton}></span>
            </a>
          </div>
        </div>

        <div id="details" className={style.details}>
          <div className={style.detailTitle}>
            <h1 id="detailTitle1">BUSINESS<br />DETAILS</h1>
            <h2 id="detailTitle2">AI×OIを用いた<br />脳画像解析技術の開発・販売事業</h2>
          </div>

          <div className={style.detailContents}>
            <div id="detailContent" className={style.content}>
              <h1>01</h1>
              <h2>検査サービス</h2>
              <h3>一般コンシューマ向けに脳ドックのオプションサービスや、認知機能簡便チェックアプリを提供<br />日本や中国、その他地域で導入施設を拡大中</h3>
            </div>
            <div id="detailContent" className={style.content}>
              <h1>02</h1>
              <h2>診断支援<br />
                ソフトウェア販売</h2>
              <h3>脳の関心領域ごとの萎縮度算定を行うBAADをベースとした、医師向けのAIソフトウェアを開発<br />うつ、認知症、脳動脈瘤、水頭症、統合失調症などの中枢神経系疾患を、客観的に脳画像から判別することが可能となる</h3>
            </div>
            <div id="detailContent" className={style.content0}>
              <h1>03</h1>
              <h2>AI画像解析&nbsp;<br />
                受託研究</h2>
              <h3>AIを活用したデータ解析受託業務<br />デジタルバイオマーカーへの応用を目指す</h3>
            </div>

          </div>
        </div>

        <div id="links" className={style.links}>
          <a href="/" className={style.link}>
            <h1>会社概要</h1>
          </a>
          <a href="/" className={style.link}>
            <h1>採用情報</h1>
          </a>
          <a href="/" className={style.link}>
            <h1>お問い合わせ</h1>
          </a>
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
    </>
  )
}