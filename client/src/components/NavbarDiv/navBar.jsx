import React from "react";

function Navbar() {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Medi</strong>Core
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Health institutions
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          polyclinics
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          HealthGuide
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </div>
    </div>
  );
}

export default Navbar;
