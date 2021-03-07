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
import { getTileConfigByName } from "..";

const empty =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface Props {
  image?: any;
  tileName?: string;
}

export function Icon({ image, tileName: name }: Props) {
  return (
    <img
      className="icon"
      src={image}
      alt=""
      onClick={() => {
        const tileConfig = getTileConfigByName(name || "");

        if (tileConfig) {
          store.state.selectedTile = createTile(tileConfig);
          store.update();
        }
      }}
    />
  );
}

export const Empty = () => <Icon image={empty} />;

export const Key = () => <Icon image={key} tileName={"Key"} />;
export const Chest1 = () => <Icon image={chest1} />;
export const Chest2 = () => <Icon image={chest2} />;
export const Chest3 = () => <Icon image={chest3} />;
export const Chest4 = () => <Icon image={chest4} />;

export const Coal = () => <Icon image={coal} tileName={"Coal"} />;
export const Coin = () => <Icon image={coin} />;
export const Dagger1 = () => <Icon image={dagger1} />;

export const Pickaxe = () => <Icon image={pickaxe} tileName={"Pickaxe"} />;
export const Rock = () => <Icon image={rock} tileName={"Rock"} />;
