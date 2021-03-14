import { tileConfigsMap } from "../..";
import { getIcon } from "../../Icon";

// Images
import key from "./key.png";
import chest1 from "./chest1.png";
import chest2 from "./chest2.png";
import chest3 from "./chest3.png";
import chest4 from "./chest4.png";

// Icons
export const Key = () => getIcon(key, tileConfigsMap.Key);
export const Chest1 = () => getIcon(chest1, tileConfigsMap.Small_Chest);
export const Chest2 = () => getIcon(chest2, tileConfigsMap.Medium_Chest);
export const Chest3 = () => getIcon(chest3, tileConfigsMap.Large_Chest);
export const Chest4 = () => getIcon(chest4, tileConfigsMap.Dark_Chest);
