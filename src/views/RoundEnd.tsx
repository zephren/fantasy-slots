import { Inventory } from "../components/Inventory";
import { emptyTileConfig, tileInstances } from "../config/tiles";
import { TextIcon } from "../config/tiles/Icon";
import { Coin } from "../config/tiles/misc/icons";
import { rarity } from "../config/tiles/rarities";
import { createTile } from "../lib/createTile";
import { addOwnedTile, calculateDeckScore, findTile } from "../lib/game";
import { newRound } from "../lib/newRound";
import { store } from "../lib/store";
import { randomInt } from "../lib/utils";
import { TileInstance } from "../types/TileInstance";

export function RoundEnd() {
  const deckScore = calculateDeckScore();

  const { gameData } = store.state;

  function tileRarityCost(rarityValue: number, rarityCount: number) {
    return Math.pow(rarityValue + 1, 2) * 100 * (rarityCount + 1);
  }

  function getRemainingTiles() {
    const availableTilesByRarity: TileInstance[][] = Object.keys(rarity).map(() => []);
    const allTilesByRarity: TileInstance[][] = Object.keys(rarity).map(() => []);
    const ownedRarityCounts: number[] = Object.keys(rarity).map(() => 0);

    tileInstances.forEach((tile) => {
      allTilesByRarity[tile.config.rarity].push(tile);

      if (tile.config === emptyTileConfig) {
        // Skip the empty tile
        return;
      }

      if (!findTile(gameData.ownedTiles, tile.config.id)) {
        availableTilesByRarity[tile.config.rarity].push(tile);
      } else {
        ownedRarityCounts[tile.config.rarity]++;
      }
    });

    return {
      availableTilesByRarity,
      allTilesByRarity,
      ownedRarityCounts,
    };
  }

  function buyTileRarity(rarity: number) {
    const { availableTilesByRarity, ownedRarityCounts } = getRemainingTiles();

    const rarityTiles = availableTilesByRarity[rarity];

    const index = randomInt(0, rarityTiles.length - 1);

    gameData.savedCoins -= tileRarityCost(rarity, ownedRarityCounts[rarity]);

    addOwnedTile(rarityTiles[index].config);

    store.update();
  }

  const { availableTilesByRarity, allTilesByRarity, ownedRarityCounts } = getRemainingTiles();

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <div className="main-container">
        <h1>The round is over</h1>
        <h2>
          Saved: {gameData.savedCoins}
          <TextIcon Icon={Coin} /> ({gameData.lastTotalCoins} earned last round)
        </h2>
        <div>
          <div>
            This is your chance to get a new tile. Getting a new tile will increase the cost of the next tile of the
            same rarity
          </div>
          <div className="buy-new-card">
            {Object.keys(rarity).map((rarityName, index) => {
              const rarityValue = (rarity as any)[rarityName];
              const rarityCount = ownedRarityCounts[index];
              const cost = tileRarityCost(rarityValue, rarityCount);
              const availableTiles = availableTilesByRarity[index].length;
              const className = ["rarity"];
              let enabled = true;

              if (cost > gameData.savedCoins || availableTiles === 0) {
                className.push("disabled");
                enabled = false;
              }

              return (
                <div key={rarityValue} className={className.join(" ")}>
                  <div className="name">{rarityName}</div>
                  <div className="cost">{cost}</div>
                  <div className="remaining-tiles">
                    {availableTilesByRarity[index].length} of {allTilesByRarity[index].length} tiles available
                  </div>
                  {enabled && <button onClick={() => buyTileRarity(index)}>Buy</button>}
                </div>
              );
            })}
          </div>
        </div>
        <div>Take this time to reorganize your deck</div>
        <br />
        <div>
          <div>
            <h1>Deck</h1>
            <div style={{ background: deckScore > 1 ? "red" : "none" }}>Deck Score: {deckScore.toFixed(2)}</div>
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
        <br />
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
        <br />
        <div>
          <h1>All Tiles</h1>
          <Inventory
            tiles={tileInstances}
            fade={(tile) => {
              return !!gameData.ownedTiles.find((ownedTile) => {
                return ownedTile.config.id === tile.config.id;
              });
            }}
            onClickTile={(tile) => {
              if (gameData.superUser) {
                const hasTile = gameData.ownedTiles.find((otherTile) => {
                  return otherTile.config.id === tile.config.id;
                });

                if (!hasTile) {
                  gameData.ownedTiles.push(createTile(tile.config));
                }
              }
            }}
          />
        </div>
        <br />
        <button onClick={newRound}>Next round</button>
      </div>
    </div>
  );
}
