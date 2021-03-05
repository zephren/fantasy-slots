import { tilesByName } from "../tiles";
import { GameData } from "../types/GameData";
import {
  addDeckTile,
  addOwnedTile,
  buildDeck,
  nextTaxPeriodDay,
  setInitialGameTiles,
} from "./game";
import { store } from "./store";

function addTile(name: string) {
  const tileConfig = tilesByName.get(name);
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
    currentTaxPeriod: 0,
    currentTaxPeriodDay: 0,
    roundEnded: false,
  };

  store.state.gameData = gameData;

  addTile("Coal");
  addTile("Dagger");
  addTile("Key");
  addTile("Small Chest");
  addTile("Medium Chest");

  buildDeck();

  setInitialGameTiles();

  nextTaxPeriodDay();
}
