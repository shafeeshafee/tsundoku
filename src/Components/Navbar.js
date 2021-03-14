import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggle, totalItems }) => {
	return (
		<nav
			className="font-headings bg-offwhite z-40 top-0 flex justify-between items-center h-16 text-black shadow-sm header-font "
			role="navigation"
		>
			<Link to="/" className="flex items-center pl-8">
				<img alt="" className="h-10 mx-2 " />
				tsundoku
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
