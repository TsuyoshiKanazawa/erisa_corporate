import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react"
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

import logoColor from '../images/logoColor.svg'
import hamberger from '../images/hamberger.svg'

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

    //ヘッダーが表示・非表示になる/////////////////
    const [isHeaderShown, setIsHeaderShown] = useState(true);
    const [lastPosition, setLastPosition] = useState(0);
    const headerHeight = 100;
    const scrollEvent = React.useCallback(() => {
        const offset = window.pageYOffset;

        if (offset > headerHeight) {
            setIsHeaderShown(false);

        } else {
            setIsHeaderShown(true);
        }

        if (offset < lastPosition) {
            setIsHeaderShown(true);
        }

        setLastPosition(offset);
    }, [lastPosition]);

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollEvent);

        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, [scrollEvent]);
    ///////////////////////////////////////////
    //ハンバーガーメニューの開閉////////////////
    const handle = useCallback((e) => {
        e.preventDefault();
    }, []);

    const scrollLock = () => {//ハンバーガーメニューを空けた時はスクロール禁止
        document.addEventListener('touchmove', handle, { passive: false });
        document.addEventListener('mousewheel', handle, { passive: false });
    }

    const scrollLockLift = () => {//ハンバーガーメニューを閉じたらスクロール禁止解除
        document.removeEventListener('touchmove', handle,);
        document.removeEventListener('mousewheel', handle,);
    }


    const [isShow, setIsShow] = useState(false);
    const closeWithClickOutSideMethod = (e, setter) => {
        if (e.target === e.currentTarget) {//メニュー外側をクリックしたら
            setter(false);//メニューを閉じる
            document.body.style.overflow = "auto";
            scrollLockLift();
        }
    };
///////////////////////////////////////////

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

        });


        mm.add("(max-width: 900px)", () => {

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
        if (isConfirmationVisible == true) {
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
                <header id="headerWrapper" className={isHeaderShown ? "contact-module--container--6353d" : "contact-module--show--ef6ee"}>
                    <div className={style.flexContainer}>
                        <a href="/">
                            <img src={logoColor} id="logoColor" className={style.logoColor} alt="logo" />
                        </a>
                        <div className={style.headerRight}>
                            <a href="/information/" ><p id="headerMenu">INFORMATION</p></a>
                            <a href="/about" ><p id="headerMenu">ABOUT</p></a>
                            <a><p id="headerMenu">PRODUCT</p></a>
                            <a><p id="headerMenu">MEMBER</p></a>
                            <a><p id="headerMenu">RECRUIT</p></a>
                            <a href="/contact" ><p id="headerMenu">CONTACT</p></a>
                            <button
                                className={style.hmb}
                                id="hamberger"
                                onClick={() => {
                                    setIsShow(!isShow);
                                    scrollLock();
                                }}
                            >
                                <img src={hamberger} id="hambergerSVG" className={style.hamberger} />
                            </button>
                        </div>
                        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                            className={`contact-module--menuWrapper--5421e ${isShow ? "contact-module--menuWrapper__active--99f07" : ""}`}
                            onClick={(e) => {
                                closeWithClickOutSideMethod(e, setIsShow);
                            }}
                            style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
                        >
                            <div id="menu" className={style.menu}>
                                <div className={style.menuTop}>
                                    <button
                                        className={style.close}
                                        onClick={() => {
                                            setIsShow(!isShow);
                                            scrollLockLift();
                                        }}>
                                    </button>
                                </div>

                                <div className={style.menuList}>
                                    <a href="/information"
                                        className={style.list}
                                        onClick={() => {
                                            setIsShow(!isShow);
                                            scrollLockLift();
                                        }}>
                                        <p>INFORMATION</p>
                                    </a>
                                    <a href="/about"
                                        className={style.list}
                                        onClick={() => {
                                            setIsShow(!isShow);
                                            scrollLockLift();
                                        }}>
                                        <p>ABOUT</p>
                                    </a>
                                    <a
                                        className={style.list}>
                                        <p>PRODUCT</p>
                                    </a>
                                    <a
                                        className={style.list}>
                                        <p>MEMBER</p>
                                    </a>
                                    <a
                                        className={style.list}>
                                        <p>RECRUIT</p>
                                    </a>
                                    <a href="/contact"
                                        className={style.list}
                                        onClick={() => {
                                            setIsShow(!isShow);
                                            scrollLockLift();
                                        }}>
                                        <p>CONTACT</p>
                                    </a>
                                </div>
                                <div className={style.copyright}>
                                    <p>©2023 ERISA Co.</p>
                                </div>
                                <div className={style.comingSoon}>
                                    <p>COMING<br />SOON</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className={style.contactTitle}>
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
                            <p>例) 株式会社〇〇〇〇</p>

                            <div className={style.forms}>
                                <label htmlFor='department '>部署名
                                </label>
                                <input
                                    name='department'
                                    placeholder=''
                                    ref={register({ required: false })} />
                            </div>
                            <p>例) 〇〇〇〇部</p>

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
                                <label htmlFor='kinds'>お問い合わせ種別
                                    <span>※</span>
                                </label>
                                <div className={style.selectContainer}>
                                    <select
                                        name='kinds'
                                        placeholder=''
                                        ref={register({ required: false })} >
                                        <option>製品について（導入のご相談や資料請求など）</option>
                                        <option>採用について</option>
                                        <option>その他</option>
                                    </select>
                                    <span></span>
                                </div>
                            </div>

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
                                    value='確認に進む'
                                    className={style.nextButton}>
                                </input>
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
        </>
    )
}