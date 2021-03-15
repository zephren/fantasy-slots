import { getTileConfigByName, TileConfigNames } from "../config/tiles";
import { GameData } from "../types/GameData";
import { addDeckTile, addOwnedTile, buildDeck, nextTaxPeriodDay, setInitialGameTiles } from "./game";
import { store } from "./store";
import { updateGameData } from "./updateGameData";

function addTile(name: TileConfigNames) {
  const tileConfig = getTileConfigByName(name);
  addOwnedTile(tileConfig);
  addDeckTile(tileConfig?.id);
}

export function newGame() {
  const gameData = updateGameData({});

  store.state.gameData = gameData;
  store.state.gameData.tilesToPick = [];

  addTile("Coal");
  addTile("Pickaxe");
  addTile("Rock");
  // addTile("Key");
  // addTile("Small Chest");
  // addTile("Medium Chest");

  buildDeck();
  setInitialGameTiles();
  nextTaxPeriodDay();
}
