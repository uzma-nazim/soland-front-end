import React, { useRef } from "react";

import introVideo from "./img/intro.mp4";
import nftVideo from "./img/Soland City Infrastructure.mp4";
import poster from "./img/introPoster.png";
import nftpster from "./img/poster-nft.png";
import solfare from "./img/Solflare Wallet.png";
import phantomlogo from "./img/phantomlogo-.net.png";

import roadmap from "./img/roadmap.svg";
import toki from "./img/tokinism.png";
import rocket from "./img/rocket.png";
import "../../styles/style.css";

import collection1 from "./img/collection/1.png";
import collection2 from "./img/collection/2.png";
import collection3 from "./img/collection/5.png";
import collection4 from "./img/collection/9.png";

import collection6 from "./img/collection/15.png";
import collection7 from "./img/collection/18.png";
import collection8 from "./img/collection/30.png";
import collection9 from "./img/collection/42.png";
import collection10 from "./img/collection/83.png";
import collection12 from "./img/collection/147.png";
import collection13 from "./img/collection/339.png";

import collection15 from "./img/collection/345.png";
import about from "./img/about.svg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Solandpdf from "../pdf/Soland City Presentation.pdf";
import whitePaper from "../pdf/Whitepaper Soland City.pdf";

import Header from "./header";
import Whitepaper from "../whitepaper";
import Footer from "./footeer";
import CoinTable from "./cryptoCoin/App";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import Form from "./Form";
import SolandCityLogo from "./SolandCityLogo";

AOS.init();

const Home = () => {
  const whitepaper = useRef(null);
  const whitepaperscrollTop = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mainheader">
        {/* ///header Componen you can check code in header.jsx file */}
        <Header />
        <section className="content">
          {/* ///welcome Section */}

          <div className="heading">
            <h1 className="animate__animated animate__zoomIn">
              Welcome to Soland City!
            </h1>

            <p>The leading and most</p>
            <p>inter-connected Defi meta-economy</p>

            <button style={{backgroundColor:'#AC00BF' , width:"120px" , padding:"10px" , borderRadius:"5px"}} className="btnstyle"><a href="/pre-order"> Order Now!</a></button>
          </div>
        </section>
      </div>

      <div className="counter">
        <a href={card1} download>
          <img src={card1} alt="" />
        </a>

        <div>
          {/* presetattion button */}
          <div className="solandpresentation">
            <button className="wihiteppaerbtn">
              <a id="presentaion" target="_blank" href={whitePaper} download>
                WhitePaper
              </a>
            </button>

            <button className="wihiteppaerbtn">
              <a
                id="presentaion"
                target="_blank"
                href={Solandpdf}
                rel="noreferrer"
              >
                Presentation
              </a>
            </button>

            <span className="download" id="GetFile">
              <a href={Solandpdf} download>
                <i className="fa-solid fa-download"></i>
              </a>
            </span>
          </div>
        </div>
        <a href={card2} download>
          {" "}
          <img src={card2} alt="" />
        </a>
      </div>

      {/* <!-- //Introduction Video --> */}

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-interval="false"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div id="mintsection" className="videos">
              <video width="100%" poster={poster} controls>
                <source src={introVideo} type="video/mp4 " />
              </video>
            </div>
          </div>
        </div>
      </div>

      <section className="about">
        <br />
        <br />
        {/* <!-- //Introduction Text --> */}

        <div className="about-content container ">
          <div className="aboutPara">
            <h1>Introduction</h1>
            <br />

            <p>
              Soland City is the perfect destination for anyone searching for a
              personalized DeFi experience. You can easily manage your finances
              and enjoy a variety of unique features.
            </p>
            <p>
              If you're looking to explore new worlds or simply manage your
              money more effectively, Soland City can be your home away from
              home.
            </p>

            <p className="boldText">
              Are You Ready to meet the Metaverse and VR?
            </p>
          </div>
          <div className="about-img">
            <img
              src={about}
              id="img"
              className="img-fluid"
              width="450px"
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
      </section>

      {/* ///crad Section */}
      <div className="cardSection">
        <br />

        <div className="card-content   ">
          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Stake</h4>
            <p>
              Participate in building the financial hub for Solana by staking
              your NFTs and tokens.
            </p>
          </div>

          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Exchange</h4>
            <p>
              Buy, sell, and swap crypto directly from your wallet without
              giving up control of your keys using Raydium swaps.
            </p>
          </div>
          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Farm</h4>
            <p>
              Provide fungible or non-fungible tokens to liquidity pools to earn
              yield on your crypto.
            </p>
          </div>
        </div>

        <div className="card-content   ">
          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Bake</h4>
            <p>
              Farm and stake your NFT collection to maximize what you get out of
              your investments.
            </p>
          </div>

          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Lend</h4>
            <p>
              High-yield flexibility. No minimum deposit, no minimum time
              deposited. Withdraw your earnings anytime.
            </p>
          </div>
          <div className="card2 " data-aos="fade-up" data-aos-duration="1000">
            <h4>Showroom</h4>
            <p>
              Showcase your portfolio to the marketplace. Find a place to show
              off your collection.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>

      {/* //Colection animation */}

      <div className="animateContent">
        <br />
        <br />

        <div id="colectionsection" className="collectioHeading">
          <h1>Our Collection</h1>
        </div>
        <br />
        <br />

        <div className="check">
          <div className="scroll-main">
            <div className="scrollimg2">
              <img src={collection1} width="250px" alt="" />
              <img src={collection2} width="250px" alt="" />
              <img src={collection3} width="250px" alt="" />
              <img src={collection4} width="250px" alt="" />
              <img src={collection6} width="250px" alt="" />
              <img src={collection7} width="250px" alt="" />
            </div>

            <div className="scrollimg2">
              <img src={collection8} width="250px" alt="" />
              <img src={collection9} width="250px" alt="" />
              <img src={collection10} width="250px" alt="" />
              <img src={collection15} width="250px" alt="" />
              <img src={collection12} width="250px" alt="" />
              <img src={collection13} width="250px" alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Wallet Support logos */}

        <div className="parnterHeading container ">
          <h1>Wallets supported</h1>

          <br />
          <br />

          <div className="walletLogo">
            <a href={solfare} download>
              <img src={solfare} id="wallet" width="120px" alt="" />
            </a>
            <a href={phantomlogo} download>
              <img src={phantomlogo} id="phantom" width="80px" alt="" />
            </a>
            <br />
            <br />
            <h5 id="click">Click On Logo to Download</h5>
          </div>
        </div>

        {/* Soland City */}

        <div className="solandCity">
          <br />
          <br />

          <h1>Soland City in: </h1>

          <br />
          <br />
          <div className="cityCard">
            <div className="nftScrooing">
              <a href="https://nftscoring.com/upcoming/Soland-City">
                <h5> NFT Scoring </h5>
              </a>
            </div>
            <div className="nftclander">
              <a href="https://nftcalendar.io/event/soland-city/">
                <h5>NFT Calendar</h5>
              </a>
              <a href="UpcomingNFT.art">UpcomingNFT</a>
              <br />
              <a href="https://upcomingnft.art/soland-city/">
                Soland-city UpcomingNFT
              </a>
            </div>
            <div className="nftFeed">
              <a href="https://www.nftfeed.app/solana/projects/solandcity">
                {" "}
                <h5>NFTFeed</h5>
              </a>
            </div>
            <div className="solScan">
              <a href="https://solscan.io/token/soLDKcxDXu7Z1iCZxdbYLMup6szxCWsUJKZkVwbv4n2">
                {" "}
                <h5>SolScan</h5>
              </a>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
      {/* ///Coin Componen you can check code in cryptoCoin folder */}

      <CoinTable />

      {/* PIE Chart PIC */}
      {/* <div className='piechart'>

                <img src={pieChart} width="70%" alt="" />
            </div> */}

      {/* Tokenomics Chart */}

      <div className=" tokichart">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-1%",
            padding: "0px",
          }}
          className="container"
        >
          <img
            src={toki}
            width="70%"
            className="tokiImages"
            style={{ marginTop: "40px" }}
            alt=""
          />
        </div>
      </div>

      <div id="citysection" className="videos">
        <video width="100%" controls poster={nftpster}>
          <source src={nftVideo} />
        </video>
      </div>
      {/*Roadmap  */}

      <div className=" changeRoadmap ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container"
        >
          <img src={roadmap} width="70%" className="tokiImages" alt="" />
        </div>

        <div className="rocket">
          <img width={"250px"} className="img-fluid" src={rocket} alt="" />
        </div>
      </div>

      <div className="partnerplacholder">
        

        {/* Soland Blog */}
        <div className="blogheading">
          <h1>Soland Blog </h1>
          <br />
          <br />
          <br />
        </div>
        <div className="fa-content">
          <div className="FAQS container ">
            <div className="accordion  " id="accordionExample">
              <div className="card question">
                <div className="card-header" id="headingeighteen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseeighteen"
                      aria-expanded="false"
                      aria-controls="collapseeighteen"
                    >
                      <h2>Soland is featured in</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseeighteen"
                  className="collapse"
                  aria-labelledby="headingeighteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      <li> UpcomingNFT.art</li>
                      <li> NFTFeed </li>
                      <li> SolScan </li>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <h2> Rebranding from ETH to Solana</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      In 2021, many developers shifted away from Ethereum and
                      toward alternative blockchains. Because high gas prices
                      and congestion still plague the Ethereum network. Solana
                      was one of the networks that reaped the biggest benefits
                      from this situation. Its meteoric rise since 2021 has
                      established it as one of Ethereum's main competitors.
                      Solana can do more transactions per unit of time and
                      offers lower fees than Ethereum. We're rebr/anding Solana
                      and taking it to the next level with the 3D Metaverse
                      Soland City, using the same defi approach as Ethereum.
                    </p>
                    <p>
                      Even though Ethereum is older and more well-known, Solana
                      is a genuine competitor. One concern is that Ethereum's
                      potential for global-scale applications is essentially
                      limited by the limited number of transactions per second
                      that it can enable. Solana can process tens of thousands
                      of transactions every second, whereas Ethereum can only
                      process roughly 13 transactions per second. Furthermore,
                      Solana provides "significantly lower costs." One of the
                      most prominent critiques leveled at Ethereum is its high
                      transaction costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <h2> What sets Solana apart from the competition? </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      Solana varies from other blockchains in the way consensus
                      is achieved among nodes. While proof-of-history has its
                      benefits, others are concerned about Solana's voting
                      procedure and if it would lead to centralization.
                    </p>
                    <p>
                      Before joining the chain in Solana, nodes must vote on the
                      legitimacy of blocks and transactions. Nodes send their
                      votes to the leader, who then collects the votes and signs
                      off on the block.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingSix">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <h2> Data about the Solana network </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      Solana's network has the capacity to perform 65,000
                      transactions per second, much above Bitcoin's seven
                      transactions per second and Ethereum's fifteen
                      transactions per second. (TPS). When paired with the ETH
                      blockchain's hefty gas costs, Solana presents a far lower
                      barrier to entry, allowing it to build its user base
                      rapidly.
                    </p>
                    <p>
                      Solana transactions are a fraction of the cost of other
                      blockchains, with each transaction costing an average of
                      $0.00025. Solana attracts customers from all around the
                      world due to its inexpensive cost and excellent throughput
                      capabilities.
                    </p>
                    <p>
                      Solana now has 1,469 nodes in its ecosystem, with over 74%
                      of all tokens in circulation staked to the network and
                      providing rewards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingSeven">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <h2>Solana's DeFi </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      Solana's DeFi ecosystem currently has $8.6 billion locked
                      up across its many platforms. Solana is now sixth in the
                      rankings, after Ethereum, Terra, Avalanche, and Fantom.
                    </p>
                    <p>
                      Solana's three most essential platforms are the
                      decentralized exchange Serum, the available liquidity
                      mining platform Quarry, and the Solana staking platform
                      Marinade Finance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingEight">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <h2> 3D Metaverse Soland city</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      A metaverse is a digital environment that combines
                      physical, augmented, and virtual reality into a single
                      online area. 3D metaverse soland city model will have a
                      building
                    </p>
                    <p>
                      Each DeFi service has its building; for example, staking
                      has its building, farming has its building, and lending
                      has its building. New projects will have their level when
                      they join, allowing the structures to rise taller than we
                      could fathom in real life.
                    </p>
                    <p>
                      Holders of DINT will be able to swap their tokens for
                      Soland Tokens and receive a bonus!
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingNine">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      <h2> Soland City Collection </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseNine"
                  className="collapse"
                  aria-labelledby="headingNine"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      The first NFT project entered the market in 2017. The
                      ERC721 token standard entered into force in early 2018.
                      Over the last three to four years, the advent of
                      non-fungible tokens as a technological paradigm has
                      attracted investors and crypto enthusiasts. The general
                      crypto industry had a great surge in 2020, prompting the
                      sub-domain of NFTs to rise even quicker, nearly
                      exponentially.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingTen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      <h2> • Art Ownership </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTen"
                  className="collapse"
                  aria-labelledby="headingTen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      NFTs (non-fungible tokens) are blockchain-based digital
                      certificates linked to a single digital asset. In Soland
                      city collection, NFTs will prove your art ownership and
                      your ownership in Metaverse buildings and floors and
                      compute profit sharing
                    </p>
                    <h6>• Defi Expansion</h6>

                    <p>
                      Because of the spike in popularity of DeFi platforms and
                      the NFT wave, fundamental adjustments in how creative
                      labor is paid, decentralized networks have received much
                      attention in the last two years. Digital assets have
                      always been a difficult asset className, but NFTs
                      considerably elevate the stakes. Baking, our DeFi
                      extension that comprises cross-staking and farming of
                      NFTs, Tokens, and Liquidity Pool Tokens, is a pure
                      combination where the investor may benefit the most.
                    </p>

                    <h6>• Amount</h6>
                    <p>
                      Solana-based NFTs gained significance after Ethereum, the
                      most popular blockchain for NFTs, had extremely high
                      transaction fees in the second half of 2021. Each NFT has
                      a set quantity of Soland Tokens (100, 150, 200, 250, 500,
                      or 1000 Tokens)
                    </p>
                    <h6>• Pixel Gems</h6>
                    <p>
                      Pixel Gems will increase the APY and let you receive
                      rewards by staking your Soland tokens. You may stake your
                      tokens by delegating them to validators, who process
                      transactions and operate the network.
                    </p>
                    <p>
                      Delegating a stake is a shared-risk, shared-reward
                      financial concept that may generate long-term benefits to
                      token holders. This is accomplished by coordinating the
                      financial incentives of token holders (delegators) and the
                      validators to whom they delegate.
                    </p>
                    <h6>• Liquidity Mining layer</h6>
                    <p>
                      Liquidity mining is a decentralized financial mechanism in
                      which participants donate a percentage of their
                      cryptocurrency assets to numerous liquidity pools in
                      return for tokens and fees. When farming Soland Tokens,
                      the Liquidity Miner layer will increase the APY.
                    </p>
                    <h6>• The lending of NFT's</h6>
                    <p>
                      What if you could borrow money using your NFTs as
                      collateral? This would open the door to a slew of new
                      habits, such as borrowing money to pay for lunch or taxes!
                      Alternatively, you could utilize your borrowed stables to
                      purchase even more NFTs! By lending your nfts, you can get
                      tokens.
                    </p>
                    <h6>• Non-Fungible Liquidity </h6>
                    <p>
                      The word "liquidity" is used in the securities market. It
                      specifies how quickly a company's assets may be converted
                      into cash. This is a critical issue when it comes to a
                      company's worth. It's crucial because it lets investors
                      put money into a firm, knowing that they'll be able to
                      sell their shares for cash fast. Using our liquidity
                      platform, you may instantaneously buy, sell, or earn a
                      yield on your NFTs.
                    </p>
                    <h6>• Voting in the best interests of the community.</h6>
                    <h6>• VIP access to the Metaverse.</h6>
                    <p>
                      <q>Tokenomics</q> should be rewarded. The second sale pays
                      out to the first NFT holder. It then chose one holder at
                      random to get 10% of each sale. When the collection is
                      entirely sold out, the jackpot money of 10% of the total
                      collection will be distributed to ten persons.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingEleven">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      <h2>
                        {" "}
                        Top-performing NFTs collections on Solana for 2022{" "}
                      </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseEleven"
                  className="collapse"
                  aria-labelledby="headingEleven"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      The term "non-fungible token" is becoming increasingly
                      prevalent. Non-volatile memory (NFT) regions process
                      billions of transactions per month.
                    </p>
                    <p>
                      The whole Solana ecosystem is witnessing a large spike in
                      demand as the gas charge on Ethereum rises. The Solana NFT
                      ecosystem expands and executes billions of transactions
                      every day. Projects are increasing because of Solana's
                      specialized marketplace and Solana-based NFT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingTel">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTel"
                      aria-expanded="false"
                      aria-controls="collapseTel"
                    >
                      <h2> • Degenerate Ape Academy </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTel"
                  className="collapse"
                  aria-labelledby="headingTel"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      According to Solanalysis, Degenerate Ape Academy is
                      Solana's most valuable NFT collection. To present, the
                      blue-chip enterprise has a market valuation of almost $503
                      million (at the time of writing). The exhibit features
                      10,000 "smoothest br/ained" apes displaying "degenerate
                      behavior." The NFT also offers its bearers utility and
                      exclusive access to the "Academy."{" "}
                    </p>
                    <p>
                      Like many other well-known companies, Degen Ape is
                      supported by a large community. It has more than 82,000
                      Twitter followers but just 18,000 Discord members. The
                      collection's qualities, uniqueness, and amazing 3D artwork
                      have contributed to its popularity among collectors..
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingTherteen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTherteen"
                      aria-expanded="false"
                      aria-controls="collapseTherteen"
                    >
                      <h2> • Monkey Business in Solana </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTherteen"
                  className="collapse"
                  aria-labelledby="headingTherteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      The second blue-chip NFT collection is Solana Monkey
                      Business. The SMB collection is made up of 5000 monkeys
                      who were produced at random and had a range of traits. By
                      providing special privileges and a common wallet to
                      holders, "The Monkeys" hope to create a large community
                      around Solana.{" "}
                    </p>
                    <p>
                      With a market capitalization of $60 million, the current
                      floor price is 59 SOL.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingFourteen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFourteen"
                      aria-expanded="false"
                      aria-controls="collapseFourteen"
                    >
                      <h2> • Aurory </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFourteen"
                  className="collapse"
                  aria-labelledby="headingFourteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      Aurory is a free-to-play desktop game that allows players
                      to trade over 10,000 NFT items. The Aurory program has
                      received funding from the Solana Foundation, Alameda
                      Research, and CMS.{" "}
                    </p>
                    <p>
                      The Aurory team is comprised of experts from the gaming
                      and cryptocurrency sectors. With prior employment
                      experience at Ubisoft, EA, and other reputable companies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingFiveteen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFiveteen"
                      aria-expanded="false"
                      aria-controls="collapseFiveteen"
                    >
                      <h2> • Frakt</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFiveteen"
                  className="collapse"
                  aria-labelledby="headingFiveteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      Frakt, unlike the other PFP projects, uses one-of-a-kind,
                      randomly created fractal art NFTs. They are available in
                      five various forms and four separate color palettes. The
                      collection, which also includes Degen Apes and Solana
                      Monkeys, has a total of 10,000 NFTs. Frakt token holders
                      can stake their tokens to get voting rights in the Frakt
                      DAO. Staking can also earn them the $FRKT utility and
                      governance token.{" "}
                    </p>
                    <p>
                      In addition, by playing the game's many modes, users may
                      win $AURY tokens. These tokens can then be exchanged on
                      exchanges and the Aurory marketplace. In the future, the
                      game will add governance features to the token. While it
                      hasn't had the same success as Axie Infinity in space, it
                      has accomplished numerous noteworthy feats
                    </p>
                  </div>
                </div>
              </div>

              <div className="card question">
                <div className="card-header" id="headingSixteen">
                  <h2 className="mb-0">
                    <button
                      className="btn  btn-block text-left collapsed questionbtn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSixteen"
                      aria-expanded="false"
                      aria-controls="collapseSixteen"
                    >
                      <h2> • SolPunks </h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSixteen"
                  className="collapse"
                  aria-labelledby="headingSixteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body questionbtn">
                    <p>
                      SolPunks allows collectors to add generative-profile art
                      to their collections at a lower cost. Although the quality
                      isn't the same, SolPunks is a one-of-a-kind experience.
                      The floor price, or average sale price, is presently at
                      12.6 SOL, and market capitalization is declining after
                      surpassing $50 million. It's also worth mentioning that
                      SolPunks has no affiliation with Larva Labs.{" "}
                    </p>
                    <p>
                      People who missed out on Crypto Punks are now interested
                      in adding a SolPunk to their collection. The community is
                      strong for Punks, and with more maturation, it will see
                      significant price appreciation in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>

      {/* /FAQS SECTION */}
      <section className="faqs">
        <div className="farHeading">
          <h1>FAQS</h1>
        </div>

        <div className="FAQS container ">
          <div className="accordion  " id="accordionExample">
            <div className="card question">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0  ">
                  <button
                    className="btn btn-link  btn-block text-left questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the Metaverse?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse "
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">
                  <p>
                    The Metaverse is extremely complex, yet very simple if you
                    want to explain it in a few words. It is an advanced version
                    of a virtual world that includes all the activities we
                    conduct in the traditional offline world. You will be
                    conducting business, socializing, and exploring this vast
                    world..{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card question">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is an NFT?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">
                  The NFT is very easy to explain, but also quite complex when
                  you get into the details. This is basically a digital
                  credential that allows you to show proof of ownership of a
                  digital purchase of any kind.
                </div>
              </div>
            </div>
            <div className="card question">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What makes NFT grow in value?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">
                  NFTs grow in value due to exposure and to community strength.
                  If an NFT is backed by a strong community, it already holds
                  more value if you seek to sell. The longer you hold on to your
                  NFT as the community grows, the more value it will gain over
                  the years simply due to the community value behind it. With
                  that said, there are many other factors that will alter the
                  value of your NFT, but that is the core principle.
                </div>
              </div>
            </div>

            <div className="card question">
              <div className="card-header" id="headingtwenty">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsetwenty"
                    aria-expanded="false"
                    aria-controls="collapsetwenty"
                  >
                    How much is collection of?
                  </button>
                </h2>
              </div>
              <div
                id="collapsetwenty"
                className="collapse"
                aria-labelledby="headingtwenty"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">8000</div>
              </div>
            </div>

            <div className="card question">
              <div className="card-header" id="headingtwentyOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsetwentyOne"
                    aria-expanded="false"
                    aria-controls="collapsetwentyOne"
                  >
                    What blockchain this project works on?
                  </button>
                </h2>
              </div>
              <div
                id="collapsetwentyOne"
                className="collapse"
                aria-labelledby="headingtwentyOne"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">Solana</div>
              </div>
            </div>

            <div className="card question">
              <div className="card-header" id="headingtwentyTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed questionbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsetwentyTwo"
                    aria-expanded="false"
                    aria-controls="collapsetwentyTwo"
                  >
                    How much price per mint?
                  </button>
                </h2>
              </div>
              <div
                id="collapsetwentyTwo"
                className="collapse"
                aria-labelledby="headingtwentyTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body questionbtn">0.8 sol</div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="container">
          <Form />
        </div>
        <SolandCityLogo/>

      </section>

      <div>
        {/* Footer components you can check codes in footer.jsx file */}
        <Footer handlesScroll={whitepaperscrollTop} sectionRef={whitepaper} />
      </div>
    </>
  );
};

export default Home;
