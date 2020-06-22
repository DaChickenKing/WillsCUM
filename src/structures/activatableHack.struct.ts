import { Hack } from "./hack.struct";
import type { GameController } from "./gameController.struct";

export abstract class ActivatableHack extends Hack {
	protected initialize() {
		this.button.classList.add("cum-activatable-hack");
		this.button.onclick = () => this.action();
		const wait = setInterval(() => {
			this.button.innerText = this.name;
			this.button.title = this.description;
			if (this.name) clearInterval(wait);
		}, 200);
	}
	public abstract action(): unknown;
}
