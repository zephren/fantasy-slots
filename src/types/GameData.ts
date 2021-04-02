import { TileInstance } from "./TileInstance";

export type GameEvent = {
  id: string;
  message: string;
};

export type GameDataFlags = {
  introDismissed: boolean;
};

export type GameDataCounters = {
  totalSpins: number;
  totalRounds: number;
};

export type GameSettings = {
  shuffleAnimationOn: boolean;
  boardScanSpeed: number;
};

export type GameData = {
  superUser: boolean; // Extra features for testing
  boardTiles: number[]; // Indexes of the game tile
  ownedTiles: TileInstance[]; // All tiles owned by playing the game (unique)
  deckTileIds: string[]; // Ids of the deck tiles
  deckTiles: TileInstance[]; // Tiles available to be played in the current game (unique)
  gameTiles: TileInstance[]; // Tiles created for the current game (multiples)
  tilesToPick: TileInstance[];
  gridWidth: number; // The current width
  gridHeight: number; // The current height
  gridWidthMax: number; // The max width
  gridHeightMax: number; // The max height
  boardValue: number;
  totalCoins: number;
  savedCoins: number; // The number of coins saved as rounds end
  lastTotalCoins: number; // The number of coins earned from the last round end
  currentTaxPeriod: number;
  currentTaxPeriodDay: number;
  roundEnded: boolean;
  events: GameEvent[];
  modal: String; // The current modal to show
  flags: GameDataFlags;
  counters: GameDataCounters;
};
