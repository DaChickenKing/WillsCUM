import { Game } from "./game";
import { Prodigy } from "./prodigy";
import { Hack } from "./global";
import { GameData } from "./gameData";
export declare interface PIXI {}
export declare interface Phaser {}
declare global {
	const PIXI: PIXI;
	const Phaser: Phaser;
	const hack: Hack
}
