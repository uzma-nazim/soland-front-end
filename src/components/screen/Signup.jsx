import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../../styles/SignUp.css"
import { toast } from 'react-toastify';
import Toast from "./Toast";
import logo from "./img/solandLogo.png";
import { NavLink } from 'react-router-dom';
import bar from "./img/bar.png"
import Header from './header';
import Footer from './footeer';
import BASE_URI from '../../core';



const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setpassword] = useState("");

    // const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const styles = {
        visibility: "hidden",

    }
    const styles2 = {
        visibility: "visible",

    }
    const [toggleStyles, settoggleStyles] = useState(styles)
    const [toggle, settoggle] = useState(true)


    const Toggel = () => {
        settoggle(!toggle)

        toggle == true ? settoggleStyles(styles2) : settoggleStyles(styles)
    }


    const navigate = useNavigate();

    const userObj = {
        username,
        email,
        contact,
        password,
    };


    // Form Submission Handler....
    const submitHandler = (e) => {

        e.preventDefault();

        setLoading(true);

        if (!username || !email || !contact || !password) {

            toast.error("Required Field's are missing", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            setLoading(false);

        }

        else {

            console.log("Welcome to Soland", { userObj })

            axios.post(`${BASE_URI}/api/signup`, userObj)

                .then((res) => {
                    if (res.data.message === "Email address is already exist.") {

                        console.log("Email address already exists.");
                        toast.error('Email Address already exists', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        

                        toast.success('Successfully Registered', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });

                        setUsername("")
                        setEmail("")
                        setContact("")
                        setpassword("")

                        setTimeout(() => navigate("/login"), 2000)
                    }


                    setLoading(false);

                    // console.log(res);

                })

                .catch((err) => {
                    console.log("err");
                });
        };
    };

    // const toggleHandler = () => {
    //     setIsChecked(!isChecked)
    // };

    return (
        <>




            <Header />


            {/*Form  */}

            <div className="signup-container">
                <br /><br /><br /><br />
                <div className="signup-heading">

                    <h1 data-aos="fade-up"
                        data-aos-duration="3000">SignUp</h1>
                </div>

                <div className="signup-body-container" data-aos="fade-up"
                    data-aos-duration="3000">

                    <div className="signup-body">



                        <form className="signup-form" onSubmit={submitHandler}>

                            <input

                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <br />
                            <input

                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <input

                                type="number"
                                placeholder="Contact Number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <br />
                            <input

                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <br />

                            {
                                loading ? <div className="spinner-border" role="status" style={{
                                    margin: '0 auto',
                                    color: '#a812ad'
                                }}>
                                    <span

                                        className="sr-only">Loading...</span>
                                </div>


                                    : <button className="btnstyle">Signup</button>
                            }



                            <br />
                            {/* <p className="redirectPage">Already a Member?&nbsp;&nbsp;
                        <button className="Log" onClick={() => navigate("/login")}>Login here</button></p> */}
                        </form>
                    </div>
                </div>

            </div>

            <Footer/>

            <Toast />

        </>

    )
};

export default Signup;