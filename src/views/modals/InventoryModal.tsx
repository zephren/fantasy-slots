import { closeModal } from "../../actions/modal";
import { Inventory } from "../../components/Inventory";
import { Modal } from "../../components/Modal";
import { tileInstances } from "../../config/tiles";
import { createTile } from "../../lib/createTile";
import { calculateDeckScore } from "../../lib/game";
import { store } from "../../lib/store";

export function InventoryModal() {
  const { gameData } = store.state;

  const deckScore = calculateDeckScore();

  return (
    <Modal style={{ width: "50em" }}>
      <div>
        <h1>Inventory</h1>
        <br />
        <div>
          <h2>Game Tiles</h2>
          <br />
          <Inventory tiles={gameData.gameTiles} />
        </div>
        <br />
        <div>
          <h2>Deck</h2>
          <br />
          <div style={{ background: deckScore > 1 ? "red" : "none" }}>Deck Score: {deckScore.toFixed(2)}</div>
          <Inventory tiles={gameData.deckTiles} />
        </div>
        {/* <div>
          <h1>Owned Inventory</h1>
          <Inventory tiles={gameData.ownedTiles} />
        </div> */}
        {gameData.superUser && (
          <div>
            <h1>All Tiles</h1>
            <Inventory
              tiles={tileInstances}
              onClickTile={(tile) => {
                const hasTile = gameData.ownedTiles.find((otherTile) => {
                  return otherTile.config.id === tile.config.id;
                });

                if (!hasTile) {
                  gameData.ownedTiles.push(createTile(tile.config));
                }
              }}
            />
          </div>
        )}
        <br />
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
}
