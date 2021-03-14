import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Mission from "./Pages/Mission";
import ErrorPage from "./Pages/ErrorPage.jsx";
import BestSellersPage from "./Pages/BestSellersPage.jsx";
import SearchBooksPage from "./Pages/SearchBooksPage.jsx";
import Mission from "./Pages/Mission";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dropdown from "./Components/Dropdown";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", hideMenu);

		return () => {
			window.removeEventListener("resize", hideMenu);
		};
	}, [isOpen]);
	return (
		<Router>
			<Navbar toggle={toggle} />

			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/bestsellers">
					<BestSellersPage />
				</Route>
				<Route exact path="/aboutus">
					<AboutUs />
				</Route>
				<Route exact path="/search">
					<SearchBooksPage />
				</Route>
				<Route exact path="/mission">
					<Mission />
				</Route>
				<Route to="/" component={ErrorPage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
