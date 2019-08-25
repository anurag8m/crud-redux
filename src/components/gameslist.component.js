import React from "react";
import PropTypes from 'prop-types';
export default function GamesList({ games }) {
  const emptyMessage = <p>No Games Found</p>;

  const gameList = <p>game List Found</p>;
  return <div>{games.length === 0 ? emptyMessage : gameList}</div>;
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};
