import { Board } from "../components/Board";
import { store } from "../lib/store";
import { newGame } from "../lib/newGame";
import { spin } from "../lib/game";
import { TileDetails } from "../components/TileDetails";
import { loadGameData } from "../lib/loadGameData";
import { taxPeriods } from "../config/taxPeriods";
import { Coin } from "../config/tiles/misc/icons";
import { GameEvents } from "../components/GameEvents";
import { saveGameData } from "../lib/saveGameData";
import packageJson from "../../package.json";
import { PickNewTileModal } from "./modals/PickNewTileModal";
import { InventoryModal } from "./modals/InventoryModal";
import { UpgradesModal } from "./modals/UpgradesModal";
import { IntroModal } from "./modals/IntroModal";
import { openModal } from "../actions/modal";

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
      <div>Day {gameData.currentTaxPeriod}</div>
      <div>Saved Coins: {gameData.savedCoins}</div>
    </>
  );
}

function SelectedTile() {
  return (
    <>
      {store.state.selectedTile && (
        <div
          style={{
            position: "fixed",
            top: "0em",
            left: "0em",
            zIndex: 1000000,
            padding: "1em",
            background: "#333",
            boxShadow: "0em 0em 1em 0em #000",
          }}
        >
          <TileDetails tile={store.state.selectedTile} />
          <button
            onClick={() => {
              store.state.selectedTile = undefined;
              store.update();
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

function Modals() {
  const { gameData } = store.state;

  switch (gameData.modal) {
    case "PickNewTile":
      return <PickNewTileModal />;
    case "Inventory":
      return <InventoryModal />;
    case "Upgrades":
      return <UpgradesModal />;
  }

  return null;
}

export function MainGame() {
  const { gameData } = store.state;

  return (
    <div className="app">
      {!gameData.flags.introDismissed && <IntroModal />}
      <Modals />
      <SelectedTile />
      <div className="version">Version: {packageJson.version}</div>
      <div className="main-container">
        <Header />
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Board
              boardTiles={gameData.boardTiles}
              gameTiles={gameData.gameTiles}
              width={gameData.gridWidth}
              height={gameData.gridHeight}
            />
          </div>
          <br />
          {!store.state.spinning && <button onClick={spin}>Spin</button>}
          <div style={{ fontSize: "2em" }}>
            Board value: <b>{(!!gameData.boardValue && gameData.boardValue) || 0}</b>
          </div>
        </div>
        <div>
          <h1>Events</h1>
          <GameEvents events={gameData.events} />
        </div>
        <button onClick={() => openModal("Inventory")}>Inventory</button>
        <button onClick={() => openModal("Upgrades")}>Upgrades</button>
        <br />
        <br />
        <button
          onClick={() => {
            newGame();
            saveGameData();
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
        <button
          onClick={() => {
            gameData.roundEnded = true;
            store.update();
          }}
        >
          End Round
        </button>
      </div>
    </div>
  );
}
