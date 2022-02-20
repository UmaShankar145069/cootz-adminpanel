import React from "react";
import "./HeaderComponent.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Contest from "../BodyComponents/Contest";

export default function ContestComponent() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <Contest />
    </>
  );
}
