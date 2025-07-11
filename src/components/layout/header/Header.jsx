import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.png";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";
import ActionButtons from "./ActionButtons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className={`headerContainer`}>
        {/* sidebar sheet */}
        <Sidebar />

        {/* header logo */}
        <Link className="headerLogo" href="/">
          <Image
            className="logoImg"
            src={logoImg}
            width={30}
            height={30}
            alt="logo"
          />
          <div className="headerLogoText">
            <h2>
              Clean<span>Zian</span>
            </h2>
            <p>Cleaning Services Company</p>
          </div>
        </Link>

        {/* main nav */}
        <MainNav />

        {/* action buttons */}
        <ActionButtons />
      </div>
    </header>
  );
};

export default Header;
