import { fillEmptyTiles } from "../lib/game";
import { store } from "../lib/store";

const upgrades = [
  {
    id: "bbe17879-f3ee-47fc-9e76-2fa8cc0ebc0d",
    name: "Board Width",
    cost: () => {
      return 0;
    },
    buy: () => {
      const { gameData } = store.state;
      gameData.gridWidth += 1;
      fillEmptyTiles();
      store.update();
    },
    isComplete: () => {
      return false;
    },
  },
  {
    id: "1e0ab330-8ec9-4e41-933d-75251ffa5ee5",
    name: "Board Height",
    cost: () => {
      return 0;
    },
    buy: () => {
      const { gameData } = store.state;
      gameData.gridHeight += 1;
      fillEmptyTiles();
      store.update();
    },
    isComplete: () => {
      return false;
    },
  },
  {
    id: "0245c559-dd55-4f93-a626-53cc06b17d42",
    name: "XYZ",
    cost: () => {
      return 0;
    },
    buy: () => {},
    isComplete: () => {
      return false;
    },
  },
];

export function Upgrades() {
  return (
    <div className="upgrades">
      {upgrades.map((upgrade) => {
        return (
          <div key={upgrade.id}>
            <div>{upgrade.name}</div>
            <div>
              <button onClick={upgrade.buy}>Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
