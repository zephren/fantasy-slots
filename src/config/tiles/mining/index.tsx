import { TileConfig } from "../../../classes/TileConfig";
import { TileValueContext } from "../../../types/TileValueContext";
import { rarity } from "../rarities";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { TileInstance } from "../../../types/TileInstance";
import { hasCategory } from "../lib/hasCategory";
import { removeTile } from "../lib/removeTile";
import { Coal, OreCopper, OreIron, OreSilver, Pickaxe, Rock } from "./icons";
import { createTile } from "../../../lib/createTile";
import { tileConfigsMap } from "..";
import { addGameEvent } from "../../../lib/game";

const tileConfigs = {
  Pickaxe: new TileConfig({
    id: "102f6200-dd6b-434f-b486-67ccc425cc4d",
    name: "",
    description: () => {
      return <>Breaks rocks, has 3 uses</>;
    },
    icon: Pickaxe,
    rarity: rarity.COMMON,
    categories: ["mining"],
    createMeta: () => {
      return { uses: 3 };
    },
    topStat: (tile: TileInstance) => {
      return tile.meta.uses;
    },
    calculateValue: (context: TileValueContext) => {
      let broken = false;

      iterateAdjacentTiles(context, (tile: TileInstance) => {
        if (broken) {
          return;
        }

        if (hasCategory(tile, "rock")) {
          removeTile(tile, context);
          console.log(context.tile.meta);
          context.tile.meta.uses--;

          if (context.tile.meta.uses === 0) {
            broken = true;
            addGameEvent({ message: "A Pickaxe broke" });
          }
        }
      });

      if (broken) {
        // Remove self
        removeTile(context.tile, context);
      }

      return 1;
    },
  }),
  Rock: new TileConfig({
    id: "89c89fb8-b343-4767-ba9f-78b4586b4ceb",
    name: "",
    description: () => {
      return (
        <>
          Broken by <Pickaxe />, gives one of <Coal /> <OreCopper /> <OreIron /> <OreSilver />
        </>
      );
    },
    icon: Rock,
    rarity: rarity.COMMON,
    categories: ["rock"],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
    onRemove: (context: TileValueContext) => {
      const newTile = createTile(tileConfigsMap.Coal);

      addGameEvent({
        message: `A broken Rock yielded a ${newTile.config.name}`,
      });

      return { tiles: [newTile] };
    },
  }),
  Coal: new TileConfig({
    id: "48217c09-300c-44b0-803e-19f51346227b",
    icon: Coal,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      let total = 1;

      // iterateAdjacentTiles(context, (tile: TileInstance) => {
      //   if (tile.config.name === "Coal") {
      //     total += 1;
      //   }
      // });

      return total;
    },
  }),
  Copper_Ore: new TileConfig({
    id: "35e8e354-dcfb-430c-9401-0035b775f00f",
    icon: OreCopper,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
  Iron_Ore: new TileConfig({
    id: "8df321a7-a16d-485e-9b41-aebe784350db",
    icon: OreIron,
    rarity: rarity.COMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
  Silver_Ore: new TileConfig({
    id: "7fa9e325-ca81-48cd-a7d5-8b1203354218",
    icon: OreSilver,
    rarity: rarity.UNCOMMON,
    categories: [],
    calculateValue: (context: TileValueContext) => {
      return 1;
    },
  }),
};

export default tileConfigs;
