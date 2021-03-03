import { tilesByName } from "../tiles";
import { GameData } from "../types/GameData";
import {
  addDeckTile,
  addOwnedTile,
  buildDeck,
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
  };

  store.state.gameData = gameData;

  addTile("Coal");
  addTile("Dagger");
  addTile("Key");
  addTile("Small Chest");
  addTile("Medium Chest");

  buildDeck();

  setInitialGameTiles();
}
