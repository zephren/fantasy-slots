import { TileConfig } from "../../types/TileConfig";
import { TileValueContext } from "../../types/TileValueContext";
import { rarity } from "../rarities";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { TileInstance } from "../../types/TileInstance";
import { hasCategory } from "../lib/hasCategory";
import { destroy } from "../lib/destroy";
import { Chest1, Chest2, Chest3, Chest4, Coin, Key } from "../icons/Icon";

const tileConfigs: TileConfig[] = [
  {
    id: "2ef31449-bf1d-4cee-8e93-e0665fb9942a",
    name: "Key",
    description: () => {
      return (
        <>
          The key unlocks <Chest1 /> <Chest2 /> <Chest3 /> <Chest4 />,
          destroying both in the process
        </>
      );
    },
    icon: Key,
    rarity: rarity.COMMON,
    categories: ["key"],
    calculateValue: (context: TileValueContext) => {
      let destroyed = false;

      iterateAdjacentTiles(context, (tile: TileInstance) => {
        if (hasCategory(tile, "chest")) {
          destroy(tile, context);
          destroyed = true;
        }
      });

      if (destroyed) {
        destroy(context.tile, context);
      }

      return 1;
    },
  },
  {
    id: "834bf40d-0a3d-4e20-83a0-4e3aa233840c",
    name: "Small Chest",
    description: () => {
      return (
        <>
          Unlocked by the key, gives 10 <Coin />
        </>
      );
    },
    icon: Chest1,
    rarity: rarity.COMMON,
    categories: ["chest"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
    onDestroy: (context: TileValueContext) => {
      return 10;
    },
  },
  {
    id: "c87ea7e4-5479-4aa7-9033-0859d191390b",
    name: "Medium Chest",
    description: () => {
      return (
        <>
          Unlocked by the key, gives 30 <Coin />
        </>
      );
    },
    icon: Chest2,
    rarity: rarity.UNCOMMON,
    categories: ["chest"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
    onDestroy: (context: TileValueContext) => {
      return 30;
    },
  },
  {
    id: "8abbd4fc-1fee-4c14-b5c2-2a627de70dd1",
    name: "Large Chest",
    icon: Chest3,
    rarity: rarity.RARE,
    categories: ["chest"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
    onDestroy: (context: TileValueContext) => {
      alert("destroyed");
    },
  },
  {
    id: "3422f3a8-bd1a-4549-a9ff-d0ed0621d646",
    name: "Dark Chest",
    icon: Chest4,
    rarity: rarity.LEGENDARY,
    categories: ["chest"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
    onDestroy: (context: TileValueContext) => {
      alert("destroyed");
    },
  },
];

export default tileConfigs;
