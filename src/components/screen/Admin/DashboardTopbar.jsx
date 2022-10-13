import React from "react";
import logo from "../img/solandLogo.png";
import "../../../styles/adminDashboard.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const DashboardTopbar = () => {
  const [cookie, setcookie ,  removeCookie] = useCookies()
  const navigate = useNavigate()
  const logout = (e)=>{
      e.preventDefault();
      console.log("chala");
      removeCookie("Token")
      navigate("/")


  }
  return (
    <>
    
      <div className="adiminTopbar  ">
        <div  >
            <a href="/"> <img width={"100px"}  src={logo} alt="" /></a>
        </div>
        <div>
          <div>
            <div className="dropdown">
              <a
                className="btn   mydrwop dropdown-toggle"
                href="/admin/dashboard"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dashboard
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/admin/dashboard">
                  Users
                </a>
                <a className="dropdown-item" href="/admin/reviews">
                  Feedback
                </a>
                <a onClick={logout} className="dropdown-item" href="JavaScript:void(0)">
                  Logout
                </a>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DashboardTopbar;
