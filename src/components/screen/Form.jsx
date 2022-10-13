import axios from "axios";
import React, { useState } from "react";
import BASE_URI from "../../core";
import "../../styles/About.css";
import { toast } from "react-toastify";
import Toast from "./Toast";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [massage, setmassage] = useState("");
  const [loader, setloader] = useState(false);

  const reviewSend = (e) => {
    e.preventDefault();

    const reviewBody = {
      name,
      email,
      massage,
    };

    if (!name || !email || !massage) {
      toast.error("Required field are empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
    setloader(true);

      axios
        .post(`${BASE_URI}/api/review`, reviewBody)
        .then((res) => {
          setloader(false);
          setname("");
          setemail("");
          setmassage("");

          toast.success("Massage Sent Successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          setname("");
          setemail("");
          setmassage("");

          toast.error("ERROR", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <>
      <div className="wrapper ">
        <div
          style={{ width: "90%" }}
          className="about-text"
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <form
            onSubmit={reviewSend}
            data-aos="fade-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="input"
              type="text"
              placeholder="Name"
            />
            <br />
            <br />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="input"
              type="email"
              placeholder="Email"
            />
            <br />
            <br />
            <textarea
              className="input"
              value={massage}
              onChange={(e) => setmassage(e.target.value)}
              name=""
              id=""
              cols="40"
              rows="3"
              placeholder="Message..!!"
            ></textarea>
            <br />
            <br />
            <button type="submit" className="snedbtn">
              {loader ? (
                <>
                  <div
                    className="spinner-border"
                    role="status"
                    style={{
                      margin: "0 auto",
                      color: "#ffff",
                    }}
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <Toast />
    </>
  );
};

export default Form;
