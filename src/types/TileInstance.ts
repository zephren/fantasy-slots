import { TileConfig } from "./TileConfig";

export type TileData = {
  spinValue: number;
  totalSpins: number;
  totalAppearances: number;
  highlight?: boolean;
};

export type TileMeta = { [key: string]: any };

export type TileEffects = {
  shouldDestroy?: boolean;
};

export type TileInstance = {
  id: string;
  config: TileConfig;
  data: TileData;
  meta: TileMeta;
  effects: TileEffects;
};
