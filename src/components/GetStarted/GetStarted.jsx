import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="g-container paddings innerWidth">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Начните работу с Vite</span>
          <span className="secondryText">
            Подпишитесь и получите от нас суперпривлекательные предложения.
            Найдите свое жилье скорее
          </span>
          <button className="button">
            <a href="mailto:basaksubroto@gmail.com">Начнём</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
