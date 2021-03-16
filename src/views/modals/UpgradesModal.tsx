import { closeModal } from "../../actions/modal";
import { Modal } from "../../components/Modal";
import { Upgrades } from "../../components/Upgrades";

export function UpgradesModal() {
  return (
    <Modal>
      <h1>Upgrades</h1>
      <Upgrades />
      <br />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
