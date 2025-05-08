import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Наши контакты</span>
          <span className="primaryText">С нами легко связаться</span>
          <span className="secondryText">
            Мы всегда готовы помочь, предоставляя вам лучшие услуги. Мы верим,
            что хорошее жилье может сделать вашу жизнь лучше
          </span>

          <div className="contactModes flexColStart">
            {/* first row */}
            <div className="row flexStart">
              {/* first mode */}
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Звоните </span>
                    <span className="secondryText">+7 906 357 6457</span>
                  </div>
                </div>
                <div className="button flexCenter">Позвоните сейчас</div>
              </div>

              {/* Second mode */}
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Чат</span>
                    <span className="secondryText">+7 906 357 6457</span>
                  </div>
                </div>
                <div className="button flexCenter">Чат сейчас</div>
              </div>
            </div>
            {/* second row */}
            <div className="row flexStart">
              {/* third mode */}
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Видео звонок</span>
                    <span className="secondryText">+7 906 357 6457</span>
                  </div>
                </div>
                <div className="button flexCenter">Видео звонок сейчас</div>
              </div>

              {/* fourth mode */}
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Сообщения</span>
                    <span className="secondryText">+7 906 357 6457</span>
                  </div>
                </div>
                <div className="button flexCenter">Сообщения сейчас</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right flexEnd">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
