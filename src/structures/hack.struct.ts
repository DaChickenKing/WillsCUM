import { GameController } from "./gameController.struct";

export abstract class Hack {
	public button = document.createElement("button");
	public abstract name: string;
	public abstract description: string;
	constructor(protected _gameController: GameController) {
		this.initialize();
	}
	protected abstract initialize(): void;

}