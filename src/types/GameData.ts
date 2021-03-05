import { TileInstance } from "./TileInstance";

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
  currentTaxPeriod: number;
  currentTaxPeriodDay: number;
  roundEnded: boolean;
};
