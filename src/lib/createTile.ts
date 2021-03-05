import { TileConfig } from "../types/TileConfig";
import { TileData, TileInstance } from "../types/TileInstance";
import { v4 as uuid } from "uuid";

export function createTileData() {
  const tileData: TileData = {
    spinValue: 0,
    totalSpins: 0,
    totalAppearances: 0,
    highlight: false,
  };

  return tileData;
}

export function createTile(
  tileConfig: TileConfig,
  data: TileData = createTileData()
) {
  const tile: TileInstance = {
    id: uuid(),
    config: tileConfig,
    effects: {},
    data,
  };

  return tile;
}
