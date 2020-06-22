import "./style.scss"
import { Menu } from "./structures/menu.struct";
import { MenuCategory } from "./structures/menuCategory.struct";
import { GameController } from "./structures/gameController.struct";
console.log("Ready!");
export const menu = new Menu();
export const categories = {
	test: new MenuCategory(menu, "Test")
}
export const gameController = new GameController();