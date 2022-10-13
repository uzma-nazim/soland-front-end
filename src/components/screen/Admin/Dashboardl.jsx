import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URI from "../../../core";
import DashboardTopbar from "./DashboardTopbar";
import Table from "./Table";

const Dashboard = () => {
  const [user, setuser] = useState()
  const [toggle, settoggle] = useState(false)
  const tbaleHeader = {
    name: "User Name",
    email: "Email",
    contact: "Contact Number",
    caption :"Users"
  };

  useEffect(()=>{

    axios.get(`${BASE_URI}/api/get-all-user`)
    .then((res) => {
      const {data} = res
      setuser(data)
      settoggle(true)
      
    })
    .catch((err) => {
      console.log(err);
    });
  } ,[toggle])

  return (
    <>
      <DashboardTopbar />
      <div className="dasboardContent">
        <br />
        <br />
        <div className="dashboard-heading">
          <h1 className="h1" style={{ textAlign: "start" }}>
            Dashboard
          </h1>
        </div>
        <br />
        <br />
        <div className="tableContainer">
          {/* <Table header={tbaleHeader} data={user}  /> */}
          {user  && user.users.length ==0 ? (
            <>
              <div className="emptybox">
                <h1 className="h1">No Users yet</h1>
              </div>
            </>
          ) : (
            <>
              <Table header={tbaleHeader} data={user} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
