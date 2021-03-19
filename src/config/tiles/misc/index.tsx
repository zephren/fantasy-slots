import { TileConfig } from "../../../classes/TileConfig";
import { rarity } from "../rarities";
import { Coin } from "./icons";

const tileConfigs = {
  Coin: new TileConfig({
    id: "d9c7f23b-a3e9-4b4e-af69-4a026998d40a",
    icon: Coin,
    rarity: rarity.COMMON,
    categories: ["coin"],
    baseValue: 1,
  }),
};

export default tileConfigs;
