import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpend, setMenuOpend] = useState(false);
  const getMenuStyles = (menuOpend) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpend && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpend(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpend)}>
            <a href="">Резиденции</a>
            <a href="">Наша ценность</a>
            <a href="">Связаться</a>
            <a href="">Начнём</a>
            <button className="button">Контакты</button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpend((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
