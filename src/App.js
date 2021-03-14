import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Mission from "./Pages/Mission";
import ErrorPage from "./Pages/ErrorPage.jsx";
import BestSellersPage from "./Pages/BestSellersPage.jsx";
import SearchBooksPage from "./Pages/SearchBooksPage.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route exact path="/mission">
          <Mission />
        </Route>
        <Route exact path="/search">
          <SearchBooksPage />
        </Route>
        <Redirect to="/" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
