import { TileConfig } from "../../../classes/TileConfig";
import { TileValueContext } from "../../../types/TileValueContext";
import { rarity } from "../rarities";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { TileInstance } from "../../../types/TileInstance";
import { hasCategory } from "../lib/hasCategory";
import { removeTile } from "../lib/removeTile";
import { Chest1, Chest2, Chest3, Chest4, Key } from "./icons";
import { Coin } from "../misc/icons";

function createChestConfig({ baseValue, removeValue }: any) {
  return {
    categories: ["chest"],
    name: "",
    description: () => {
      return (
        <>
          Unlocked by the key, gives {removeValue} <Coin />
        </>
      );
    },
    baseValue,
    onRemove: (context: TileValueContext) => {
      return { value: removeValue };
    },
  };
}

const tileConfigs = {
  Key: new TileConfig({
    id: "2ef31449-bf1d-4cee-8e93-e0665fb9942a",
    name: "",
    description: () => {
      return (
        <>
          The key unlocks <Chest1 /> <Chest2 /> <Chest3 /> <Chest4 />, destroying both in the process
        </>
      );
    },
    icon: Key,
    rarity: rarity.COMMON,
    categories: ["key"],
    baseValue: 1,
    calculateValue: (context: TileValueContext) => {
      let activated = false;

      iterateAdjacentTiles(context, (tile: TileInstance) => {
        if (hasCategory(tile, "chest")) {
          // Remove the tile
          removeTile(tile, context);
          activated = true;
        }
      });

      if (activated) {
        // Remove self
        removeTile(context.tile, context);
      }

      return 0;
    },
  }),
  Small_Chest: new TileConfig({
    id: "834bf40d-0a3d-4e20-83a0-4e3aa233840c",
    icon: Chest1,
    rarity: rarity.COMMON,
    ...createChestConfig({ baseValue: 1, removeValue: 10 }),
  }),
  Medium_Chest: new TileConfig({
    id: "c87ea7e4-5479-4aa7-9033-0859d191390b",
    icon: Chest2,
    rarity: rarity.UNCOMMON,
    ...createChestConfig({ baseValue: 2, removeValue: 20 }),
  }),
  Large_Chest: new TileConfig({
    id: "8abbd4fc-1fee-4c14-b5c2-2a627de70dd1",
    icon: Chest3,
    rarity: rarity.RARE,
    ...createChestConfig({ baseValue: 3, removeValue: 30 }),
  }),
  Dark_Chest: new TileConfig({
    id: "3422f3a8-bd1a-4549-a9ff-d0ed0621d646",
    icon: Chest4,
    rarity: rarity.LEGENDARY,
    ...createChestConfig({ baseValue: 4, removeValue: 40 }),
  }),
};

export default tileConfigs;
