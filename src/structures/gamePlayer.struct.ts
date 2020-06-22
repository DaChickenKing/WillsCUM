import { Player } from "../../typings/player";

export class GamePlayer {
	constructor(protected _player: Player) {}
	get gold() {
		return this._player.data.gold;
	}
	set gold(amount: number) {
		this._player.data.gold = amount;
	}
}