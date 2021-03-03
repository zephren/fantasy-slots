import { emptyTileConfig } from "../tiles";
import { rarity } from "../tiles/rarities";
import { TileInstance } from "../types/TileInstance";
import { createTile } from "./createTile";
import { randomInt } from "./utils";
import { store } from "./store";
import { saveGameData } from "./saveGameData";

export function findTile(tiles: TileInstance[], id: string) {
  return tiles.find((tile) => {
    return tile.configId === id;
  });
}

export function addOwnedTile(tileConfig = emptyTileConfig) {
  const { ownedTiles } = store.state.gameData;

  if (findTile(ownedTiles, tileConfig.id)) {
    console.log(`Already own tile ${tileConfig.name}`);
    return;
  }

  console.log(`Adding owned tile ${tileConfig.name}`);

  const tile = createTile(tileConfig);

  ownedTiles.push(tile);
}

export function addDeckTile(tileId?: string) {
  if (!tileId) {
    return;
  }

  const { deckTileIds } = store.state.gameData;

  if (!deckTileIds.includes(tileId)) {
    deckTileIds.push(tileId);
  }
}
export function addGameTile(newTile: TileInstance) {
  const { gameTiles } = store.state.gameData;

  const emptyTileIndex = gameTiles.findIndex((tile) => {
    return tile.config.id === emptyTileConfig.id;
  });
  console.log(emptyTileIndex);
  if (emptyTileIndex >= 0) {
    gameTiles.splice(emptyTileIndex, 1, newTile);
  } else {
    gameTiles.push(newTile);
  }
}

export function buildDeck() {
  const { gameData } = store.state;
  const { deckTileIds, ownedTiles } = gameData;

  gameData.deckTiles = deckTileIds.map((id) => {
    return findTile(ownedTiles, id) || createTile(emptyTileConfig);
  });
}

export function ArrayRandomItem<T>(array: T[]) {
  return array[randomInt(0, array.length - 1)];
}

export function pickRandomTile(tiles: TileInstance[], maxRarity: number) {
  const tilesAvailable = tiles.reduce((acc, tile) => {
    if (tile.config.rarity <= maxRarity) {
      acc.push(tile);
    }

    return acc;
  }, [] as TileInstance[]);

  return ArrayRandomItem<TileInstance>(tilesAvailable);
}

export function setInitialGameTiles() {
  const { gameData } = store.state;
  const { deckTiles } = gameData;

  const gameTiles: TileInstance[] = [];

  for (let i = 0; i < 5; i++) {
    const tile = pickRandomTile(deckTiles, rarity.COMMON);
    gameTiles.push(createTile(tile.config));
  }

  gameData.gameTiles = gameTiles;

  fillEmptyTiles();
}

export function fillEmptyTiles() {
  const { gameData } = store.state;
  const { gameTiles, gridWidth, gridHeight } = gameData;

  for (let i = 0; gameTiles.length < gridWidth * gridHeight; i++) {
    gameTiles.push(createTile(emptyTileConfig));
  }
}

export function generateBoard() {
  const { gameData } = store.state;
  const { gameTiles, gridWidth, gridHeight } = gameData;
  const boardTiles = [];
  const availableGameTiles = [...gameTiles]; // New array

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    // Get a random index
    const availableIndex = Math.floor(
      Math.random() * availableGameTiles.length
    );
    const gameTile = availableGameTiles[availableIndex];
    const index = gameTiles.indexOf(gameTile);

    // console.log(index);
    boardTiles.push(index);

    availableGameTiles.splice(availableIndex, 1);
  }

  return boardTiles;
}

export function resetTiles() {
  const { gridWidth, gridHeight, gameTiles, boardTiles } = store.state.gameData;

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const tile = gameTiles[boardTiles[i]];
    tile.data.spinValue = 0;
  }
}

export function spin() {
  const { gameData } = store.state;
  const { gridWidth, gridHeight, deckTiles } = gameData;

  gameData.boardTiles = generateBoard();

  resetTiles();
  processBoard();

  store.state.spinning = true;
  store.update();

  let index = 0;
  const interval = setInterval(() => {
    const { boardTiles, gameTiles } = gameData;

    if (index > 0 && index <= gridWidth * gridHeight) {
      const lastTile = gameTiles[boardTiles[index - 1]];
      lastTile.data.highlight = false;
    }

    if (index > gridWidth * gridHeight) {
      clearInterval(interval);

      store.state.spinning = false;
      store.state.gameData.totalCoins += store.state.gameData.boardValue;
      store.state.tilesToPick = pickTiles(deckTiles);
      store.update();

      saveGameData();

      return;
    }

    if (index < gridWidth * gridHeight) {
      const tile = gameTiles[boardTiles[index]];
      tile.data.highlight = true;
      tile.data.totalAppearances++;
      tile.data.spinValue = calculateBoardTileValue(tile, index);
    }

    index++;

    let boardValue = 0;
    for (const index of boardTiles) {
      boardValue += gameTiles[boardTiles[index]].data.spinValue;
    }
    store.state.gameData.boardValue = boardValue;

    store.update();
  }, 100);
}

export function processBoard() {
  const { gameTiles } = store.state.gameData;

  // Add to totalSpins
  gameTiles.forEach((tile) => {
    tile.data.totalSpins++;
  });
}

export function isAdjacent(
  originIndex: number,
  checkIndex: number,
  width: number,
  height: number
) {
  // Up / Down or out of bounds
  if (checkIndex < 0 || checkIndex >= width * height) {
    return false;
  }

  // Left / Right
  if (originIndex + 1 === checkIndex || originIndex - 1 === checkIndex) {
    if (Math.floor(checkIndex / width) !== Math.floor(originIndex / width)) {
      return false;
    }
  }

  // Down > Left / Right
  if (
    originIndex + width + 1 === checkIndex ||
    originIndex + width - 1 === checkIndex
  ) {
    if (
      Math.floor(checkIndex / width) !==
      Math.floor((originIndex + width) / width)
    ) {
      return false;
    }
  }

  // Up > Left / Right
  if (
    originIndex - width + 1 === checkIndex ||
    originIndex - width - 1 === checkIndex
  ) {
    if (
      Math.floor(checkIndex / width) !==
      Math.floor((originIndex - width) / width)
    ) {
      return false;
    }
  }

  return true;
}

export function getAdjacentIndexes(
  startIndex: number,
  width: number,
  height: number
): number[] {
  const indexes: number[] = [];

  indexes.push(startIndex + width);
  indexes.push(startIndex - width);
  indexes.push(startIndex + 1);
  indexes.push(startIndex - 1);

  indexes.push(startIndex + width - 1);
  indexes.push(startIndex + width + 1);
  indexes.push(startIndex - width - 1);
  indexes.push(startIndex - width + 1);

  for (let i = 7; i >= 0; i--) {
    if (!isAdjacent(startIndex, indexes[i], width, height)) {
      indexes.splice(i, 1);
    }
  }

  return indexes;
}

function getTiles(tileIndexes: number[]) {
  const { boardTiles, gameTiles } = store.state.gameData;

  return tileIndexes.map((index) => {
    return gameTiles[boardTiles[index]];
  });
}

export function calculateBoardTileValue(tile: TileInstance, index: number) {
  const { gameData } = store.state;
  const { gridWidth, gridHeight } = gameData;

  console.log("Tile Index", index);

  const context = {
    tile,
    gameData,
    getAdjacentIndexes: () => {
      return getAdjacentIndexes(index, gridWidth, gridHeight);
    },
    getTiles,
  };

  return tile.config.calculateValue(context);
}

function pickTiles(tiles: TileInstance[], count = 3) {
  const availableTiles = [...tiles];
  const pickedTiles = [];

  for (let i = 0; i < count; i++) {
    const index = randomInt(0, availableTiles.length - 1);
    const tile = availableTiles.splice(index, 1)[0];

    if (tile) {
      pickedTiles.push(createTile(tile.config));
    }
  }

  return pickedTiles;
}
