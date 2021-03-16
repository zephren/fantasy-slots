import { TileConfig } from "../../../classes/TileConfig";
import { createTile } from "../../../lib/createTile";
import { TileValueContext } from "../../../types/TileValueContext";
import { categories } from "../categories";
import {
  HealthPotion1,
  HealthPotion2,
  Elixer1,
  Elixer2,
  ManaPotion1,
  ManaPotion2,
  Elixer3,
  ManaPotion3,
  HealthPotion3,
} from "./icons";
import { findAdjacent } from "../lib/findAdjacent";
import { removeTile } from "../lib/removeTile";
import { replaceTile } from "../lib/replaceTile";
import { rarity } from "../rarities";

// function findAndRemoveMatch(category: string, context: TileValueContext) {
//   const foundTiles = findAdjacent(context, category);

//   if (foundTiles.length) {
//     console.log(foundTiles);
//     removeTile(foundTiles[0], context);
//     return true;
//   }

//   return false;
// }

function createElixer(category: string, context: TileValueContext) {
  const foundTiles = findAdjacent(context, category);

  if (foundTiles.length) {
    removeTile(foundTiles[0], context);
    replaceTile(context.tile, createTile(tileConfigs.Small_Elixer), context);
    return true;
  }

  return false;
}

function createNextPotion(category: string, nextConfig: TileConfig, context: TileValueContext) {
  const foundTiles = findAdjacent(context, category);

  if (foundTiles.length >= 2) {
    removeTile(foundTiles[0], context);
    removeTile(foundTiles[1], context);
    replaceTile(context.tile, createTile(nextConfig), context);
    return true;
  }

  return false;
}

const tileConfigs = {
  Small_Health_Potion: new TileConfig({
    id: "e77dc97d-8d44-45e4-bbad-deb79574092d",
    icon: HealthPotion1,
    rarity: rarity.COMMON,
    categories: [categories.SMALL_HEALTH_POTION],
    calculateValue: (context: TileValueContext) => {
      if (createElixer(categories.SMALL_MANA_POTION, context)) {
        return 0;
      }

      if (createNextPotion(categories.SMALL_HEALTH_POTION, tileConfigs.Medium_Health_Potion, context)) {
        return 0;
      }

      return 1;
    },
  }),
  Medium_Health_Potion: new TileConfig({
    id: "c6d67a75-f151-4503-b04d-2fb535c06c92",
    icon: HealthPotion2,
    rarity: rarity.UNCOMMON,
    categories: [categories.MEDIUM_HEALTH_POTION],
    calculateValue: (context: TileValueContext) => {
      return 2;
    },
  }),
  Large_Health_Potion: new TileConfig({
    id: "227d75ba-7310-4aed-8f39-cab15fb90e20",
    icon: HealthPotion3,
    rarity: rarity.RARE,
    categories: [categories.LARGE_HEALTH_POTION],
    calculateValue: (context: TileValueContext) => {
      return 2;
    },
  }),
  Small_Mana_Potion: new TileConfig({
    id: "d587eba7-246e-46c7-bd55-2f32b0093cf8",
    icon: ManaPotion1,
    rarity: rarity.COMMON,
    categories: [categories.SMALL_MANA_POTION],
    calculateValue: (context: TileValueContext) => {
      if (createElixer(categories.SMALL_HEALTH_POTION, context)) {
        return 0;
      }

      if (createNextPotion(categories.SMALL_MANA_POTION, tileConfigs.Medium_Mana_Potion, context)) {
        return 0;
      }

      return 1;
    },
  }),
  Medium_Mana_Potion: new TileConfig({
    id: "6c067c0f-eefb-43ce-8f81-0aabd19cacc1",
    icon: ManaPotion2,
    rarity: rarity.UNCOMMON,
    categories: [categories.MEDIUM_MANA_POTION],
    calculateValue: (context: TileValueContext) => {
      return 2;
    },
  }),
  Large_Mana_Potion: new TileConfig({
    id: "cf9a1a58-c4ee-4284-a504-fe442c34a8f0",
    icon: ManaPotion3,
    rarity: rarity.RARE,
    categories: [categories.LARGE_MANA_POTION],
    calculateValue: (context: TileValueContext) => {
      return 2;
    },
  }),

  /**
   * Elixer
   */
  Small_Elixer: new TileConfig({
    id: "93a94d4e-7a9d-4d1a-9f8a-3b1586530ca0",
    icon: Elixer1,
    rarity: rarity.RARE,
    categories: [categories.SMALL_ELIXER],
    calculateValue: (context: TileValueContext) => {
      if (createNextPotion(categories.SMALL_ELIXER, tileConfigs.Medium_Elixer, context)) {
        return 0;
      }

      return 5;
    },
  }),
  Medium_Elixer: new TileConfig({
    id: "1fb94f1d-880e-41eb-9a29-f14700a22928",
    icon: Elixer2,
    rarity: rarity.RARE,
    categories: [categories.MEDIUM_ELIXER],
    calculateValue: (context: TileValueContext) => {
      return 10;
    },
  }),
  Large_Elixer: new TileConfig({
    id: "3e5d71cf-0f07-4c87-a76b-b269172b0a17",
    icon: Elixer3,
    rarity: rarity.LEGENDARY,
    categories: [categories.LARGE_ELIXER],
    calculateValue: (context: TileValueContext) => {
      return 10;
    },
  }),
};

export default tileConfigs;
