import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.png";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <Sidebar />
        <a className="headerLogo" href="#home">
          <Image
            className="logoImg"
            src={logoImg}
            width={30}
            height={30}
            alt="logo"
          />
          <div className="headerLogoText">
            <h2>CleanZia</h2>
            <p>Cleaning Services Company</p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
