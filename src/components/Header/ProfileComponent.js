import React from "react";
import "./HeaderComponent.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Profile from "../BodyComponents/Profile";

export default function ProfileComponent() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <Profile />
    </>
  );
}
