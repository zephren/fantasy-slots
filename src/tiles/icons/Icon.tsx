import key from "./images/key.png";
import chest1 from "./images/chest1.png";
import chest2 from "./images/chest2.png";
import chest3 from "./images/chest3.png";
import chest4 from "./images/chest4.png";

import coal from "./images/coal.png";
import coin from "./images/coin.png";
import dagger1 from "./images/dagger1.png";

const empty =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface Props {
  image?: any;
}

export function Icon({ image }: Props) {
  return <img className="icon" src={image} alt="" />;
}

export const Empty = () => <Icon image={empty} />;

export const Key = () => <Icon image={key} />;
export const Chest1 = () => <Icon image={chest1} />;
export const Chest2 = () => <Icon image={chest2} />;
export const Chest3 = () => <Icon image={chest3} />;
export const Chest4 = () => <Icon image={chest4} />;

export const Coal = () => <Icon image={coal} />;
export const Coin = () => <Icon image={coin} />;
export const Dagger1 = () => <Icon image={dagger1} />;
