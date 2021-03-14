import { TileValueContext } from "../../../types/TileValueContext";
import { rarity } from "../rarities";
import { Empty } from "../Icon";
import { TileConfig } from "../../../classes/TileConfig";

const tileConfigs = {
  Empty: new TileConfig({
    id: "04f5df2c-22d6-4e31-8e81-c81f0ba1c4c1",
    name: "",
    icon: Empty,
    rarity: rarity.COMMON,
    categories: ["empty"],
    calculateValue: (context: TileValueContext) => {
      return context.tile.data.spinValue || 0;
    },
  }),
};

export default tileConfigs;
