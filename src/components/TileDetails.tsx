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
      <tile.config.icon />
      <div className="description">
        {config.description && config.description()}
      </div>
    </div>
  );
}
