import { TileInstance } from "../types/TileInstance";
import { Tile } from "./Tile";

interface Props {
  tiles: TileInstance[];
  onClickTile?: (tile: TileInstance) => void;
}

export function Inventory({ tiles, onClickTile }: Props) {
  return (
    <div className="inventory">
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} onClick={onClickTile} />
      ))}
    </div>
  );
}
