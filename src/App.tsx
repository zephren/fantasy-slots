import { store } from "./lib/store";
import { useEffect, useState } from "react";
import { newGame } from "./lib/newGame";
import { loadGameData } from "./lib/loadGameData";
import { MainGame, RoundEnd } from "./views";
import { TileDetails } from "./components/TileDetails";

loadGameData();

function SelectedTile() {
  if (!store.state.selectedTile) {
    return null;
  }

  return (
    <div className="selected-tile">
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
