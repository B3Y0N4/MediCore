import React, { useEffect } from "react";
import Navbar from "./components/NavbarDiv/navbar";
import SearchDiv from "./components/SearchDiv/searchdiv";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3001/api").then((res) => console.log(res));
  });

  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <SearchDiv />
    </div>
  );
};

export default App;
