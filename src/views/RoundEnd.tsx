import { TileConfig } from "../classes/TileConfig";
import { Inventory } from "../components/Inventory";
import { tileInstances } from "../config/tiles";
import { rarity } from "../config/tiles/rarities";
import { createTile } from "../lib/createTile";
import { calculateDeckScore } from "../lib/game";
import { newRound } from "../lib/newRound";
import { store } from "../lib/store";
import { TileInstance } from "../types/TileInstance";

export function RoundEnd() {
  const deckScore = calculateDeckScore();

  const { gameData } = store.state;

  function tileRarityCost(rarityValue: number, rarityCount: number) {
    return Math.pow(rarityValue + 1, 2) * 100 * (rarityCount + 1);
  }

  return (
    <div>
      <h1>The round is over</h1>
      <h2>Saved Coins: {gameData.savedCoins}</h2>
      <div>
        <div>
          This is your chance to get a new tile. Getting a new tile will
          increase the cost of the next tile of the same rarity
        </div>
        <div>
          {Object.keys(rarity).map((rarityName) => {
            const rarityValue = (rarity as any)[rarityName];
            const rarityCount = gameData.ownedTiles.reduce(
              (acc: number, tile: TileInstance) => {
                if (tile.config.rarity === rarityValue) {
                  acc++;
                }

                return acc;
              },
              0
            );

            return (
              <div>
                {rarityName}
                <div>Cost: {tileRarityCost(rarityValue, rarityCount)}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>Take this time to reorganize your deck</div>
        <div>
          <h1>Deck</h1>
          <div style={{ background: deckScore > 1 ? "red" : "none" }}>
            Deck Score: {deckScore.toFixed(2)}
          </div>
          <Inventory
            tiles={gameData.deckTiles}
            onClickTile={(tile) => {
              const index = gameData.deckTiles.indexOf(tile);

              if (index >= 0) {
                gameData.deckTiles.splice(index, 1);
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <h1>Owned Inventory</h1>
          <Inventory
            tiles={gameData.ownedTiles}
            onClickTile={(tile) => {
              const hasTile = gameData.deckTiles.find((otherTile) => {
                return otherTile.config.id === tile.config.id;
              });

              if (!hasTile) {
                gameData.deckTiles.push(tile);
              }
            }}
          />
        </div>
      </div>
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

      <button onClick={newRound}>Next round</button>
    </div>
  );
}
