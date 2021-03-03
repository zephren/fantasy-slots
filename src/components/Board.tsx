import { TileInstance } from "../types/TileInstance";
import { Tile } from "./Tile";

interface Props {
  boardTiles: number[];
  gameTiles: TileInstance[];
  width: number;
  height: number;
}

export function Board({ boardTiles, gameTiles, width, height }: Props) {
  const style = {
    fontSize: "1.5em",
    gridTemplateColumns: `repeat(${width}, 5em)`,
    gridTemplateRows: `repeat(${height}, 5em)`,
  };

  return (
    <div className="board" style={style}>
      {boardTiles.map((deckIndex, index) => {
        const tile = gameTiles[deckIndex];
        return (
          <Tile
            key={tile.id}
            tile={tile}
            showValue
            onClick={() => {
              // const { boardTiles, gameTiles } = store.state.gameData;
              // const indexes = getAdjacentIndexes(index, width, height, 1);
              // console.log(indexes);
              // indexes.forEach((foundIndex) => {
              //   const foundTile = gameTiles[boardTiles[foundIndex]];
              //   foundTile.data.highlight = true;
              // });
              // store.update();
            }}
          />
        );
      })}
    </div>
  );
}
