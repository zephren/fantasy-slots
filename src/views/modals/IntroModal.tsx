import { Modal } from "../../components/Modal";
import { Upgrades } from "../../components/Upgrades";
import { store } from "../../lib/store";

export function IntroModal() {
  const { gameData } = store.state;

  return (
    <Modal>
      <h1>Intro</h1>
      <div>this is the intro</div>
      <button
        onClick={() => {
          gameData.flags.introDismissed = true;
          store.update();
        }}
      >
        Close
      </button>
    </Modal>
  );
}
