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
import { endRound } from "../actions/game";
import { TextIcon } from "../config/tiles/Icon";

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
      <div style={{ float: "right" }}>Tax Period: {gameData.currentTaxPeriod}</div>
      <div>
        Saved: {gameData.savedCoins}
        <TextIcon Icon={Coin} />
      </div>
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
      <div className="version">Version: {packageJson.version}</div>
      <div className="main-container">
        <Header />
        <div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Board
              boardTiles={gameData.boardTiles}
              gameTiles={gameData.gameTiles}
              width={gameData.gridWidth}
              height={gameData.gridHeight}
            />
          </div>
          <div style={{ fontSize: "2em", textAlign: "center" }}>
            Board value {(!!gameData.boardValue && gameData.boardValue) || 0}
            <TextIcon Icon={Coin} />
          </div>
          {!store.state.spinning && (
            <button onClick={spin} style={{ marginTop: "0.5em" }}>
              Spin
            </button>
          )}
          <div style={{ marginTop: "1em" }}>
            <button onClick={() => openModal("Inventory")}>Inventory</button>
            <button onClick={() => openModal("Upgrades")}>Upgrades</button>
          </div>
          <br />
        </div>
        {!!gameData.events.length && (
          <div>
            <h1>Events</h1>
            <GameEvents events={gameData.events} />
            <br />
          </div>
        )}
        <div>
          <h1>Options</h1>
          <button
            onClick={() => {
              newGame();
              saveGameData();
              store.update();
            }}
          >
            Reset All Game Data
          </button>
          <button
            onClick={() => {
              saveGameData();
            }}
          >
            Save Game Data
          </button>
          <button onClick={endRound}>End Round</button>
        </div>
      </div>
    </div>
  );
}
