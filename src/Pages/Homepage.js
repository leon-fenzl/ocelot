import React from "react";
import Navbar from "../Components/CompNavbar.js";
import Footer from "../Components/CompFooter.js";
import "../Styles/home.css"
import logo from "../imgs/logo.png";
export default function Homepage(){
  return(
      <div className="home-grid">
        <div className="tops"></div>
        <div className="hempty1"></div>
        <div className="contents">
            <img src={logo}/>
            <p className="email">OCELOTGAMEDEVSTUDIO@GMAIL.COM</p>
        </div>
        <div className="hempty2"></div>
        <div className="bottoms"></div>
      </div>
  );
}