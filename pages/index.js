import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = "http://localhost:3000/api/getdata";
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      // console.log(res.data);
      setDataResponse(res.data);
    }
    getPageData();
  }, []);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [dataResponse, setDataResponse] = useState([]);
  console.log(dataResponse);

  const { firstName, lastName, username } = userInfo;

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      firstName: "",
      lastName: "",
      username: "",
    });
  };

  return (
    <div>
      <h1 className=" text-5xl bold underline border mb-5">
        This is Michelles Project
      </h1>
      <div
        id="form"
        className="outline outline-solid border-2 h-60 w-96 
       flex flex-col"
      >
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="mr-1">First Name</label>
            <input
              name="firstName"
              className="outline outline-2 border-solid rounded "
              id="name"
              type="text"
              value={firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-5">
            <label className="mr-1">Last Name</label>
            <input
              name="lastName"
              className="outline outline-2 border-solid rounded "
              id="Last Name"
              type="text"
              value={lastName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-5">
            <label className="mr-1">Username</label>
            <input
              className="outline outline-2 border-solid rounded"
              name="username"
              id="name"
              type="text"
              value={username}
              onChange={handleChange}
            ></input>
          </div>
          <button
            className="outline rounded-full p-1 ml-10"
            onSubmit={handleSubmit}
          >
            Submit Info Here
          </button>
        </form>
      </div>

      <div className="outline outline-3 h-96 w-96 rounded-md">
        {dataResponse.map((data) => {
          return (
            <div
              key={data.user_id}
              className="outline outline3 rounded-lg my-4 w-7/12"
            >
              <h2>User Name: {data.user_name}</h2>
              <h3>Last Name: {data.last_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
