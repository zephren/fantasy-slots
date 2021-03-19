import { TextIcon } from "../config/tiles/Icon";
import { Coin } from "../config/tiles/misc/icons";
import { rarityNames } from "../config/tiles/rarities";
import { TileInstance } from "../types/TileInstance";

interface Props {
  tile?: TileInstance;
  onClick?: any;
}

export function TileDetails({ tile, onClick }: Props) {
  if (!tile) {
    return null;
  }

  const { config } = tile;

  return (
    <div className="tile-details" onClick={onClick}>
      <div className="name">{config.name}</div>
      <div className="rarity">{rarityNames[config.rarity]}</div>
      <tile.config.icon />
      <div className="base-value">
        {config.baseValue}
        <TextIcon Icon={Coin} />
      </div>
      <div className="description">{config.description && config.description()}</div>
    </div>
  );
}
