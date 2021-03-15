import { GAME_ID } from "./static";
import { store } from "./store";

export function saveGameData() {
  let localData = localStorage[`${GAME_ID}`];

  if (localData) {
    localData = JSON.parse(localData);
  } else {
    localData = {};
  }

  // Simple clone of just the data
  const gameState = JSON.parse(JSON.stringify(store.state.gameData));

  replaceTileConfigs(gameState.ownedTiles);
  replaceTileConfigs(gameState.deckTiles);
  replaceTileConfigs(gameState.gameTiles);
  replaceTileConfigs(gameState.tilesToPick);

  localData.gameState = gameState;
  localData.saveDate = new Date();

  localStorage[`${GAME_ID}`] = JSON.stringify(localData);
}

function replaceTileConfigs(tiles: any[]) {
  for (const tile of tiles) {
    tile.config = { id: tile.config.id };
  }
}
