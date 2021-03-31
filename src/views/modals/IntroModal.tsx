import { closeModal } from "../../actions/modal";
import { Modal } from "../../components/Modal";
import { store } from "../../lib/store";

export function IntroModal() {
  const { gameData } = store.state;

  return (
    <Modal>
      <h1>Intro</h1>
      <div>
        <h3>What Is This?</h3>
        This is a slot machine incremental game. Every spin will result in new tiles on the board. Depending on the
        tiles that appear, you will earn money or trigger other effects.
        <br />
        <br />
        <h3>Game Play</h3>
        You must pay taxes after a set number of days. The taxes due are subtracted from your total moneny at the end of
        the tax period. As you successfully pass tax periods, the periods become longer and the amount of taxes due
        becomes greater. If you do not have enough money to pay taxes, you will instead get to keep the final amount of
        money earned. Save up enough money and you can use it to purchase new tiles or upgrades.
      </div>
      <br />
      <button onClick={closeModal}>Play!</button>
    </Modal>
  );
}

/*
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
  <button onClick={closeModal}>Begin your journey</button>
</Modal>
*/
