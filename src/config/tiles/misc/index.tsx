import { TileConfig } from "../../../classes/TileConfig";
import { TileValueContext } from "../../../types/TileValueContext";
import { rarity } from "../rarities";
import { Coin } from "./icons";

const tileConfigs = {
  Coin: new TileConfig({
    id: "d9c7f23b-a3e9-4b4e-af69-4a026998d40a",
    icon: Coin,
    rarity: rarity.COMMON,
    categories: ["coin"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
};

export default tileConfigs;
