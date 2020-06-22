import { menu } from ".."

document.addEventListener("keydown", event => {
	switch (event.code) {
		case "ShiftRight": {
			menu.closed = !menu.closed;
		} break;
		case "Escape": {
			menu.closed = true;
		} break;
	}
})
document.getElementById("game-container")?.addEventListener("click", () => {
	menu.closed = true;
})