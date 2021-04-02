import { saveGameData } from "../lib/saveGameData";
import { store } from "../lib/store";

export function endRound() {
  const { gameData } = store.state;

  gameData.boardTiles = [];
  gameData.roundEnded = true;
  gameData.savedCoins += gameData.totalCoins;
  gameData.lastTotalCoins = gameData.totalCoins;
  gameData.tilesToPick = [];

  store.update();

  saveGameData();
}
