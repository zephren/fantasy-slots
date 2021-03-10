import { TileConfig } from "../../classes/TileConfig";

// Sets
import set1 from "./set1";
import chests from "./chests";
import mining from "./mining";
import potions from "./potions";
import empty from "./empty";
import { TileInstance } from "../../types/TileInstance";
import { createTile } from "../../lib/createTile";

export const emptyTileConfig = empty.Empty;

export const tileConfigsMap = {
  ...empty,
  ...set1,
  ...mining,
  ...potions,
  ...chests,
};

export type TileConfigNames = keyof typeof tileConfigsMap;

// Update the names on all tileConfigs
for (const tileName in tileConfigsMap) {
  const tileConfig = (tileConfigsMap as any)[tileName];
  tileConfig.name = tileName;
}

const tileConfigs: TileConfig[] = [...Object.values(tileConfigsMap)];

export default tileConfigs;
export const tilesById = new Map<string, TileConfig>();
export const tileInstances: TileInstance[] = [];

// Setup the tiles by Id and name
tileConfigs.forEach((config) => {
  tilesById.set(config.id, config);
  tileInstances.push(createTile(config));
});

export function getTileConfigByName(name: TileConfigNames): TileConfig {
  const tileConfig = tileConfigsMap[name];

  if (!tileConfig) {
    console.error(new Error(`Tile name "${name}" not found`));
  }

  return tileConfig;
}
