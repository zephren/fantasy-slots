import { GameData } from "../types/GameData";

export function updateGameData(gameData: any) {
  const d: GameData = gameData;

  d.superUser = d.superUser ?? false;
  d.boardTiles = d.boardTiles ?? [];
  d.ownedTiles = d.ownedTiles ?? [];
  d.deckTileIds = d.deckTileIds ?? [];
  d.deckTiles = d.deckTiles ?? [];
  d.gameTiles = d.gameTiles ?? [];
  d.tilesToPick = d.tilesToPick ?? [];
  d.gridWidth = d.gridWidth ?? 3;
  d.gridHeight = d.gridHeight ?? 3;
  d.boardValue = d.boardValue ?? 0;
  d.totalCoins = d.totalCoins ?? 0;
  d.savedCoins = d.savedCoins ?? 0;
  d.lastTotalCoins = d.lastTotalCoins ?? 0;
  d.currentTaxPeriod = d.currentTaxPeriod ?? 0;
  d.currentTaxPeriodDay = d.currentTaxPeriodDay ?? 0;
  d.roundEnded = d.roundEnded ?? false;
  d.events = d.events ?? [];
  d.modal = d.modal ?? "Intro";

  /**
   * Flags
   */
  if (!d.flags) d.flags = {} as any;

  // Should be find to leave flags that default to "false" as "undefined"
  // "true" defaults should definitely be initialized
  // if (updateGameData.flags.introDismissed === undefined) {
  //   updateGameData.flags.introDismissed= false;
  // }

  /**
   * Counters
   */
  if (!d.counters) d.counters = {} as any;

  const { counters } = d;

  counters.totalSpins = counters.totalSpins ?? 0;
  counters.totalRounds = counters.totalRounds ?? 0;

  return d;
}
