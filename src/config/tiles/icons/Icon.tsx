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

import healthPotion1 from "./images/healthPotion1.png";
import healthPotion2 from "./images/healthPotion2.png";
import healthPotion3 from "./images/healthPotion3.png";

import manaPotion1 from "./images/manaPotion1.png";
import manaPotion2 from "./images/manaPotion2.png";
import manaPotion3 from "./images/manaPotion3.png";

import elixer1 from "./images/elixer1.png";
import elixer2 from "./images/elixer2.png";
import elixer3 from "./images/elixer3.png";

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

export const HealthPotion1 = () =>
  getIcon(healthPotion1, tileConfigsMap.Small_Health_Potion);
export const HealthPotion2 = () =>
  getIcon(healthPotion2, tileConfigsMap.Medium_Health_Potion);

export const ManaPotion1 = () =>
  getIcon(manaPotion1, tileConfigsMap.Small_Mana_Potion);
export const ManaPotion2 = () =>
  getIcon(manaPotion2, tileConfigsMap.Medium_Mana_Potion);

export const Elixer1 = () => getIcon(elixer1, tileConfigsMap.Small_Elixer);
export const Elixer2 = () => getIcon(elixer2, tileConfigsMap.Medium_Elixer);
