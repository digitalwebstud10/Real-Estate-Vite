import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="v-container paddings innerWidth flexCenter">
        {/* Left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="v-right flexColStart">
          <span className="orangeText">Наша ценность</span>
          <span className="primaryText">Ценность, которую мы вам даем</span>
          <span className="secondaryText">
            Мы всегда готовы помочь, предоставляя вам самые лучшие услуги.{" "}
            <br />
            Мы верим, что хорошее место для жизни может сделать вашу жизнь
            лучше.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton flexCenter">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="icon flexCenter">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon flexCenter">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
