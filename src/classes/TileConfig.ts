import { TileInstance, TileMeta } from "../types/TileInstance";
import { TileValueContext } from "../types/TileValueContext";

export type RemoveValue = {
  value?: number;
  tiles?: TileInstance[];
};

export class TileConfig {
  id: string = "";
  name?: string = "";
  icon: any;
  rarity: number = 0;
  categories: string[] = [];

  // Optional, so it will be 0, but usage should use a !
  baseValue?: number = 0;

  description?: () => any;
  calculateValue?: (context: TileValueContext) => number = (context) => {
    return 0;
  };
  onRemove?: (context: TileValueContext) => RemoveValue | void;
  createMeta?: () => TileMeta;
  topStat?: (tile: TileInstance) => number;

  constructor(properties: TileConfig) {
    this.name = "";

    // This is just easy
    Object.assign(this, properties);
  }
}

export type TileConfigMap = {
  [key: string]: TileConfig;
};
