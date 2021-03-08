import { store } from "./lib/store";
import { useEffect, useState } from "react";
import { newGame } from "./lib/newGame";
import { loadGameData } from "./lib/loadGameData";
import { MainGame, RoundEnd } from "./views";

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

  const { gameData } = store.state;

  if (gameData.roundEnded) {
    return <RoundEnd />;
  }

  return <MainGame />;
}

export default App;
