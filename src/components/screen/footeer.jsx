import React from "react";
import "../../styles/style.css";
import dscord from "./img/discord.png";
import tiktok from "./img/tiktok.png";
import twitter from "./img/twitter.png";
import insta from "./img/insta.png";

import solandGraphic from "./img/soland-graphic.png";
import pdf from "../pdf/Soland City Presentation.pdf";
import whitePaper from "../pdf/Whitepaper Soland City.pdf";
import { Link, useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigatebtn = useNavigate("")

  return (
    <>
      <div id="connect" className="footer">
        <br />
        <div className="footercontent container">
          <div className="footerlogo">
            <img src={solandGraphic} width="120px" alt="" />

            <p>connect@soland.live </p>
          </div>
          <div className="foooter-links">
            <h4>Services</h4>
            <Link to="/pre-order">Pre-order</Link>
            <Link to="/vr-office">VR-Office</Link>
            <Link to={whitePaper} target="_blank" rel="noopener noreferrer">Whitepaper</Link>
            <Link to={pdf} target="_blank" rel="noopener noreferrer"> Presentation</Link>
            
            
          </div>

          <div className="blog">
            <div className="follow-us-animation">
              <h4>Follow us! </h4>
            </div>
      

            <a href="https://www.instagram.com/soland.live/">
            <img src={insta} width="30px" alt="" />

            </a>

            <a href="https://vm.tiktok.com/ZMLabwwQp/">
              <img src={tiktok} width="30px" alt="" />
            </a>
            <a href="https://discord.gg/3rNUnCbW3V">
              <img src={dscord} width="30px" alt="" />
            </a>
            <a href="https://twitter.com/SolandCity">
              <img src={twitter} width="30px" alt="" />
            </a>
            {/* <div className="footer-input">
            <input placeholder="Enter Email" type="text" name="" id="" />
            <button className="sned">Send</button>
          </div>
           */}
          </div>
          
        </div>

        <br />

        <div className="copyright">
          <p>Copyright 2022 &copy; </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
