import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReferalComponent from "./components/Header/ReferalComponent";
import ContestComponent from "./components/Header/ContestComponent";
import ProfileComponent from "./components/Header/ProfileComponent";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/referal" element={<ReferalComponent />} />
        <Route path="/contest" element={<ContestComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
