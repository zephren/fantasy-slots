import { tileConfigsMap } from "../..";
import { getIcon } from "../../Icon";

// Images
import pickaxe from "./pickaxe.png";
import rock from "./rock.png";

import oreCoal from "./oreCoal.png";
import oreCopper from "./oreCopper.png";
// import oreExoticPurple from "./oreExoticPurple.png";
import oreGold from "./oreGold.png";
import oreIron from "./oreIron.png";
import oreMithril from "./oreMithril.png";
import oreSilver from "./oreSilver.png";

// Icons
export const Pickaxe = () => getIcon(pickaxe, tileConfigsMap.Pickaxe);
export const Rock = () => getIcon(rock, tileConfigsMap.Rock);

export const Coal = () => getIcon(oreCoal, tileConfigsMap.Coal);
export const OreCopper = () => getIcon(oreCopper, tileConfigsMap.Copper_Ore);
export const OreIron = () => getIcon(oreIron, tileConfigsMap.Iron_Ore);
export const OreSilver = () => getIcon(oreSilver, tileConfigsMap.Silver_Ore);
export const OreGold = () => getIcon(oreGold, tileConfigsMap.Gold_Ore);
export const OreMithril = () => getIcon(oreMithril, tileConfigsMap.Mithril_Ore);
