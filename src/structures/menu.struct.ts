export class Menu {
	protected _menuElement = document.createElement("div");
	public content = document.createElement("div");
	protected closed = false;
	constructor() {
		document.getElementById("cum-menu")?.remove();
		this._menuElement.id = "cum-menu";
		document.getElementById("game-wrapper")?.prepend(this._menuElement);
		this._menuElement.append(this.content);
	}
}