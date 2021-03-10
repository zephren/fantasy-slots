import { TileConfig } from "../../../classes/TileConfig";
import { TileInstance } from "../../../types/TileInstance";
import { TileValueContext } from "../../../types/TileValueContext";
import {
  HealthPotion1,
  Coin,
  Dagger1,
  Elixer1,
  ManaPotion1,
} from "../icons/Icon";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { rarity } from "../rarities";

const tileConfigs = {
  Small_Health_Potion: new TileConfig({
    id: "e77dc97d-8d44-45e4-bbad-deb79574092d",
    name: "",
    icon: HealthPotion1,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
  Small_Mana_Potion: new TileConfig({
    id: "d587eba7-246e-46c7-bd55-2f32b0093cf8",
    name: "",
    icon: ManaPotion1,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
  Small_Elixer: new TileConfig({
    id: "93a94d4e-7a9d-4d1a-9f8a-3b1586530ca0",
    name: "",
    icon: Elixer1,
    rarity: rarity.RARE,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
};

export default tileConfigs;
