import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="credLogo"
          className="header-logo"
        />
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
