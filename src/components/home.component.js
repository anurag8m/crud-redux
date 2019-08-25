import React, { Component } from "react";
import { connect } from "react-redux";
import GamesList from "./gameslist.component";
import PropTypes from "prop-types";
import { fetchGames } from "../Actions/actions";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>This is Homepage</h1>
      </div>
    );
  }
}

export default Homepage;
