import { Hack } from "./hack.struct";
import type { GameController } from "./gameController.struct";

export abstract class ActivatableHack extends Hack {
	abstract action: (gameController: GameController) => unknown;
	protected initialize() {
		this.button.classList.add("cum-activatable-hack");
		this.button.onclick = () => this.action(this._gameController);
		this.button.innerText = this.name;
		this.button.title = this.description;
	}
}