import { TileConfig } from "../types/TileConfig";
import { rarity } from "./rarities";
import set1 from "./set1";
import chests from "./chests";
import { TileValueContext } from "../types/TileValueContext";
import { Empty } from "./icons/Icon";

const tileConfigs: TileConfig[] = [...set1, ...chests];

export default tileConfigs;
export const tilesById = new Map<string, TileConfig>();
export const tilesByName = new Map<string, TileConfig>();

tileConfigs.forEach((config) => {
  tilesById.set(config.id, config);
  tilesByName.set(config.name, config);
});

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
