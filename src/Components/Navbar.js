import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-evenly">
			<div className="pt-5 font-headings flex justify-evenly w-screen bg-offwhite text-lg">
				<NavLink to="/">home</NavLink>
				<NavLink to="/bestsellers">best sellers</NavLink>
				<NavLink to="/aboutus">about us</NavLink>
				<NavLink to="/mission">mission</NavLink>
				<NavLink to="/search">search</NavLink>
		
			</div>
		</nav>
	);
};

export default Navbar;
