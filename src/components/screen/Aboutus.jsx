import React from "react";

import "../../styles/About.css";

import t1 from "./img/team1.jpg";
import t2 from "./img/team2.jpg";
import t3 from "./img/team3.jpg";

import Footer from "./footeer";
import "../../styles/Team.css";
import Header from "./header";
import solandCity from "./img/solandCity.png";
import profileAvtar from "./img/profile-avtar.jpg";
import nick from "./img/nick.png";
import alex from "./img/alex.png";
import mark from "./img/mark.png";
import cam from "./img/cam.png";
import Form from "./Form";
import SolandCityLogo from "./SolandCityLogo";
import { BsLinkedin } from "react-icons/bs";

const Aboutus = () => {
  return (
    <>
      <Header />

      {/* <!-- Content --> */}
      <div className="body">
        <div className="aboutus-box">
          <div
            className="aboutus"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <br />
            <h1 className="h1" >About us</h1>
          </div>
          <div className="wrapper">
            <div
              className="about-text"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <p>
                Soland City is the perfect integration of VR technology, the
                Metaverse, and your own personalized DeFi, giving you a more
                enjoyable way to manage your money more effectively. Now you can
                enter Soland City as your “home away from home” making it the
                perfect destination to manage your finances in a unique and
                enjoyable way.
              </p>
              <p>
                What makes Soland City such an incredible experience is that
                this allows you to have all of the advantages of in person
                interaction with those in the DeFi world, but do it in a
                virtual, even futuristic world. You create your own character,
                interact with those you choose to spend your time talking with
                or with those you are interested in doing business with.
              </p>
              <p>
                Soland City is a great opportunity to manage your money far more
                effectively and do it in an atmosphere that is a lot more
                enjoyable. All the tools needed for your DeFi experience are
                available and you have access to information that can assist you
                in improving your financial portfolio. Yet, you can now do so in
                an experience that is far more enjoyable than your everyday
                boring marketing meeting.
              </p>
            </div>
          </div>

          <br />

          <div className="team-head">
            <br />
            <br />
            <br />
            <h1 className="h1">Our Team</h1>
          </div>

          <section className="teamcards-section">
            <div
              className="card1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img src={t1} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Jan Peter</h1>
                <h2>Founder & Developer</h2>
                <h3>Finland</h3>
                <p>
                  Jan Peter found his passion from tech and finance industry at
                  a very young age. Currently on a mission to build VR DeFi,this
                  mean Virtual Reality Decentralized Finance, he is the Vice
                  President of Soland City metaverse.
                </p>
              </div>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/janpeter1992/"
              >
                {" "}
                <img
                  src="https://www.wpunj.edu/ccob/gbfi/images/Good%20linkedin%20logo.png?language_id=1"
                  alt=""
                />
              </a>
            </div>

            <div
              className="card1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img src={t2} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Anders Johnsson</h1>
                <h2>Blockchain Advisor</h2>
                <h3>Sweden</h3>
                <p>
                  Anders has business experience and is a very experienced
                  advisor in blockchain, NFT, DeFi and Metaverse. Anders is by
                  experience and knowledge a veteran in Crypto.
                </p>
              </div>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/anders-johnsson/"
              >
                {" "}
                <img
                  src="https://www.wpunj.edu/ccob/gbfi/images/Good%20linkedin%20logo.png?language_id=1"
                  alt=""
                />
              </a>
            </div>

            <div
              className="card1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img src={t3} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Omonije Isaac</h1>
                <h2>Developer</h2>
                <h3>Nigeria</h3>
                <p>
                  Isaac is a full-stack developer/Blockchain Developer and is
                  very experienced at writing smart contracts for NFTs and also
                  creating great website designs with React. Isaac is by
                  experience and knowledge an expert at frontend and Blockchain
                  development.
                </p>
              </div>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/sumbo-omonije-302493243"
              >
                {" "}
                <img
                  src="https://www.wpunj.edu/ccob/gbfi/images/Good%20linkedin%20logo.png?language_id=1"
                  alt=""
                />
              </a>
            </div>
          </section>
          <br />

          <section className="teamcards-section">
            <div
              
              className="card1 small-card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img src={nick} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Nick</h1>
                <h2>Community Admin</h2>
                {/* <h3>Finland</h3> */}
                <p>
                  Experienced in management and has previous knowledge of top
                  crypto project work environment.
                </p>
              </div>
            </div>

            <div
              
              className="card1 small-card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img width={"100%"} src={alex} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Alex</h1>
                <h2>Community Manager</h2>
                {/* <h3>Sweden</h3> */}
                <p>
                  Been involved in crypto since 2015. Alex is well known about
                  the projects plans and is superior to guide or answer members
                  questions.
                </p>
              </div>
            </div>
            <div
              
              className="card1 small-card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img width={"100%"} src={mark} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Mark</h1>
                <h2>CM & Digital Marketing</h2>
                {/* <h3>Sweden</h3> */}
                <p>
                  Mark is a experienced community manager and specialized in
                  digital marketing.
                </p>
              </div>
            </div>
            <div
              
              className="card1 small-card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card1-img">
                <img width={"100%"} src={cam} alt="Founder & Developer" />
              </div>
              <div className="card1-content">
                <h1>Cam</h1>
                <h2>Angel Investor </h2>
                <h3>Australia</h3>
                <p>
                Owner of the Couch Trading
                </p>
              </div>
            </div>
          </section>
          <br />
          <h1 className="h1">Our Social Workers</h1>
          <br />
          <div className="socialCoWorkers container">
            <div className="workerContent">
              <p>Fanboi | Soland City#0020</p>
              <p>jerezel | Soland City#7262</p>
              <p>Laraat | Soland City#6090</p>

            </div>


          </div>

          <div
            className="aboutus"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <br />
            <h1 className="h1">Contact us</h1>
          </div>

          <div className="container">
            <Form />
          </div>
          <SolandCityLogo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
