import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GamesPage from "./components/games.component";
import Homepage from "./components/home.component";
import AddGamesPage from "./components/addgames.component";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gamelist">
                  Gamelist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addgames">
                  Add new game
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Homepage} />
        <Route path="/gamelist" component={GamesPage} />
        <Route path="/addgames" component={AddGamesPage} />
      </div>
    </Router>
  );
}

export default App;
