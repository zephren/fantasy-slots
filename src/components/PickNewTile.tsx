import { addGameTile } from "../lib/game";
import { store } from "../lib/store";
import { TileDetails } from "./TileDetails";

export function PickNewTile() {
  const { tilesToPick } = store.state;

  return (
    <div className="pick-a-tile">
      {tilesToPick.map((tile) => (
        <TileDetails
          key={tile.id}
          tile={tile}
          onClick={() => {
            addGameTile(tile);
            store.state.tilesToPick = [];
            store.state.gameData.boardTiles = [];
            store.update();
          }}
        />
      ))}
    </div>
  );
}
