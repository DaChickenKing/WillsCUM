import { ActivatableHack } from "../structures/activatableHack.struct";
import { categories, gameController } from "..";
import { InitHack } from "../decorators/initHack.decorator";
import { NumberInput, input, cancelled, Toast } from "../modules/sweetalert";

@InitHack()
export class GoldHack extends ActivatableHack {
	public name = "Gold Hack";
	public description = "Modifies your player's gold value.";
	public category = categories.player;
	public async action() {
		const amount = await input(NumberInput)(
			"Player Gold",
			"What do you want to set your gold to?",
			"1000",
			this.control.player.gold.toString()
		);
		if (cancelled(amount)) return;
		this.control.player.gold = Number(amount.value);
		await Toast.fire("Success!", "Your gold has been modified.", "success");
	}
}
