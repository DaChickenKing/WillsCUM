import { GameController } from "./gameController.struct";
import type { MenuCategory } from "./menuCategory.struct";

export abstract class Hack {
	public button = document.createElement("button");
	public abstract name: string;
	public abstract description: string;
	public abstract category: MenuCategory;
	constructor(protected _gameController: GameController) {
		this.initialize();
	}
	protected abstract initialize(): void;

}