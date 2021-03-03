import { emptyTileConfig } from "..";
import { createTile } from "../../lib/createTile";
import { TileInstance } from "../../types/TileInstance";
import { TileValueContext } from "../../types/TileValueContext";

export function destroy(tile: TileInstance, context: TileValueContext) {
  let destroyValue = 0;

  if (tile.config.onDestroy) {
    destroyValue = tile.config.onDestroy(context) || 0;
  }

  const { gameTiles } = context.gameData;
  const gameTilesIndex = gameTiles.indexOf(tile);

  const emptyTile = createTile(emptyTileConfig);

  gameTiles[gameTilesIndex] = emptyTile;

  if (destroyValue) {
    emptyTile.data.spinValue = destroyValue;
  }
}
