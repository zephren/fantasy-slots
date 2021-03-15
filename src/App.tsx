import { store } from "./lib/store";
import { useEffect, useState } from "react";
import { newGame } from "./lib/newGame";
import { loadGameData } from "./lib/loadGameData";
import { MainGame, RoundEnd } from "./views";
import { TileDetails } from "./components/TileDetails";

loadGameData();

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

function App() {
  const update = useState(0)[1];

  // Did mount / unmount
  useEffect(() => {
    store._update = update;
  }, [update]);

  if (!store.state.gameData) {
    newGame();
  }

  const { gameData } = store.state;

  let view = null;

  if (gameData.roundEnded) {
    view = <RoundEnd />;
  } else {
    view = <MainGame />;
  }

  return (
    <>
      <SelectedTile />
      {view}
    </>
  );
}

export default App;
