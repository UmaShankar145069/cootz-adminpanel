import React from "react";
import "./HeaderComponent.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Referal from "../BodyComponents/Referal";

export default function ReferalComponent() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <Referal />
    </>
  );
}
