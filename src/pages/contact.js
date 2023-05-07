import React, { useRef, useEffect, useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useForm } from 'react-hook-form'
import { scroller } from 'react-scroll'
import Confirmation from '../components/Confirm'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss"
import "../styles/input.css"

import contactTitle from '../images/contactTitle.svg'

import ogp from '../images/OGP.jpg'

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
            { visibility: "hidden" }, //fromの設定
            {  //toの設定
                visibility: "visible",
            }
        )

        //共通/////////////////////////

        mm.add("(min-width: 901px)", () => {
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
        });


        mm.add("(max-width: 900px)", () => {
            gsap.fromTo(
                '#contactTitle',
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

    const [isContactShown, setIsContactShown] = useState(true);

    const {
        register,
        handleSubmit,
        watch,
        errors,
        getValues,
    } = useForm()

    //useFormを呼び出して使いたいメソッドを書く
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)
    //isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    //isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
    const hideConfirmation = () => { 
        setIsConfirmationVisible(false) 
        setIsContactShown(true);
        scroller.scrollTo('scrollTarget', {
            duration: 0,
        })
    }
    //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
    const onSubmitData = () => setIsConfirmationVisible(true)
    //submitボタンを押した時、入力内容確認画面を表示させる

    const Name = watch('name')
    const Email = watch('email')
    const Contact = watch('contact')
    //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる


    useEffect(() => {
        if (isConfirmationVisible === true) {
            scroller.scrollTo('scrollTarget', {
                duration: 0,
            })
            setIsContactShown(false);
        }
    }, [isConfirmationVisible])
    
    return (
        <Layout>
            <Helmet>
                <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
            </Helmet>
            <body id="body" className={style.body} name='scrollTarget'>
                <div class="gtranslate_wrapper"></div>

                <div id="contactTitle" className={style.contactTitle}>
                    <div className={style.titleText}>
                        <h1>お問い合わせ</h1>
                        <img src={contactTitle} alt="contactTitle" className={style.contactTitleImg} />
                    </div>
                </div>

                <div className={style.contactContainer} >

                    <div className={style.contact}>
                        <form onSubmit={handleSubmit(onSubmitData)} className={isContactShown ? "contact-module--contactBox--f2527" : "contact-module--contactBox_hidden--6d5f5"}>
                            {/*onSubmit(入力フォームの送信ボタンがクリックされた時に発生するイベント)で入力された値をhandleSubmitで取り出す*/}

                            <h1>「 ※ 」印は入力必須です。</h1>

                            <div className={style.forms}>
                                <label htmlFor='orname'>所属
                                </label>
                                <input
                                    name='orname'
                                    placeholder=''
                                    ref={register({ required: false })} />
                            </div>
                            <p>例) 〇〇病院、〇〇クリニック、株式会社〇〇〇〇　<br className={style.spbr}></br>※個人の方は省略可</p>

                            <div className={style.forms}>
                                <label htmlFor='department '>部署名
                                </label>
                                <input
                                    name='department'
                                    placeholder=''
                                    ref={register({ required: false })} />
                            </div>
                            <p>例) 〇〇〇〇部　※個人の方は省略可</p>

                            <div className={style.forms}>
                                <label htmlFor='name'>氏名
                                    <span>※</span>
                                </label>
                                <input
                                    name='name'
                                    placeholder=''
                                    ref={register({ required: true, minLength: 1 })} />
                            </div>
                            <p>例) 山田花子</p>
                            {errors.name && <p className={style.caveat}>氏名を入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}

                            <div className={style.forms}>
                                <label htmlFor='email'>メールアドレス
                                    <span>※</span>
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    ref={register({
                                        required: true,
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                    })}
                                />
                            </div>
                            <p>例) abc@abc.com</p>
                            {errors.email && <p className={style.caveat}>メールアドレスを正しく入力して下さい</p>}

                            <div className={style.forms}>
                                <label htmlFor='email1'>メールアドレス確認用
                                    <span>※</span>
                                </label>
                                <input
                                    type='email1'
                                    name='email1'
                                    ref={register({
                                        required: true,
                                        validate: (value) => {
                                            return (
                                                value === getValues("email")
                                            )
                                        }

                                    })}
                                />
                            </div>
                            <p>例) abc@abc.com</p>
                            {errors.email1 && <p className={style.caveat}>メールアドレスが一致していません</p>}

                            <div className={style.forms}>
                                <label htmlFor='tel'>電話番号
                                </label>
                                <input
                                    type='tel'
                                    name='tel'
                                    ref={register({
                                        required: false,
                                    })}
                                />
                            </div>
                            <p>例) 0311112222 市外局番よりご入力ください</p>

                            <div className={style.forms}>
                                <label htmlFor='contact'>お問い合わせ内容
                                    <span>※</span>
                                </label>
                                <textarea
                                    name='contact'
                                    placeholder=''
                                    ref={register({
                                        required: true,
                                        rows: 8,
                                        minLength: 1,
                                    })}
                                />
                            </div>
                            {errors.contact && <p className={style.caveat0}>お問い合わせ内容を入力して下さい</p>}

                            <div className={style.nextbuttonContainer}>
                                <input
                                    type='submit'
                                    value=' '
                                    className={style.nextButton}>
                                </input>
                                <p>確認に進む</p>
                                <span className={style.playButton}></span>
                            </div>

                        </form>
                        {isConfirmationVisible &&//trueの時だけ入力内容確認画面を表示
                            <Confirmation//入力内容確認画面コンポーネント
                                values={getValues()}//getValues()でフォーム全体のデータを返してくれる！！
                                hideConfirmation={hideConfirmation}//入力内容確認画面表示・非表示のstateをConfirmationに渡す
                            />
                        }

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