import { ActivatableHack } from "../structures/activatableHack.struct";
import { GameController } from "../structures/gameController.struct";
import Swal from "sweetalert2";
import { categories, gameController } from "..";

export class TestHack extends ActivatableHack {
	public name = "Test Hack"
	public description = "Testing hack!"
	public async action() {
		await Swal.fire("Title!", "Description...?", "info");
	}
}