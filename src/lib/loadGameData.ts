import { GAME_ID } from "./static";

export function loadGameData() {
  let localData = localStorage[`${GAME_ID}`];

  if (localData) {
    localData = JSON.parse(localData);
  } else {
    localData = {};
  }

  if (localData?.gameState) {
    // Must update configs with references to the actual objects
    // store.state.gameData = localData.gameState;
  }
}
