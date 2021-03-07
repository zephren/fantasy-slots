import { TileInstance } from "../../../types/TileInstance";

export function hasCategory(tile: TileInstance, category: string) {
  return tile.config.categories.includes(category);
}
