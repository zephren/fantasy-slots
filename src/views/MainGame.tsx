import { Board } from "../components/Board";
import { store } from "../lib/store";
import { spin } from "../lib/game";
import { loadGameData } from "../lib/loadGameData";
import { taxPeriods } from "../config/taxPeriods";
import { Coin } from "../config/tiles/misc/icons";
import { GameEvents } from "../components/GameEvents";
import packageJson from "../../package.json";
import { PickNewTileModal } from "./modals/PickNewTileModal";
import { InventoryModal } from "./modals/InventoryModal";
import { UpgradesModal } from "./modals/UpgradesModal";
import { IntroModal } from "./modals/IntroModal";
import { openModal } from "../actions/modal";
import { TextIcon } from "../config/tiles/Icon";
import { OptionsModal } from "./modals/OptionsModal";

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
    case "Intro":
      return <IntroModal />;
    case "PickNewTile":
      return <PickNewTileModal />;
    case "Inventory":
      return <InventoryModal />;
    case "Upgrades":
      return <UpgradesModal />;
    case "Options":
      return <OptionsModal />;
  }

  return null;
}

export function MainGame() {
  const { gameData } = store.state;

  return (
    <>
      <Modals />
      <div className="app" style={{ display: "flex", justifyContent: "center", height: "100%" }}>
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
              <div style={{ marginTop: "0.5em" }}>
                <button onClick={spin}>Spin</button>
                <div style={{ marginTop: "1em" }}>
                  <button onClick={() => openModal("Inventory")}>Inventory</button>
                  <button onClick={() => openModal("Intro")}>How To Play</button>
                  {gameData.counters.totalRounds > 0 && (
                    <div>
                      <button onClick={() => openModal("Upgrades")}>Upgrades</button>
                      <button onClick={() => openModal("Options")}>Options</button>
                    </div>
                  )}
                </div>
              </div>
            )}
            <br />
          </div>
          {gameData.counters.totalRounds > 0 && (
            <>
              {!!gameData.events.length && (
                <div>
                  <h1>Events</h1>
                  <GameEvents events={gameData.events} />
                  <br />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
