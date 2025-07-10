import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            voluptate doloremque, deserunt illum repudiandae deleniti
            accusantium. Quae vel, a eius numquam repellat dolores, recusandae
            laborum harum, saepe nulla assumenda minima.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9999999999</li>
                <li>contect@gmail.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2025 @ Tomato.com - All right reserved
      </p>
      <hr/>
    </div>
  );
};

export default Footer;
