import { nextTaxPeriodDay, setInitialGameTiles } from "./game";
import { store } from "./store";

export function newRound() {
  const { gameData } = store.state;

  gameData.currentTaxPeriod = 0;
  gameData.currentTaxPeriodDay = 0;
  gameData.roundEnded = false;
  gameData.boardTiles = [];
  gameData.totalCoins = 0;

  setInitialGameTiles();
  nextTaxPeriodDay();

  store.state.tilesToPick = [];

  store.update();
}
