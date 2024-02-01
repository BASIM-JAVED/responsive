import React from "react";
import "./header.css";

import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Hi There! 👋🏻
        I'M BASIM JAVED
        MERN Stack Developer
        </h1><br></br>
        <h2 className="gradient__text">LET ME INTRODUCE MYSELF</h2>
        <p>
        

I recently graduated with a Bachelor's degree in Computer Science in 2021.

As a MERN-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.

I am proficient in Javascript, as well as have knowledge in programming languages such as C, Java, Python, PHP
        </p>
        
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
