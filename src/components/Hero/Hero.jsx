import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter paddings innerWidth">
        {/* left side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Откройте для себя <br />
              Наиболее подходящую <br />
              Недвижимость
            </motion.h1>
          </div>
          <div className="hero-description flexColStart">
            <span className="secondaryText">
              Найти множество вариантов недвижимости, которые вам подходят,
              очень легко
            </span>
            <span className="secondaryText">
              Забудьте обо всех трудностях поиска жилья для вас
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue) " size={25} />
            <input type="text" />
            <button className="button">Поиск</button>
          </div>
          <div className="stats flexCenter">
            <div className="stat flexColCenter ">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Премиум-продукты</span>
            </div>
            <div className="stat flexColCenter ">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Довольные клиенты</span>
            </div>
            <div className="stat flexColCenter ">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Награды</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
