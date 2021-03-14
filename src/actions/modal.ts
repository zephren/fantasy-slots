import { store } from "../lib/store";

export function openModal(modalName: string) {
  store.state.gameData.modal = modalName;
  store.update();
}

export function closeModal() {
  store.state.gameData.modal = "";
  store.update();
}
