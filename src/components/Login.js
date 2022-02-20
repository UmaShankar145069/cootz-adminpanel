import React from "react";
import "./Login.css";
import Logo from "../assets/images/logo.png";
import userLogo from "../assets/images/user-logo.png";
import passwordLogo from "../assets/images/password-logo.png";
import ellipse from "../assets/images/ellipse.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* cootz logo */}
      <img
        className="logo-img"
        src={Logo}
        alt="cootz-logo"
        style={{ width: 89, height: 72 }}
      />
      <p className="logo-title">COOTZ</p>

      {/* login section */}
      <div className="login-container">
        <h1 id="heading">LOGIN</h1>
        <form id="login-form" className="login-form">
          <img src={userLogo} alt="user-logo" />
          <input
            className="field"
            type="email"
            name="email"
            id="email"
            placeholder="Username"
            required
          />
          <br />
          <img src={passwordLogo} alt="user-logo" />
          <input
            className="field"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <br />
          <NavLink to="/referal">
            <input type="submit" value="Login" id="login" />
          </NavLink>
        </form>
        <img src={ellipse} alt="ellipse" className="ellipse-img" />
      </div>
    </>
  );
};

export default Login;
