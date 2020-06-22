export class Menu {
	protected _menuElement = document.createElement("div");
	protected _titleElement = document.createElement("h1");
	public content = document.createElement("div");
	constructor() {
		document.getElementById("cum-menu")?.remove();
		this._menuElement.id = "cum-menu";
		document.getElementById("game-wrapper")?.prepend(this._menuElement);
		this._menuElement.append(this.content);
		this.closed = true;
		this._menuElement.prepend(this._titleElement);
	}
	public get closed() {
		return this._menuElement.getAttribute("closed") === "true";
	}
	public set closed(value: boolean) {
		this._menuElement.setAttribute("closed", String(value))
	}
}