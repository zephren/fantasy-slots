import { GameData } from "../types/GameData";

export function updateGameData(gameData: any) {
  const updateGameData: GameData = gameData;

  if (!updateGameData.superUser) {
    updateGameData.superUser = false;
  }

  if (!updateGameData.boardTiles) {
    updateGameData.boardTiles = [];
  }

  if (!updateGameData.ownedTiles) {
    updateGameData.ownedTiles = [];
  }

  if (!updateGameData.deckTileIds) {
    updateGameData.deckTileIds = [];
  }

  if (!updateGameData.deckTiles) {
    updateGameData.deckTiles = [];
  }

  if (!updateGameData.gameTiles) {
    updateGameData.gameTiles = [];
  }

  if (!updateGameData.tilesToPick) {
    updateGameData.tilesToPick = [];
  }

  if (!updateGameData.gridWidth) {
    updateGameData.gridWidth = 3;
  }

  if (!updateGameData.gridHeight) {
    updateGameData.gridHeight = 3;
  }

  if (!updateGameData.boardValue) {
    updateGameData.boardValue = 0;
  }

  if (!updateGameData.totalCoins) {
    updateGameData.totalCoins = 0;
  }

  if (!updateGameData.savedCoins) {
    updateGameData.savedCoins = 0;
  }

  if (!updateGameData.lastTotalCoins) {
    updateGameData.lastTotalCoins = 0;
  }

  if (!updateGameData.currentTaxPeriod) {
    updateGameData.currentTaxPeriod = 0;
  }

  if (!updateGameData.currentTaxPeriodDay) {
    updateGameData.currentTaxPeriodDay = 0;
  }

  if (!updateGameData.roundEnded) {
    updateGameData.roundEnded = false;
  }

  if (!updateGameData.events) {
    updateGameData.events = [];
  }

  if (!updateGameData.modal) {
    updateGameData.modal = "";
  }

  if (!updateGameData.flags) {
    updateGameData.flags = {} as any;
  }

  // Should be find to leave flags that default to "false" as "undefined"
  // "true" defaults should definitely be initialized
  // if (updateGameData.flags.introDismissed === undefined) {
  //   updateGameData.flags.introDismissed= false;
  // }

  return updateGameData;
}
