import { store } from "../../lib/store";
import { createTile } from "../../lib/createTile";
import { tileConfigsMap } from ".";
import { TileConfig } from "../../classes/TileConfig";

const empty = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface Props {
  image?: any;
  config?: TileConfig;
}

export function Icon({ image, config: tileConfig }: Props) {
  return (
    <img
      className="icon"
      src={image}
      alt=""
      onClick={() => {
        if (tileConfig) {
          store.state.selectedTile = createTile(tileConfig);
          store.update();
        }
      }}
    />
  );
}

export function TextIcon({ Icon }: any) {
  return (
    <span className="text-icon">
      <Icon />
    </span>
  );
}

// Cache icon instances for faster reference
// There is no need to create one for each new instance
const iconCache = new Map<string, JSX.Element>();

export function getIcon(image: string, config: TileConfig) {
  let icon = iconCache.get(config.name!);

  if (!icon) {
    icon = <Icon image={image} config={config} />;
  }

  return icon;
}

export const Empty = () => getIcon(empty, tileConfigsMap.Empty);
