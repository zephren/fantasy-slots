import { TileConfig } from "./TileConfig";

export type TileData = {
  spinValue: number;
  totalSpins: number;
  totalAppearances: number;
  highlight?: boolean;
};

export type TileEffects = {
  shouldDestroy?: boolean;
};

export type TileInstance = {
  id: string;
  configId: string;
  config: TileConfig;
  data: TileData;
  effects: TileEffects;
};
