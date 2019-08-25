import React, { Component } from "react";
import { connect } from "react-redux";
import GamesList from "./gameslist.component";
import PropTypes from "prop-types";
import { fetchGames } from "../Actions/actions";

class GamesPage extends Component {
  componentDidMount() {
    // console.log(this.props.fetchGames());
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <GamesList games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(
  mapStateToProps,
  { fetchGames }
)(GamesPage);
