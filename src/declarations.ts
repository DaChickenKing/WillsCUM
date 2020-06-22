import { Hack } from "../typings/global";
declare global {
	const hack: Hack;
}
export type Abstract<T> = Function & {prototype: T};
export type Constructor<T> = new (...args: any[]) => T;
export type Class<T> = Abstract<T> | Constructor<T>;