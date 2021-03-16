import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
	// position: fixed;
	// width: 100%;
	// z-index: 999;
	return (
		<div
			className={isOpen ? "grid grid-rows-2 w-full z-50 text-center items-center antialiased bg-darker text-white fixed" : "hidden"}
			onClick={toggle}
		>
			<Link className="py-4" to="/">
				home
			</Link>
			<Link className="py-4" to="/bestsellers">
				bestsellers
			</Link>
			<Link className="py-4" to="/aboutus">
				about us
			</Link>
			<Link className="py-4" to="/mission">
				mission
			</Link>
			<Link className="py-4" to="/search">
				search
			</Link>
		</div>
	);
};

export default Dropdown;
