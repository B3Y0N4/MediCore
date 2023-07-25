import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Medi</strong>Core
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor"  onClick={() => navigate('/Institutes')}>
          Health institutions
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => navigate('/Polyclinics')}>
          Polyclinics
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => navigate('/Guide')}>
          HealthGuide
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => navigate('/Login')}>Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => navigate('/Register')}>
          Register
        </li>
      </div>
    </div>
  );
}

export default Navbar;
