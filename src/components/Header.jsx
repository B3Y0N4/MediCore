import React from "react";
import Navbar from "./Navbar";
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="input-group mb-3 gap-4">
        <input
          type="text"
          className="form-control"
          placeholder="Aramak istediğiniz konuyu girin"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-success d-flex align-items-center justify-content-between "
          type="button"
          id="button-addon2"
        >
          Ara
          <BsSearch/>
        </button>
      </div>
    </header>
  );
};

export default Header;
