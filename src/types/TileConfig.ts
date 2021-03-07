import { TileInstance, TileMeta } from "./TileInstance";
import { TileValueContext } from "./TileValueContext";

export type RemoveValue = {
  value?: number;
  tiles?: TileInstance[];
};

export type TileConfig = {
  id: string;
  name: string;
  description?: () => any;
  icon: any;
  rarity: number;
  categories: string[];
  calculateValue: (context: TileValueContext) => number;
  onRemove?: (context: TileValueContext) => RemoveValue | void;
  createMeta?: () => TileMeta;
  topStat?: (tile: TileInstance) => number;
};
