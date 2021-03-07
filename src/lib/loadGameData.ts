import { GameData } from "../types/GameData";
import { TileInstance } from "../types/TileInstance";
import { GAME_ID } from "./static";
import { store } from "./store";
import tileConfigs, { emptyTileConfig } from "../config/tiles";

export function loadGameData() {
  let localData = localStorage[`${GAME_ID}`];

  if (localData) {
    localData = JSON.parse(localData);
  } else {
    localData = {};
  }

  if (localData?.gameState) {
    // Must update configs with references to the actual objects
    const gameState: GameData = localData.gameState;

    updateTileConfigs(gameState.ownedTiles);
    updateTileConfigs(gameState.deckTiles);
    updateTileConfigs(gameState.gameTiles);

    store.state.gameData = localData.gameState;
  }
}

function updateTileConfigs(tiles: TileInstance[]) {
  for (const tile of tiles) {
    tile.config =
      tileConfigs.find((tileConfig) => {
        return tileConfig.id === tile.config.id;
      }) || emptyTileConfig;
  }
}
