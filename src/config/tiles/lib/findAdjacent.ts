import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";
import { hasCategory } from "./hasCategory";
import { iterateAdjacentTiles } from "./iterateAdjacentTiles";

export function findAdjacent(
  context: TileValueContext,
  category: string
): TileInstance[] {
  return iterateAdjacentTiles(context, (tile: TileInstance) => {
    if (hasCategory(tile, category)) {
      return tile;
    }
  }).reduce((acc, item) => {
    if (item) {
      acc.push(item);
    }
    return acc;
  }, [] as TileInstance[]);
}
