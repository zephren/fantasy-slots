import { closeModal } from "../../actions/modal";
import { Modal } from "../../components/Modal";
import { TileDetails } from "../../components/TileDetails";
import { addGameTile } from "../../lib/game";
import { saveGameData } from "../../lib/saveGameData";
import { store } from "../../lib/store";
import { TileInstance } from "../../types/TileInstance";

export function PickNewTileModal() {
  const { tilesToPick } = store.state.gameData;

  function pickTile(tile?: TileInstance) {
    if (tile) {
      addGameTile(tile);
    }

    store.state.gameData.modal = "";
    store.state.gameData.tilesToPick = [];

    saveGameData();

    closeModal();
  }

  return (
    <Modal>
      <h1>Pick New Tile</h1>
      <br />
      <div className="pick-a-tile">
        {tilesToPick.map((tile) => (
          <div className="option">
            <TileDetails key={tile.id} tile={tile} />
            <button
              onClick={() => {
                pickTile(tile);
              }}
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={() => pickTile()}>Skip</button>
    </Modal>
  );
}
