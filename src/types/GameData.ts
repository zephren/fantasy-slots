import { TileInstance } from "./TileInstance";

export type GameEvent = {
  id: string;
  message: string;
};

export type GameData = {
  boardTiles: number[]; // Indexes of the game tile
  ownedTiles: TileInstance[]; // All tiles owned by playing the game (unique)
  deckTileIds: string[]; // Ids of the deck tiles
  deckTiles: TileInstance[]; // Tiles available to be played in the current game (unique)
  gameTiles: TileInstance[]; // Tiles created for the current game (multiples)
  gridWidth: number;
  gridHeight: number;
  boardValue: number;
  totalCoins: number;
  savedCoins: number; // The number of coins saved as rounds end
  lastTotalCoins: number; // The number of coins earned from the last round end
  currentTaxPeriod: number;
  currentTaxPeriodDay: number;
  roundEnded: boolean;
  events: GameEvent[];
};
