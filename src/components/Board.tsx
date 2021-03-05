import { createTile } from "../lib/createTile";
import { emptyTileConfig } from "../tiles";
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

  if (boardTiles.length === 0) {
    const emptyTileInstance = createTile(emptyTileConfig);

    return (
      <div className="board" style={style}>
        {" "
          .repeat(width * height)
          .split("")
          .map((_, index) => {
            return <Tile key={index} tile={emptyTileInstance} />;
          })}
      </div>
    );
  }

  return (
    <div className="board" style={style}>
      {boardTiles.map((deckIndex, index) => {
        const tile = gameTiles[deckIndex];
        return <Tile key={tile.id} tile={tile} showValue onClick={() => {}} />;
      })}
    </div>
  );
}
