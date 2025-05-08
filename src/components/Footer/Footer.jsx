import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className="f-left flexColStart">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondryText">
            Ваше видение — сделать так, чтобы все люди <br />
            жили в лучшем месте.
          </span>
        </div>
        {/* right side */}
        <div className="f-right flexColStart">
          <span className="primaryText">Информация</span>
          <span className="secondryText">Сахорова 187, Москва, Россия</span>
          <div className="f-menu flexCenter">
            <span>Свойство</span>
            <span>Услуги</span>
            <span>Продукт</span>
            <span>О нас</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
