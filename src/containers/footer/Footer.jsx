import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
        FIND ME ON<br></br>
        Please don't hesitate to reach out to me and connect.
        </h1>
      </div>
      <div >
    <a href="https://github.com/BASIM-JAVED"  class="icon-colour  home-social-icons" aria-label="github">GITHUB    </a>
    <a href="https://www.linkedin.com/in/basim-javed-494684276/"  class="icon-colour  home-social-icons" aria-label="linkedin">          LINKED IN     </a>
      </div>
      
      <div className="footer-copyright">
        <p>© 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
