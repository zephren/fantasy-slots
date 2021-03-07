import { addGameTile } from "../lib/game";
import { store } from "../lib/store";
import { TileInstance } from "../types/TileInstance";
import { TileDetails } from "./TileDetails";

export function PickNewTile() {
  const { tilesToPick } = store.state;

  function pickTile(tile?: TileInstance) {
    if (tile) {
      addGameTile(tile);
    }

    store.state.tilesToPick = [];
    store.state.gameData.boardTiles = [];
    store.update();
  }

  return (
    <div className="pick-a-tile">
      {tilesToPick.map((tile) => (
        <TileDetails
          key={tile.id}
          tile={tile}
          onClick={() => {
            pickTile(tile);
          }}
        />
      ))}
      <button onClick={() => pickTile()}>Skip</button>
    </div>
  );
}
