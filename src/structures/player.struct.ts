import { Player } from "../../typings/player";

export class GamePlayer {
	constructor(protected _player: Player) {}
	getGold() {
		return this._player.getGold();
	}
	setGold(amount: number) {
		return this._player.data.gold = amount;
	}
}