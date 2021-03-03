import { GameData } from "../types/GameData";
import { TileInstance } from "../types/TileInstance";

export const store = {
  state: {
    gameData: (null as unknown) as GameData,
    spinning: false,
    tilesToPick: [] as TileInstance[],
    selectedTile: (null as unknown) as TileInstance | undefined,
  },
  _update: (value: number) => {}, // The function that triggers an update
  update: (): void => {
    store._update(Math.random());
  },
};

(window as any).store = store;
