import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";

export function replaceTile(
  tile: TileInstance,
  newTile: TileInstance,
  context: TileValueContext
) {
  const { gameTiles } = context.gameData;
  const gameTilesIndex = gameTiles.indexOf(tile);

  gameTiles[gameTilesIndex] = newTile;
}
