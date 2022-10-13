import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import logo from "./img/solandLogo.png";
import bar from "./img/bar.png";
import { FiShoppingCart } from "react-icons/fi";

import dscord from "./img/discord.png";
import tiktok from "./img/tiktok.png";
import twitter from "./img/twitter.png";
import insta from "./img/insta.png";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookie] = useCookies();
  const [user, setuser] = useState();
  const styles = {
    visibility: "hidden",
    transform: "scale(0.1)",
  };
  const styles2 = {
    visibility: "visible",
    transform: "scale(1)",
  };
  const [toggleStyles, settoggleStyles] = useState(styles);
  const [toggle, settoggle] = useState(true);

  const Toggel = () => {
    console.log("toggle");
    settoggle(!toggle);

    toggle === true ? settoggleStyles(styles2) : settoggleStyles(styles);
  };

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user"));
    setuser(userId);
  }, []);
  const logout = () => {
    window.location.reload(false);
    localStorage.clear();
  };
  return (
    <>
      <div className="tophearder">
        <div className="smallHeader container ">
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
        </div>
      </div>

      <div style={{ backgroundColor: "#000" }} className="navsection">
        <div className="logos">
          <ul>
            <li>
              {" "}
              <Link to="/">
                <img className="" src={logo} width="150px" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/pre-order">Pre-order</Link>
            </li>
            <li>
              <Link to="/vr-office">VR Office</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            {cookie.Token ? (
              <li>
                <Link to="/admin/dashboard">Admin Panel</Link>
              </li>
            ) : null}
            {user ? (
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : null}

            <li>
              <Link to="/cart">
                <FiShoppingCart />
              </Link>
            </li>
            <li id="dropshow">
              {/* <Dropdwon/> */}

              {/* <div className="dropdown">
                                <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                    English
                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                    <a className="dropdown-item" href="/spanish">Spanish </a>

                                </div>
                            </div> */}
            </li>

            <li id="bar" onClick={Toggel}>
              {" "}
              <img src={bar} alt="" />
              <ul style={toggleStyles} className="mobilemenu">
                <li>
                  <Link to="/pre-order">Pre-order</Link>
                </li>
                <li>
                  <Link to="/vr-office">VR Office</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                {cookie.Token ? (
                  <li>
                    <Link to="/admin/dashboard">Admin Panel</Link>
                  </li>
                ) : null}
                {user ? (
                  <li>
                    <Link to="/" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                ) : null}

                <li>
                  {/* <Dropdwon/> */}
                  {/* 
                                    <div className="dropdown">
                                        <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                            English
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="/spanish">Spanish</a>


                                        </div>
                                    </div> */}
                </li>
              </ul>
            </li>

            <Link to="/cart">
              <FiShoppingCart id="cartIcon" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="marqueContainer">
        <marquee
          behavior="scroll"
          direction="left"
          width="100%"
          loop="infinite"
          className="scroollText"
        >
   Soland City Meta-payment currency $SOLD is gearing up for an exchange launch!
        </marquee>
      </div>
    </>
  );
};

export default Header;
