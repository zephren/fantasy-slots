import { TileInstance } from "../types/TileInstance";
import { Tile } from "./Tile";

interface Props {
  tiles: TileInstance[];
}

export function Inventory({ tiles }: Props) {
  return (
    <div className="inventory">
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </div>
  );
}
