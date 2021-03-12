import { calculateBoardTileValue } from "../../../lib/game";
import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";

export function replaceTile(
  tile: TileInstance,
  newTile: TileInstance,
  context: TileValueContext
) {
  const { gameTiles, boardTiles } = context.gameData;
  const gameTilesIndex = gameTiles.indexOf(tile);
  const boardIndex = boardTiles.indexOf(gameTilesIndex);

  gameTiles[gameTilesIndex] = newTile;

  newTile.data.spinValue = calculateBoardTileValue(newTile, boardIndex);
}
