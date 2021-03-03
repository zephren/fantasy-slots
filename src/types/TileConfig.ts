import { TileValueContext } from "./TileValueContext";

export type TileConfig = {
  id: string;
  name: string;
  description?: () => any;
  icon: any;
  rarity: number;
  categories: string[];
  calculateValue: (context: TileValueContext) => number;
  onDestroy?: (context: TileValueContext) => number | void;
};
