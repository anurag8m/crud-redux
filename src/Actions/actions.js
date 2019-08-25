export const SET_GAMES = "SET_GAMES";

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  };
}

export function fetchGames() {
  return dispatch => {
    fetch("http://localhost:4000/api/games")
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)));
  };
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function saveGame(data) {
  return dispatch => {
    return fetch("http://localhost:4000/api/games", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
  };
}
