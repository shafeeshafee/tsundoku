import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import BestSellers from "./Pages/BestSellers";
import SearchBooks from "./Pages/SearchBooks";

function App() {
	return (
		<Router>
			<nav>
				<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/bestsellers">Best Sellers</NavLink>
				<NavLink to="/aboutus">About Us</NavLink>
				<NavLink to="/search">Search</NavLink>
				</div>
			</nav>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/bestsellers">
					<BestSellers />
				</Route>
				<Route exact path="/aboutus">
					<AboutUs />
				</Route>
				<Route exact path="/search">
					<SearchBooks />
				</Route>
				<Redirect to="/" component={ErrorPage} />
			</Switch>
    	</Router>
	)
}

export default App;
