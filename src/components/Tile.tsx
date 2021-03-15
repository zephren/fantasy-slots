import { store } from "../lib/store";
import { TileInstance } from "../types/TileInstance";

interface Props {
  tile: TileInstance;
  showValue?: boolean;
  fade?: boolean;
  onClick?: (tile: TileInstance) => void;
}

export function Tile({ tile, showValue, fade, onClick }: Props) {
  const className = ["tile"];

  if (tile.data.highlight) {
    className.push("highlight");
  }

  if (fade) {
    className.push("fade");
  }

  function clickedTile() {
    store.state.selectedTile = tile;
    store.update();

    if (onClick) {
      onClick(tile);
    }
  }

  return (
    <div className={className.join(" ")} onClick={clickedTile}>
      {!!tile.config.topStat && showValue && <div className="top-stat">{tile.config.topStat(tile)}</div>}
      {!!tile.data.spinValue && showValue && <div className="value">{tile.data.spinValue}</div>}
      <tile.config.icon />
    </div>
  );
}
