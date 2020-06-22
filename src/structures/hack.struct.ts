export abstract class Hack {
	protected button = document.createElement("button");
	constructor(public name: string, public description: string) {
		this.initialize()
	}
	protected abstract initialize(): void;

}