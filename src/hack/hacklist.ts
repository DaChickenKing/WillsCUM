import * as hacks from "./hacks";
import { gameController } from "..";
export const hacklist = Object.values(hacks).map(x => new x(gameController));