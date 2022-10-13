import React from "react";

const Table = ({ header, data }) => {
  
  const { name, email, contact  ,caption} = header;
  return (
    <>

    { !data ? <>
        <div className="text-center loaderConatiner ">
      <div
        className="spinner-border"
        role="status"
        style={{
          color: "#a812ad",
          width:"100px",
          height:"100px",
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    </>: <>
      
      <div className="table-responsive">
        <table className="table">
          <caption> Total {caption}  {data? data.count:""}</caption>
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">{name}</th>
              <th scope="col">{email}</th>
              <th scope="col">{contact}</th>
            </tr>
          </thead>
          <tbody>
      
            {data
              ? data.users.map((elment, index) => {
                  const { contact, username, email ,massage,name } = elment;
                  return (
                    <>
                      <tr key={index}>
                        {/* <th scope="row">{index}</th> */}
                        <td>{username ? username: name}</td>
                        <td>{email}</td>
                        <td>{contact?contact:massage }</td>
                      </tr>
                    </>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
        
    
    </>}

    </>
  );
};

export default Table;
