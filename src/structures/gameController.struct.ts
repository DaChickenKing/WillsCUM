import { GamePlayer } from "./gamePlayer.struct";

export class GameController {
	public player = new GamePlayer(this._player);
	
	public get prodigy() {
		return hack.instance.prodigy;
	};
	public get game() {
		return hack.instance.game;
	};
	protected get _player() {
		return hack.player;
	}
}
