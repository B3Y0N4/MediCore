import React from "react";
import Navbar from "../components/NavbarDiv/navBar";
import SearchDiv from "../components/SearchDiv/searchdiv";
import {Outlet} from 'react-router-dom';
function Home() {
	return (
		<div>
			<Navbar/>
			<Outlet/>
		</div>
	);
}

export default Home;
