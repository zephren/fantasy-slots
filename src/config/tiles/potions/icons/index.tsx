import { tileConfigsMap } from "../..";
import { getIcon } from "../../Icon";

// Images
import elixer1 from "./elixer1.png";
import elixer2 from "./elixer2.png";
import elixer3 from "./elixer3.png";
import healthPotion1 from "./healthPotion1.png";
import healthPotion2 from "./healthPotion2.png";
import healthPotion3 from "./healthPotion3.png";
import manaPotion1 from "./manaPotion1.png";
import manaPotion2 from "./manaPotion2.png";
import manaPotion3 from "./manaPotion3.png";

// Icons
export const HealthPotion1 = () => getIcon(healthPotion1, tileConfigsMap.Small_Health_Potion);
export const HealthPotion2 = () => getIcon(healthPotion2, tileConfigsMap.Medium_Health_Potion);

export const ManaPotion1 = () => getIcon(manaPotion1, tileConfigsMap.Small_Mana_Potion);
export const ManaPotion2 = () => getIcon(manaPotion2, tileConfigsMap.Medium_Mana_Potion);

export const Elixer1 = () => getIcon(elixer1, tileConfigsMap.Small_Elixer);
export const Elixer2 = () => getIcon(elixer2, tileConfigsMap.Medium_Elixer);
