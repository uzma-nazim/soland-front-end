import React, { useState } from "react";
import axios from "axios";
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "./Toast";

import Header from "./header";
import Footer from "./footeer";
import BASE_URI from "../../core";
import { useCookies } from "react-cookie";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies("");
  const navigate = useNavigate();

  let expires = new Date();
  expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);

  const loginuphandle = (e) => {
    e.preventDefault();

    setLoading(true);

    const userobj = {
      email,
      password,
    };

    axios
      .post(`${BASE_URI}/api/login`, userobj)
      .then((res) => {
        if (res.data.token) {
          setLoading(false);

          setCookie("Token", res.data.token, { expires ,  });
          toast.success("Loggedin Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          
          setTimeout(() => navigate("/admin/dashboard"), 1500);
        } else {
          if (res.data.message == "user successfully login") {
            localStorage.setItem("user", JSON.stringify(res.data));

            toast.success("Loggedin Successfully", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
            setLoading(false);
            setTimeout(() => navigate("/vr-office"), 1500);
          } else {
            toast.error("Invalid Credentials", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });

            setLoading(false);
          }
        }
      })
      .catch((err) => {
        toast.error("Server is disconnected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      });
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <br />
        <br />
        <br />
        <br />
        <div
          className="login-heading"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>Login</h1>
        </div>

        <div
          className="login-body-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="login-body">
            <form onSubmit={loginuphandle} className="login-form">
              <input
                type="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <br />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <br />

              {/* <button type="submit" className="loginBtn">Login</button> */}
              {loading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{
                    margin: "0 auto",
                    color: "#a812ad",
                  }}
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <button className="btnstyle">Login</button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Toast />
    </>
  );
};

export default Login;
