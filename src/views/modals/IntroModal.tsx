import { Modal } from "../../components/Modal";
import { store } from "../../lib/store";

export function IntroModal() {
  const { gameData } = store.state;

  return (
    <Modal>
      <h1>Intro</h1>
      <div>
        You are a craftsman who's father just passed, leaving you his shop and a few personal possessions. One of these
        was a well worn rune that you had never seen before... what could it possibly be?
        <br />
        <br />
        <h3>Taxes</h3>
        As a shop owner you must pay taxes. As time goes on you are given more time, but also expected to pay more
        taxes.
        <br />
        <br />
        <h3>Getting Items</h3>
        Every day you will get new shipments of items, which you are then able to use for profit. What happens on the
        day will be completely up to chance.
        <br />
        <br />
        At the end of the day you will also have the opprtunity to select from additional items to be delivered to your
        shop.
        <br />
        <br />
        <h3>Item effects</h3>
        As a craftsman you are able to utilize items in different ways to produce even more valuable or useful items.
      </div>
      <br />
      <button
        onClick={() => {
          gameData.flags.introDismissed = true;
          store.update();
        }}
      >
        Begin your journey
      </button>
    </Modal>
  );
}
