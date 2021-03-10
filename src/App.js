import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import BestSellers from "./Pages/BestSellers";
import SearchBooks from "./Pages/SearchBooks";
import Navbar from "./Components/Navbar";
import Definition from "./Pages/Definition";

function App() {
	return (
		<Router>
			<Navbar />
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
	);
}

export default App;
