import { menu } from ".."

document.addEventListener("keydown", event => {
	switch (event.code) {
		case "ShiftRight": {
			menu.closed = !menu.closed;
		}
	}
})