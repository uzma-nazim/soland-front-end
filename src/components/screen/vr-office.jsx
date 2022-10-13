import React, { useRef, useState } from "react";
import Footer from "./footeer";
import Header from "./header";
import "../../styles/vr-office.css";
import "../../styles/globalstle.css";
import nft from "./img/nft.png";
import Toast from "./Toast";
import { toast } from "react-toastify";
import axios from "axios";
import BASE_URI from "../../core";
import VR_gif from "./img/websiteGif.gif";
import SolandCityLogo from "./SolandCityLogo";



const VrOffice = () => {
  const msg = "uzma"
  const [loadingCard, setloadingCard] = useState("");

  const [loader, setloader] = useState(false);

  ///basic page element
  const nameref = useRef();
  const prizeRef = useRef();
  const imgeRef = useRef();
  const rentRef = useRef();

  ///pro page element
  const nameref2 = useRef();
  const prizeRef2 = useRef();
  const imgeRef2 = useRef();

  const [anchor, setanchor] = useState("Veiw More");

  const hidden = {
    display: "none",
    trasition: ".5s",
  };
  const show = {
    display: "block",
    trasition: ".5s",
  };
  const [veiwmore, setveiwmore] = useState(hidden);
  const [toggle, settoggle] = useState(false);
  const VeiwMore = (e) => {
    settoggle(!toggle);

    e.preventDefault();
    !toggle ? setveiwmore(show) : setveiwmore(hidden);
    !toggle ? setanchor("Show less ") : setanchor("Show More");
  };
  const getithandle = (name, price, img) => {
    
    setloadingCard(name);

    let userId = JSON.parse(localStorage.getItem("user"));

    if (userId) {
      const { data } = userId;

      const cartdetails = {
        name,
        price,
        img,
        user_id: data._id,
      };

      setloader(true);
      axios
        .post(`${BASE_URI}/api/cart`, cartdetails)
        .then((respone) => {
          setloader(false);
    
          toast.success("Your package has added in your cart", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => console.log(err));
    } else {
  
      toast.error("You haven't login Please login", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    // setTimeout(() => navigate("/login"), 2000)
  };
  return (
    <>
      <Header />

      <div className="pkgContainer">
        <h1 className="h1">Our packages </h1>

        <br />
        <br />
        <p style={{color:"#fff"}}>Get you company a VR Office or Your Community a Lounge</p>

        <div className="cardrow">
          <div
            className="pkg-card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="pkh-hrading">
              <h1 ref={nameref}>Basic Package</h1>
              <h4 ref={prizeRef}>2500 </h4>
              <h4 ref={rentRef}>$190/MONTH</h4>
            </div>
            <div className="pkg-img">
              <img ref={imgeRef} src={nft} alt="Founder & Developer" />
            </div>
            <div className="pkg-details">
              <h4>Includes features</h4>
              <p>
                Avatar, text, audio, video, screen sharing and messaging (chat)
              </p>

              <h4>Display features</h4>
              <p>
                Text, audio, video, screen sharing, browser, documents,
                whiteboard, 3D models, calendar, polling and much more{" "}
                <a href="" onClick={VeiwMore}>
                  {anchor}
                </a>{" "}
              </p>
              <div style={veiwmore} className="hiddenContent">
                <h4>Additional features </h4>
                <p>
                  Meeting booking system, company internal meetings, showcase
                  products or sell services, meet with clients.{" "}
                </p>
                <h4>Display features</h4>
                <p>
                  Text, audio, video, screen sharing, browser, documents,
                  whiteboard, 3D models, calendar, polling and much more
                </p>

                <p>
                  (Product upgrade will include more free and beneficial
                  features & functions)
                </p>
                <p>Private invite only or open for public </p>
                <p>(we recommend private) </p>
              </div>
              <button
                className="btnstyle"
                onClick={() =>
                  getithandle(
                    nameref.current.textContent,
                    prizeRef.current.textContent,
                    imgeRef.current.src
                  )
                }
              >
                {loader && loadingCard == nameref.current.textContent ? (
                  <>
                    <div
                      className="spinner-border"
                      role="status"
                      style={{
                        margin: "0 auto",
                        color: "#fff",
                      }}
                    ></div>
                  </>
                ) : (
                  "GET IT"
                )}
              </button>
            </div>
          </div>

          <div
            style={{ height: "690px" }}
            className="pkg-card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="pkh-hrading">
              <h1 ref={nameref2}>Pro Package</h1>
              <h4 ref={prizeRef2}>4500 </h4>
              <h4>$240/MONTH</h4>
            </div>
            <div className="pkg-img">
              <img ref={imgeRef2} src={nft} alt="Founder & Developer" />
            </div>
            <div style={{ marginTop: "10px" }} className="pkg-details">
              <p>Everything from pro package</p>
              <p>-Unique custom design / current office VR replica</p>
              <p>Special custom features and functions </p>
              <p>-Private invites only or open for everyone </p>
              <p>(we recommend private)</p>
              <button
                onClick={() =>
                  getithandle(
                    nameref2.current.textContent,
                    prizeRef2.current.textContent,
                    imgeRef2.current.src
                  )
                }
                className="btnstyle"
              >
                {loader && loadingCard == nameref2.current.textContent ? (
                  <>
                    <div
                      className="spinner-border"
                      role="status"
                      style={{
                        margin: "0 auto",
                        color: "#ffff",
                      }}
                    ></div>
                  </>
                ) : (
                  "GET IT"
                )}
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="wrapper">
          <div
            style={{ width: "70%" }}
            className="about-text"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <p>
              pre-orders come with testing period of 30 days money back
              guarantee <br />
              after we have launched
              <br />
              pre-order get the highest Soland City Loyalty Program status
            </p>
          </div>
        </div>

        <br />
        <div className="vr-video">
          <div className="img-Cont">
            <img src={VR_gif} alt="" />
            <br />
          </div>
        </div>
      
      <SolandCityLogo/>
      </div>


      <Footer />
      <Toast />
    </>
  );
};

export default VrOffice;
