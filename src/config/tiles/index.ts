import { TileConfig } from "../../types/TileConfig";
import { rarity } from "./rarities";
import { TileValueContext } from "../../types/TileValueContext";
import { Empty } from "./icons/Icon";

// Sets
import set1 from "./set1";
import chests from "./chests";
import mining from "./mining";
import { TileInstance } from "../../types/TileInstance";
import { createTile } from "../../lib/createTile";

// An empty tile config
export const emptyTileConfig: TileConfig = {
  id: "04f5df2c-22d6-4e31-8e81-c81f0ba1c4c1",
  name: "Empty",
  icon: Empty,
  rarity: rarity.COMMON,
  categories: ["empty"],
  calculateValue: (context: TileValueContext) => {
    return context.tile.data.spinValue || 0;
  },
};

const tileConfigs: TileConfig[] = [
  ...set1,
  ...chests,
  ...mining,
  emptyTileConfig,
];

export default tileConfigs;
export const tilesById = new Map<string, TileConfig>();
export const tilesByName = new Map<string, TileConfig>();
export const tileInstances: TileInstance[] = [];

// Setup the tiles by Id and name
tileConfigs.forEach((config) => {
  tilesById.set(config.id, config);
  tilesByName.set(config.name, config);
  tileInstances.push(createTile(config));
});

export function getTileConfigByName(name: string) {
  const tileConfig = tilesByName.get(name);

  if (!tileConfig) {
    console.error(new Error(`Tile name "${name}" not found`));
  }

  return tileConfig;
}
