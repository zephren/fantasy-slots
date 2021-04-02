import { TextIcon } from "../config/tiles/Icon";
import { Coin } from "../config/tiles/misc/icons";
import { fillEmptyTiles } from "../lib/game";
import { store } from "../lib/store";

function updateSize(property: "width" | "height", amount: number) {
  const { gameData } = store.state;
  let current = 0;
  let max = 0;

  if (property === "width") {
    current = gameData.gridWidth;
    max = gameData.gridWidthMax;
  } else if (property === "height") {
    current = gameData.gridHeight;
    max = gameData.gridHeightMax;
  }

  const newValue = current + amount;

  if (newValue >= 3 && newValue <= max) {
    // This is a valid change

    if (property === "width") {
      gameData.gridWidth = newValue;
    } else if (property === "height") {
      gameData.gridHeight = newValue;
    }

    store.update();
  }
}

const upgrades = [
  {
    id: "bbe17879-f3ee-47fc-9e76-2fa8cc0ebc0d",
    name: "Board Max Width",
    description: () => {
      return (
        <>
          The width of the board. Smaller boards hold fewer tiles, but the tiles will be adjacent more often. Bigger
          boards hold more tiles, but the tiles will be adjacent less often.
          <br />
          <br />
          <div className="shrink-buttons">
            <button onClick={() => updateSize("width", -1)}>-</button>
            <span className="stepper-value">{store.state.gameData.gridWidth}</span>
            <button onClick={() => updateSize("width", 1)}>+</button>
          </div>
        </>
      );
    },
    value: () => {
      return store.state.gameData.gridWidthMax;
    },
    cost: () => {
      const { gameData } = store.state;
      return Math.pow(10, gameData.gridWidthMax);
    },
    buy: () => {
      const { gameData } = store.state;
      gameData.gridWidthMax += 1;
      gameData.gridWidth = gameData.gridWidthMax;
      fillEmptyTiles();
      store.update();
    },
    isComplete: () => {
      return false;
    },
  },
  {
    id: "1e0ab330-8ec9-4e41-933d-75251ffa5ee5",
    name: "Board Max Height",
    description: () => {
      return (
        <>
          The height of the board. Smaller boards hold fewer tiles, but the tiles will be adjacent more often. Bigger
          boards hold more tiles, but the tiles will be adjacent less often.
          <br />
          <br />
          <div className="shrink-buttons">
            <button onClick={() => updateSize("height", -1)}>-</button>
            <span className="stepper-value">{store.state.gameData.gridHeight}</span>
            <button onClick={() => updateSize("height", 1)}>+</button>
          </div>
        </>
      );
    },
    value: () => {
      return store.state.gameData.gridHeightMax;
    },
    cost: () => {
      const { gameData } = store.state;
      return Math.pow(10, gameData.gridHeightMax);
    },
    buy: () => {
      const { gameData } = store.state;
      gameData.gridHeightMax += 1;
      gameData.gridHeight = gameData.gridHeightMax;
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
            <th>Value</th>
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
                  <div className="cost">{upgrade.value()}</div>
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
    </>
  );
}
