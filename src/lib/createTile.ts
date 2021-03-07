import { TileConfig } from "../types/TileConfig";
import { TileData, TileInstance, TileMeta } from "../types/TileInstance";
import { v4 as uuid } from "uuid";
import { emptyTileConfig } from "../config/tiles";

export function createTileData() {
  const tileData: TileData = {
    spinValue: 0,
    totalSpins: 0,
    totalAppearances: 0,
    highlight: false,
  };

  return tileData;
}

export function createTile(tileConfig?: TileConfig, meta?: TileMeta) {
  if (!tileConfig) {
    console.error(
      new Error(
        "Undefined tile config for creating a tile. Adding an empty tile."
      )
    );
    tileConfig = emptyTileConfig;
  }

  if (!meta && tileConfig.createMeta) {
    meta = tileConfig.createMeta();
  }

  const tile: TileInstance = {
    id: uuid(),
    config: tileConfig,
    effects: {},
    data: createTileData(),
    meta: meta ?? {},
  };

  return tile;
}
