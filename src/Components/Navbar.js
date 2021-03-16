import { useState, useCallback, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
	const [y, setY] = useState(window.scrollY);
	const [dropShadow, setDropShadow] = useState("");

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				console.log("scrolling up");
				setDropShadow("shadow");
			} else if (y < window.scrollY || y === window.scrollY) {
				console.log("scrolling down");
				setDropShadow("shadow-2xl");
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<nav
			className={`font-headings sticky bg-white z-40 top-0 flex justify-between items-center h-16 text-black shadow-sm header-font transition duration-1000 ease-in-out ${dropShadow}`}
			role="navigation"
		>
			<Link to="/" className="flex items-center pl-8 text-lg">
				<strong>tsundoku</strong>
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="pr-8 xl:flex md:block hidden">
				<Link className="hover:bg-secondary p-4 lowercase" to="/">
					Home
				</Link>
				<Link className="hover:bg-secondary p-4 lowercase" to="/bestsellers">
					bestsellers
				</Link>
				<Link className="hover:bg-secondary p-4 lowercase" to="/aboutus">
					about us
				</Link>
				<Link className="hover:bg-secondary p-4 lowercase" to="/mission">
					mission
				</Link>
				<Link className="hover:bg-secondary p-4 lowercase" to="/search">
					search
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
