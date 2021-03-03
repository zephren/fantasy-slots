import { store } from "../lib/store";
import { TileInstance } from "../types/TileInstance";

interface Props {
  tile: TileInstance;
  showValue?: boolean;
  onClick?: () => void;
}

export function Tile({ tile, showValue, onClick }: Props) {
  const className = ["tile"];

  if (tile.data.highlight) {
    className.push("highlight");
  }

  function clickedTile() {
    store.state.selectedTile = tile;
    store.update();

    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={className.join(" ")} onClick={clickedTile}>
      {!!tile.data.spinValue && showValue && (
        <div className="value">{tile.data.spinValue}</div>
      )}
      <tile.config.icon />
    </div>
  );
}
