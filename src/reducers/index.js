/** @format */

import {
  LEADERBOARD_LOADED,
  LOGGED_IN,
  MOVE_OBJECTS,
  SHOOT,
  START_GAME,
} from "../actions";
import moveObjects from "./moveObjects";
import startGame from "./startGame";
import shoot from "./shoot"

const initialGameState = {
  currentPlayer: null,
  players: null,
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  cannonBalls: [],
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      return shoot(state, action);
    case LEADERBOARD_LOADED:
      return {
        ...state,
        players: action.players,
      };
    case LOGGED_IN:
      return {
        ...state,
        currentPlayer: action.player,
      };
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;
