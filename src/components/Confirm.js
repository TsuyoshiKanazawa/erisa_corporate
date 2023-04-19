import React, { useState} from "react"
import * as style from "../styles/contact.module.scss"
import { init, send } from 'emailjs-com'
import { StaticImage } from "gatsby-plugin-image"

const Confirmation = props => {
  const [isSendButton, setisSendButton] = useState(true);
  const { values, hideConfirmation } = props
  //propsで渡ってきたvaluesを受けとって入力内容確認画面で表示

  //チェックボックス
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
    setisSendButton(!isSendButton)
  }

 //メール送信/////
  const orname = values.orname; //所属
  const department = values.department; //部署名
  const name = values.name; //氏名
  const mail = values.email; //メールアドレス
  const tel = values.tel; //電話番号
  const kinds = values.kinds; //お問い合わせ種別
  const message = values.contact; //お問い合わせ内容

  const sendMail = () => {
    init("OhzGRqewkPcbhrZ0o");

    const template_param = {
      orname: orname,
      department: "部署名：" + department,
      name: name,
      mail: mail,
      mailText: "メールアドレス：" + mail,
      tel: "電話番号：" + tel,
      kinds: "お問い合わせ種別：" + kinds,
      message: message,
    };

    send("service_1obp7sd", "template_ggft61b", template_param).then(() => {
      window.location.href = '/contact-completion';;
    });
  }
  
  return (
    <>
      <div className={style.confirmBox}>
        <h1 className={style.note}>以下の内容でお間違いなければ<br />「送信」ボタンを押してください。</h1>
        <div className={style.forms}>
          <h1>所属</h1>
          <p>{values.orname}</p>
        </div>
        <p>例) 株式会社〇〇〇〇</p>
        <div className={style.forms}>
          <h1>部署名</h1>
          <p>{values.department}</p>
        </div>
        <p>例) 〇〇〇〇部</p>
        <div className={style.forms}>
          <h1>氏名<span>※</span></h1>
          <p>{values.name}</p>
        </div>
        <p>例) 山田花子</p>
        <div className={style.forms}>
          <h1>メールアドレス<span>※</span></h1>
          <p>{values.email}</p>
        </div>
        <p>例) abc@abc.com</p>
        <div className={style.forms}>
          <h1>電話番号</h1>
          <p>{values.tel}</p>
        </div>
        <p>例) 0311112222 市外局番よりご入力ください</p>
        <div className={style.forms}>
          <h1>お問い合わせ種別</h1>
          <p>{values.kinds}</p>
        </div>
        <p>例) 0311112222 市外局番よりご入力ください</p>
        <div className={style.forms}>
          <h1>お問い合わせ内容<span>※</span></h1>
          <p className={style.contactText}>{values.contact}</p>
        </div>

        <div className={style.terms}>
          <input type="checkbox" name="agree" id="agreeCheck" onChange={() => toggleCheckbox()}/>
          <label htmlFor="agreeCheck">「<a href="/">個人情報の取り扱い</a>」同意の上、<br />申込みます。</label>
          <a href="/"><StaticImage src="../images/linkIcon.png" quality={90} formats={["AUTO", "WEBP", "AVIF"]} className={style.linkIcon} loading="lazy" alt="background" /></a>
        </div>

        <div className={style.buttonContainer}>

          <div className={style.backButtonContainer}>
            <input
              type='button'
              onClick={hideConfirmation}
              //クリックでstateをクリアし、入力内容確認画面コンポーネントを非表示にする
              value='入力に戻る'
              className={style.backButton} />
              <span className={style.playButton}></span>
          </div>

          <div className={isSendButton ? "contact-module--sendButtonContainer--39688" : "contact-module--sendButtonContainer_visible--66c2b"}>
            <button 
              className={style.sendButton}
              onClick={sendMail}
              disabled={!isChecked}><p>送信</p></button>
            <span className={style.playButton}></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Confirmation