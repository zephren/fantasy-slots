import { GameData } from "./GameData";
import { TileInstance } from "./TileInstance";

export type TileValueContext = {
  tile: TileInstance;
  gameData: GameData;
  getAdjacentIndexes: any;
  getTiles: (indexes: number[]) => TileInstance[];
};
