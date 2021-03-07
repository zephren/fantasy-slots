import { Board } from "./components/Board";
import { Inventory } from "./components/Inventory";
import { store } from "./lib/store";
import { useEffect, useState } from "react";
import { newGame } from "./lib/newGame";
import { calculateDeckScore, spin } from "./lib/game";
import { PickNewTile } from "./components/PickNewTile";
import { TileDetails } from "./components/TileDetails";
import { Upgrades } from "./components/Upgrades";
import { loadGameData } from "./lib/loadGameData";
import { taxPeriods } from "./config/taxPeriods";
import { Coin } from "./config/tiles/icons/Icon";
import { newRound } from "./lib/newRound";
import { GameEvents } from "./components/GameEvents";
import { saveGameData } from "./lib/saveGameData";
import { tileInstances } from "./config/tiles";
import { createTile } from "./lib/createTile";
import packageJson from "../package.json";

loadGameData();

function Header() {
  const { gameData } = store.state;
  const taxPeriod = taxPeriods[gameData.currentTaxPeriod];

  return (
    <>
      <div style={{ fontSize: "3em" }}>
        {gameData.totalCoins}
        <span className="icon-em">
          <Coin />
        </span>{" "}
        / {taxPeriod.taxAmount}
        <span className="icon-em">
          <Coin />
        </span>{" "}
        taxes due in {taxPeriod.totalDays - gameData.currentTaxPeriodDay} Days
      </div>
      <div style={{ fontSize: "3em" }}></div>
    </>
  );
}

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

  if (gameData.roundEnded) {
    return (
      <div>
        THE ROUND IS OVER
        <button onClick={newRound}>Next round</button>
      </div>
    );
  }

  const deckScore = calculateDeckScore();

  return (
    <div className="app">
      <div>Version: {packageJson.version}</div>
      <Header />
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
            <TileDetails tile={store.state.selectedTile} />
          </div>
          <div style={{ width: "1em" }}></div>
          <div>
            <h1>Events</h1>
            <GameEvents events={gameData.events} />
          </div>
        </div>
        <div>
          <h1>Game Tiles</h1>
          <Inventory tiles={gameData.gameTiles} />
        </div>
        <div>
          <h1>Deck</h1>
          <div style={{ background: deckScore > 1 ? "red" : "none" }}>
            Deck Score: {deckScore.toFixed(2)}
          </div>
          <Inventory
            tiles={gameData.deckTiles}
            onClickTile={(tile) => {
              const index = gameData.deckTiles.indexOf(tile);

              if (index >= 0) {
                gameData.deckTiles.splice(index, 1);
              }
            }}
          />
        </div>
        <div>
          <h1>Owned Inventory</h1>
          <Inventory
            tiles={gameData.ownedTiles}
            onClickTile={(tile) => {
              const hasTile = gameData.deckTiles.find((otherTile) => {
                return otherTile.config.id === tile.config.id;
              });

              if (!hasTile) {
                gameData.deckTiles.push(tile);
              }
            }}
          />
        </div>
        <div>
          <h1>All Tiles</h1>
          <Inventory
            tiles={tileInstances}
            onClickTile={(tile) => {
              const hasTile = gameData.ownedTiles.find((otherTile) => {
                return otherTile.config.id === tile.config.id;
              });

              if (!hasTile) {
                gameData.ownedTiles.push(createTile(tile.config));
              }
            }}
          />
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
        <button
          onClick={() => {
            saveGameData();
          }}
        >
          Save game data
        </button>
      </div>
    </div>
  );
}

export default App;
