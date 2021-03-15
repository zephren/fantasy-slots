import { TileInstance } from "../types/TileInstance";
import { Tile } from "./Tile";

interface Props {
  tiles: TileInstance[];
  fade?: (tile: TileInstance) => boolean;
  onClickTile?: (tile: TileInstance) => void;
}

export function Inventory({ tiles, onClickTile, fade }: Props) {
  return (
    <div className="inventory">
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} onClick={onClickTile} fade={fade && fade(tile)} />
      ))}
    </div>
  );
}
