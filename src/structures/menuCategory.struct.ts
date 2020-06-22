import type { Menu } from "./menu.struct";

export class MenuCategory {
	protected _element = document.createElement("div");
	protected content = document.createElement("div");
	constructor(protected menu: Menu, name: string) {
		this._element.classList.add("cum-category");
		this.menu.content.append(this._element);
		const title = document.createElement("h2");
		title.classList.add("cum-category-title");
		title.innerText = name;
		this.content.classList.add("cum-category-content");
	}
}