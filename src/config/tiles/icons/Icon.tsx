import key from "./images/key.png";
import chest1 from "./images/chest1.png";
import chest2 from "./images/chest2.png";
import chest3 from "./images/chest3.png";
import chest4 from "./images/chest4.png";

import coal from "./images/coal.png";
import coin from "./images/coin.png";
import dagger1 from "./images/dagger1.png";

import pickaxe from "./images/pickaxe.png";
import rock from "./images/rock.png";
import { store } from "../../../lib/store";
import { createTile } from "../../../lib/createTile";
import { tileConfigsMap } from "..";
import { TileConfig } from "../../../classes/TileConfig";

const empty =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

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

// Cache icon instances for faster reference
// There is no need to create one for each new instance
const iconCache = new Map<string, JSX.Element>();

function getIcon(image: string, config: TileConfig) {
  let icon = iconCache.get(config.name!);

  if (!icon) {
    icon = <Icon image={image} config={config} />;
  }

  return icon;
}

export const Empty = () => getIcon(empty, tileConfigsMap.Empty);

export const Key = () => getIcon(key, tileConfigsMap.Key);
export const Chest1 = () => getIcon(chest1, tileConfigsMap.Small_Chest);
export const Chest2 = () => getIcon(chest2, tileConfigsMap.Medium_Chest);
export const Chest3 = () => getIcon(chest3, tileConfigsMap.Large_Chest);
export const Chest4 = () => getIcon(chest4, tileConfigsMap.Dark_Chest);

export const Coal = () => getIcon(coal, tileConfigsMap.Coal);
export const Coin = () => getIcon(coin, tileConfigsMap.Coin);
export const Dagger1 = () => getIcon(dagger1, tileConfigsMap.Dagger);

export const Pickaxe = () => getIcon(pickaxe, tileConfigsMap.Pickaxe);
export const Rock = () => getIcon(rock, tileConfigsMap.Rock);
