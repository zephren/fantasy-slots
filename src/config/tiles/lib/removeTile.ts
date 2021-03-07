import { emptyTileConfig } from "..";
import { createTile } from "../../../lib/createTile";
import { addGameTile } from "../../../lib/game";
import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";

export function removeTile(tile: TileInstance, context: TileValueContext) {
  let removeValue;

  if (tile.config.onRemove) {
    removeValue = tile.config.onRemove(context);
  }

  const { gameTiles } = context.gameData;
  const gameTilesIndex = gameTiles.indexOf(tile);

  // Default the replacement tile to an empty one
  let replaceTile = createTile(emptyTileConfig);

  if (removeValue) {
    let { tiles } = removeValue;

    // Replace the tile with the appropriate value
    if (tiles?.length) {
      replaceTile = tiles[0];

      // Add the remaining tiles
      for (let i = 1; i < tiles.length; i++) {
        addGameTile(tiles[i]);
      }
    }

    // Apply the value
    if (removeValue.value) {
      replaceTile.data.spinValue = removeValue.value;
    }
  }

  gameTiles[gameTilesIndex] = replaceTile;
}
