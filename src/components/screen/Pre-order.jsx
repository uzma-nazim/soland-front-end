import React from "react";

import "../../styles/Preorder.css";

import "../../styles/style.css";
import Header from "./header";
import Footer from "./footeer";
import VR_gif from "./img/websiteGif.gif";
import SolandCityLogo from "./SolandCityLogo";

const PreOrder = () => {
  return (
    <>
      <Header />

      {/* content */}
      <div className="parentCont">
        <div className="mainCont">
          <br />

          <div className="cent">
            <br />
            <br />
            <br />
            <h1 className="h1">Pre-order Your Virtual Space Now!</h1>
          </div>
          <br />
          <br />
          <div className="cent preorder-content">
            <p>
              Soland City is a metaverse aka Virtual Reality that's designed as
              a city in Spain called{" "}
              <div className="textInline">
                Marbella, and is building a global business hub. Join us!{" "}
              </div>
              <br />
              <br />
              We can, make your current office into a virtual reality office, or
              let us design one for you.
              <br />
              Pre-order today and enjoy -a
              <span className="discount"> 50% discount!</span>
              <br />
              <span className="offer"> (offer valid until we are life)</span>
            </p>

            <div className="inner-Cent">
              <h4>No VR Glasses Needed</h4>
            </div>
          </div>

          <br />
          <br />
          <div className="box-Cont">
            <div
              className="box"
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="text-btn">
                <h3>Virtual Reality office</h3>

                <div className="box-inner">
                  <h4>
                    Save Time
                    <br />
                    Save Money
                    <br />
                    Meet with anyone
                    <br />
                    Sell more
                  </h4>
                </div>
              </div>
              <div className="box-btn">
                <button>
                  {" "}
                  <a href="/vr-office"> Buy Here </a>
                </button>
              </div>
            </div>

            <div
              className="box"
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="text-btn">
                <h3>Digital Banner AD (FREE)</h3>
                <br />
                <div className="box-inner">
                  <h4>
                    Your Logo
                    <br />
                    Your Slogan
                    <br />
                  </h4>
                </div>
              </div>
              <div className="box-btn">
                <button>I want One!</button>
              </div>
            </div>
          </div>


          
          <div className="cent preorder-content pre-order-content2">
            <p>
              By using the VR technology and Metaverse, you can now enjoy
              adventures in Soland City during your free time. Not all your time
              in the city needs to be spent conducting business transactions.
              Instead, you can enjoy getting involved in other types of
              adventures with other players, increasing your ability to develop
              long-standing relationships that could have benefits for you that
              stretch outside the futuristic city.
            </p>
          </div>
          <br />
          <br />

          <div className="btn-Cont">
            <button className="butn">
              <a href="../pdf/Soland Web Presentation.pdf">
                Whitepaper For investors
              </a>
            </button>

            <button className="butn">
              <a href="https://forms.gle/ktnZoeHYaJhibjTr8">For investors</a>
            </button>
          </div>

          <br />

          <div className="img-Cont">
            <img src={VR_gif} alt="" />
            <br />

            <h4>
              Estimation of business having a Virtual Reality Office by 2030,{" "}
              <a
                rel="noreferrer"
                style={{ color: "#eb11f4" }}
                target={"_blank"}
                href="https://www.inc.com/geoffrey-james/by-2030-every-office-will-be-a-virtual-office.html"
              >
                {" "}
                Read Here.
              </a>
            </h4>
          </div>



        </div>
        
        <SolandCityLogo/>
      </div>

      <Footer />
    </>
  );
};

export default PreOrder;
