import { Board } from "./components/Board";
import { Inventory } from "./components/Inventory";
import { store } from "./lib/store";
import { useEffect, useState } from "react";
import { newGame } from "./lib/newGame";
import { spin } from "./lib/game";
import { PickNewTile } from "./components/PickNewTile";
import { TileDetails } from "./components/TileDetails";
import { Upgrades } from "./components/Upgrades";
import { loadGameData } from "./lib/loadGameData";

loadGameData();

function App() {
  const update = useState(0)[1];

  // Did mount / unmount
  useEffect(() => {
    store._update = update;
  }, [update]);

  if (!store.state.gameData) {
    newGame();
  }

  const { gameData, tilesToPick } = store.state;

  let buttons = null;
  if (!store.state.spinning && !tilesToPick.length) {
    buttons = (
      <>
        <button onClick={spin}>Spin</button>
      </>
    );
  }

  return (
    <div className="app">
      <div style={{ fontSize: "3em" }}>{gameData.totalCoins} Coins</div>
      {!!tilesToPick.length && (
        <div>
          <h1>Pick New Tile</h1>
          <PickNewTile />
        </div>
      )}
      <div style={{ opacity: tilesToPick.length ? 0.5 : 1 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h1>Board</h1>
            <Board
              boardTiles={gameData.boardTiles}
              gameTiles={gameData.gameTiles}
              width={gameData.gridWidth}
              height={gameData.gridHeight}
            />
            {buttons}
            <div style={{ fontSize: "2em" }}>
              Board value:{" "}
              <b>{(!!gameData.boardValue && gameData.boardValue) || 0}</b>
            </div>
          </div>
          <div style={{ width: "1em" }}></div>
          <div>
            <h1>Selected Tile</h1>
            <TileDetails
              tile={store.state.selectedTile}
              onClick={() => {
                store.state.selectedTile = undefined;
                store.update();
              }}
            />
          </div>
        </div>
        <div>
          <h1>Game Tiles</h1>
          <Inventory tiles={gameData.gameTiles} />
        </div>
        <div>
          <h1>Deck</h1>
          <Inventory tiles={gameData.deckTiles} />
        </div>
        <div>
          <h1>Owned Inventory</h1>
          <Inventory tiles={gameData.ownedTiles} />
        </div>
        <div>
          <h1>Upgrades</h1>
          <Upgrades />
        </div>
        <button
          onClick={() => {
            newGame();
            store.update();
          }}
        >
          Reset all game data
        </button>
      </div>
    </div>
  );
}

export default App;
