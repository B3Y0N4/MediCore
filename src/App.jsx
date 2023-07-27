import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./components/NavbarDiv/navBar";

import Home from "./pages/Home";
import Institutions from "./pages/Institutes";
import Polyclinics from "./pages/Polyclinics";
import Guide from "./pages/Guide";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FourOhFour from "./pages/FourOhFour";
import SearchDiv from "./components/SearchDiv/searchdiv";

const App = () => {
	return (
		<div className="w-[85%] m-auto bg-white">
			<Router>
				<Routes>
					<Route element={<FourOhFour />} />
					<Route path="/" element={<Home />}>
						<Route index element={<SearchDiv/>}/>
						<Route path="Institutes" element={<Institutions />} />
						<Route path="Polyclinics" element={<Polyclinics />} />
						<Route path="Guide" element={<Guide />} />
					</Route>
					<Route path="Login" element={<Login />} />
					<Route path="Register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
