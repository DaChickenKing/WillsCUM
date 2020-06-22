import { Hack } from "../structures/hack.struct";
import { Constructor } from "../declarations";
import { gameController } from "..";

export const InitHack = (options = {}) => (constructor: Constructor<Hack>) => {
	const hack = new constructor(gameController);
	hack.category.addHack(hack);
}