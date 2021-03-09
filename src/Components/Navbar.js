import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex">
			<div className="font-headings flex justify-around w-screen bg-offwhite absolute">
				<NavLink to="/">home</NavLink>
				<NavLink to="/bestsellers">best sellers</NavLink>
				<NavLink to="/aboutus">about us</NavLink>
				<NavLink to="/search">search</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
