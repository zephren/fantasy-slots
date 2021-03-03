import { GAME_ID } from "./static";
import { store } from "./store";

export function saveGameData() {
  let localData = localStorage[`${GAME_ID}`];

  if (localData) {
    localData = JSON.parse(localData);
  } else {
    localData = {};
  }

  // Need to remove the config objects from (should clone things first)
  localData.gameState = store.state.gameData;

  localStorage[`${GAME_ID}`] = JSON.stringify(localData);
}
