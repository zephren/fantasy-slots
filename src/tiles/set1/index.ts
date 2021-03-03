import { TileConfig } from "../../types/TileConfig";
import { TileInstance } from "../../types/TileInstance";
import { TileValueContext } from "../../types/TileValueContext";
import { Coal, Coin, Dagger1 } from "../icons/Icon";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { rarity } from "../rarities";

const tileConfigs: TileConfig[] = [
  {
    id: "48217c09-300c-44b0-803e-19f51346227b",
    name: "Coal",
    icon: Coal,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      let total = 1;

      iterateAdjacentTiles(context, (tile: TileInstance) => {
        if (tile.config.name === "Coal") {
          total += 1;
        }
      });

      return total;
    },
  },
  {
    id: "2f2e6e35-686f-4033-9940-3f66a153c568",
    name: "Dagger",
    icon: Dagger1,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  },
  {
    id: "49d24981-a7d1-4407-b121-ed3e45d427bd",
    name: "Coin",
    icon: Coin,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  },
];

export default tileConfigs;
