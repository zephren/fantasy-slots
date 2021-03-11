import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";

export function iterateAdjacentTiles(
  context: TileValueContext,
  callback: any
): TileInstance[] {
  const adjecentIndexes = context.getAdjacentIndexes();

  const tiles = context.getTiles(adjecentIndexes);

  return tiles.map(callback);
}
