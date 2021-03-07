import { TileConfig } from "../../../types/TileConfig";
import { TileValueContext } from "../../../types/TileValueContext";
import { rarity } from "../rarities";
import { iterateAdjacentTiles } from "../lib/iterateAdjacentTiles";
import { TileInstance } from "../../../types/TileInstance";
import { hasCategory } from "../lib/hasCategory";
import { removeTile } from "../lib/removeTile";
import { Coal, Pickaxe, Rock } from "../icons/Icon";
import { createTile } from "../../../lib/createTile";
import { tilesByName } from "..";
import { addGameEvent } from "../../../lib/game";

const tileConfigs: TileConfig[] = [
  {
    id: "102f6200-dd6b-434f-b486-67ccc425cc4d",
    name: "Pickaxe",
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
  },
  {
    id: "89c89fb8-b343-4767-ba9f-78b4586b4ceb",
    name: "Rock",
    description: () => {
      return (
        <>
          Broken by <Pickaxe />, gives one of <Coal />
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
      const newTile = createTile(tilesByName.get("Coal"));

      addGameEvent({
        message: `A broken Rock yielded a ${newTile.config.name}`,
      });

      return { tiles: [newTile] };
    },
  },
];

export default tileConfigs;
