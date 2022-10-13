import React, { useEffect, useRef, useState } from "react";
import Footer from "./footeer";
import Header from "./header";

import "../../styles/cart.css";
import axios from "axios";
import { ImCross } from "react-icons/im";
import BASE_URI from "../../core";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import Toast from "./Toast";

const Cart = () => {
  const [cartdata, setcartdata] = useState();

  const [toggle, settoggle] = useState(true);
  const [payment, setpayment] = useState();
  const [tokenVal, settokenVal] = useState();
  const [diimount, setdiimount] = useState(false);
  const [indexVal, setindexVal] = useState();

  const didMount = useRef(false);

  const getdata = async () => {
    const user_id = JSON.parse(localStorage.getItem("user"));

    if (user_id) {
      const { data } = user_id;

      await axios
        .post(`${BASE_URI}/api/get-cart${data._id}`)
        .then((response) => {
          const { data } = response;
          setcartdata(data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getdata();
    setindexVal();
  }, [toggle]);

  const deletepkg = (_id) => {
    settoggle(!toggle);

    axios
      .delete(`${BASE_URI}/api/delete-cart${_id}`)
      .then((result) => {})
      .catch((err) => {});
  };

  const setdata = (datarcv) => {
    setpayment(datarcv);
  };

  const handleToken = (token) => {
    settokenVal(token);
  };

  useEffect(() => {
    if (diimount == true) {
      setindexVal(payment.index);

      axios
        .post(`${BASE_URI}/api/payment`, { tokenVal, payment })
        .then((paymentSucces) => {
          getdata();

          const { data } = paymentSucces;
          if (data.result == "success") {
            console.log(data.result);

            toast.success("Payment sent successfully", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.error("Error", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      deletepkg(payment._id);
    } else {
      setdiimount(true);
    }
  }, [tokenVal]);

  return (
    <>
      <Header />
      <div className="bg-container">
        <br />
        <br />
        {!cartdata || cartdata.data.length == 0 ? (
          <>
            <div className="emptyCart">
              <div className="emptyheading">
                <div className="h1">Your Cart is empyt</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="cartContainer">
              {cartdata
                ? cartdata.data.map((element, index) => {
                    const { name, price, img, _id } = element;

                    return (
                      <>
                        <div
                          key={index}
                          className="cart-box"
                          data-aos="flip-left"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                        >
                          <div
                            onClick={() => deletepkg(element._id)}
                            className="croossAligmemnt"
                          >
                            <div className="cross">
                              <ImCross style={{ fontWeight: 400 }} />
                            </div>
                          </div>
                          <img src={img} alt="Founder & Developer" />
                          <div className="card1-content">
                            <h1>{name}</h1>
                            <h2>${price} </h2>
                            {/* <Stripe  pkgName={name } pkgPrice={price}/> */}
                            <StripeCheckout
                              stripeKey={process.env.REACT_APP_KEY}
                              amount={price * 100}
                              name={name}
                              token={handleToken}
                            >
                              <button
                                className="btnstyle"
                                onClick={() =>
                                  setdata({ name, price, _id, index })
                                }
                              >
                                {indexVal == index ? (
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
                                  "Buy Now"
                                )}
                              </button>
                            </StripeCheckout>

                            <br />
                            <StripeCheckout
                              stripeKey={process.env.REACT_APP_KEY}
                              amount={
                                name === "Basic Package" ? 190 * 100 : 240 * 100
                              }
                              name={name}
                              token={handleToken}
                            >
                              <button
                                className="btnstyle"
                                onClick={() =>
                                  setdata({
                                    name:  name === "Basic Package" ?"Basic Package" :"Pro Package",
                                    price: name === "Basic Package" ? 190 : 240,
                                    _id,
                                    index,
                                  })
                                }
                              >
                                Rent
                              </button>
                            </StripeCheckout>
                          </div>
                        </div>
                      </>
                    );
                  })
                : null}
            </div>
          </>
        )}
        <br />
        <br />
      </div>
      <div className="footerBottm">
        <Footer />
      </div>
      <Toast />
    </>
  );
};

export default Cart;
