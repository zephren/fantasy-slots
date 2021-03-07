import { TileValueContext } from "../../../types/TileValueContext";

export function iterateAdjacentTiles(context: TileValueContext, callback: any) {
  const adjecentIndexes = context.getAdjacentIndexes();

  const tiles = context.getTiles(adjecentIndexes);

  tiles.forEach(callback);
}
