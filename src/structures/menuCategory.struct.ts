import type { Menu } from "./menu.struct";
import { Hack } from "./hack.struct";

export class MenuCategory {
	protected _element = document.createElement("div");
	protected content = document.createElement("div");
	constructor(protected menu: Menu, name: string) {
		this._element.classList.add("cum-category");
		this.menu.content.append(this._element);
		const title = document.createElement("h3");
		title.classList.add("cum-category-title");
		title.innerText = name;
		this._element.append(title);
		this.content.classList.add("cum-category-content");
		this._element.append(this.content)
	}
	addHack(hack: Hack) {
		this.content.append(hack.button);
	}
	addHacks(...hacks: Hack[]) {
		this.content.append(...hacks.map(x => x.button))
	}
}