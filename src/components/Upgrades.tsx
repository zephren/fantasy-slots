import { TextIcon } from "../config/tiles/Icon";
import { Coin } from "../config/tiles/misc/icons";
import { fillEmptyTiles } from "../lib/game";
import { store } from "../lib/store";

const upgrades = [
  {
    id: "bbe17879-f3ee-47fc-9e76-2fa8cc0ebc0d",
    name: "Board Width",
    description: () => {
      return (
        <>
          desc in thing
          <div className="shrink-buttons">
            <button>-</button>
            {store.state.gameData.gridWidth}
            <button>+</button>
          </div>
        </>
      );
    },
    cost: () => {
      const { gameData } = store.state;
      return Math.pow(10, gameData.gridWidth);
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
    description: () => <>desc</>,
    cost: () => {
      const { gameData } = store.state;
      return Math.pow(10, gameData.gridHeight);
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
];

function buyUpgrade(upgrade: any) {
  const cost = upgrade.cost();

  upgrade.buy();

  store.state.gameData.savedCoins -= cost;
  store.update();
}

export function Upgrades() {
  const { gameData } = store.state;

  return (
    <>
      <table className="table upgrades">
        <thead>
          <tr>
            <th>Information</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {upgrades.map((upgrade) => {
            return (
              <tr key={upgrade.id}>
                <td>
                  <div className="name">{upgrade.name}</div>
                  <div className="description">
                    <upgrade.description />
                  </div>
                </td>
                <td>
                  <div className="cost">
                    {upgrade.cost()}
                    <TextIcon Icon={Coin} />
                  </div>
                </td>
                <td>
                  {gameData.savedCoins > upgrade.cost() && <button onClick={() => buyUpgrade(upgrade)}>Buy</button>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>[MINI GRID HERE]</h1>
    </>
  );
}
