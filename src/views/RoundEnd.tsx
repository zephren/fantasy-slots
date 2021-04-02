import { Board } from "../components/Board";
import { Inventory } from "../components/Inventory";
import { Upgrades } from "../components/Upgrades";
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
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#333",
            boxShadow: "0em 0em 1em 0em #000",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "2em",
              padding: "0em 0.5em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              {gameData.savedCoins}
              <TextIcon Icon={Coin} /> (+{gameData.lastTotalCoins}
              <TextIcon Icon={Coin} /> earned)
            </div>
          </div>
          <div className="shrink-buttons">
            <button onClick={newRound}>Next round</button>
          </div>
        </div>
        <div className="main-container" style={{ width: "100%", flexGrow: 1 }}>
          <div style={{ padding: "1em" }}>
            <h1>The Round Is Over</h1>
            <br />
            <div>
              <div>
                This is your chance to get a new tile. Getting a new tile will increase the cost of the next tile of the
                same rarity
              </div>
              <br />
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
            <br />
            <h1>Take this time to reorganize your deck</h1>
            <div style={{ maxWidth: "50em" }}>
              Remove tiles by clicking on them in your deck, or add tiles by clicking on the ones in your inventory. You
              deck score must be less than one. This is to encourage a balance of tile rarities.
            </div>
            <br />
            <div>
              <div>
                <h2>Deck</h2>
                <div style={{ background: deckScore > 1 ? "red" : "none" }}>Score: {deckScore.toFixed(2)}</div>
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
                <h2>Owned Inventory</h2>
                <Inventory
                  tiles={gameData.ownedTiles}
                  fade={(tile) => {
                    return !!gameData.deckTiles.find((deckTile) => {
                      return deckTile.config.id === tile.config.id;
                    });
                  }}
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
            {gameData.superUser && (
              <>
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
              </>
            )}
            <br />

            <div style={{ maxWidth: "50em" }}>
              <h1>Upgrades</h1>
              <Upgrades />
            </div>

            <br />
            <h1>Board Next Round</h1>
            <div style={{ fontSize: "0.25em", display: "flex", justifyContent: "center" }}>
              <Board
                boardTiles={gameData.boardTiles}
                gameTiles={gameData.gameTiles}
                width={gameData.gridWidth}
                height={gameData.gridHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
