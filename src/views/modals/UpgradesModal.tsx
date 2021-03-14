import { closeModal } from "../../actions/modal";
import { Modal } from "../../components/Modal";
import { Upgrades } from "../../components/Upgrades";
import { store } from "../../lib/store";

export function UpgradesModal() {
  return (
    <Modal>
      <h1>Upgrades</h1>
      <Upgrades />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
