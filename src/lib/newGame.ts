import { getTileConfigByName, TileConfigNames } from "../config/tiles";
import { GameData } from "../types/GameData";
import {
  addDeckTile,
  addOwnedTile,
  buildDeck,
  nextTaxPeriodDay,
  setInitialGameTiles,
} from "./game";
import { store } from "./store";

function addTile(name: TileConfigNames) {
  const tileConfig = getTileConfigByName(name);
  addOwnedTile(tileConfig);
  addDeckTile(tileConfig?.id);
}

export function newGame() {
  const gameData: GameData = {
    boardTiles: [],
    ownedTiles: [],
    deckTileIds: [],
    deckTiles: [],
    gameTiles: [],
    gridWidth: 3,
    gridHeight: 3,
    boardValue: 0,
    totalCoins: 0,
    savedCoins: 0,
    lastTotalCoins: 0,
    currentTaxPeriod: 0,
    currentTaxPeriodDay: 0,
    roundEnded: false,
    events: [],
  };

  store.state.gameData = gameData;
  store.state.tilesToPick = [];

  addTile("Coal");
  addTile("Dagger");
  addTile("Pickaxe");
  addTile("Rock");
  // addTile("Key");
  // addTile("Small Chest");
  // addTile("Medium Chest");

  buildDeck();
  setInitialGameTiles();
  nextTaxPeriodDay();
}
