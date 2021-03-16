import { endRound } from "../../actions/game";
import { closeModal } from "../../actions/modal";
import { Modal } from "../../components/Modal";
import { newGame } from "../../lib/newGame";
import { saveGameData } from "../../lib/saveGameData";
import { store } from "../../lib/store";

export function OptionsModal() {
  return (
    <Modal>
      <h1>Options</h1>
      <br />
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

      <br />
      <br />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
