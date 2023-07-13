import React from "react";
import Navbar from "./components/NavbarDiv/navbar";
import SearchDiv from "./components/SearchDiv/searchdiv";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <SearchDiv />
    </div>
  );
};

export default App;
