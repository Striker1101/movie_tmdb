"use client";

import React, { useState } from "react";
export default function page() {
  //   throw new Error(" failed to load data");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // Object.entries(query).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/user/sign-in";
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    // alert(`Is this your full name: ${result.data}`);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-1"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">
          USERNAME:
          <input type="username" required name="username" id="password" />
        </label>

        <label htmlFor="email">
          EMAIL:
          <input type="email" required name="email" id="email" />
        </label>

        <label htmlFor="password">
          PASSWORD:
          <input type="password" name="password" id="password" />
        </label>

        <label htmlFor="cpassword">
          CONFIRM PASSWORD:
          <input type="password" name="cpassword" id="cpassword" />
        </label>

        <input
          className="transition transform hover:scale-95 filter drop-shadow-lg p-0.5  bg-blue-400 text-white-400 rounded shadow-lg "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
