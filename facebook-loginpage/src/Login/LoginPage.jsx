import React from "react";
import "./loginpage.module.css";

export default function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <dev className="title">
          Facebook helps you connect and share
          <br></br> with the people in your life.
        </dev>
      </div>
      <dev className="LoginContainer">
        <div className="Logindetails">
          <input type="email" placeholder="Email address or phonenumber" />
          <br></br>
          <input type="Password" placeholder="Password" />
          <br></br>
          <button className="btn">Login</button>
        </div>
        <div className="forget">
          <a href="forget">Forgotten Password</a>
          <br></br>
          <button className="btns">Create New Account</button>
        </div>
        <br></br>
        <div className="page">
          <a href="createpage">Create a Page</a> for a celebrity, brand or
          business.
        </div>
      </dev>
    </div>
  );
}
