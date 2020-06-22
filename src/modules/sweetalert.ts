import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
export * as Swal from "sweetalert2";
export const Input = Swal.mixin({
	allowOutsideClick: false,
	cancelButtonText: "Cancel",
	confirmButtonText: "Confirm",
	icon: "info",
	input: "text",
});
export const NumberInput = Input.mixin({ input: "number" });
export const Toast = Swal.mixin({
	toast: true,
	position: "bottom",
});
/**
 *
 * @param values Values for input.
 * @param options Optional sweetalert options.
 * @example const value = await multiDropdown([["name", "Name", ["John", "Jane"]], ["sex", "Sex", ["Male", "Female", "Other"]]]) // cool
 */
export const multiDropdown = async (
	values: [string, string, [string, string][]][],
	options: SweetAlertOptions<any, any> = {}
): Promise<null | string[]> => {
	const elements = document.createElement("div");
	const selections: HTMLSelectElement[] = [];
	for (const [id, name, opts] of values) {
		const selection = document.createElement("select");
		selection.classList.add("swal2-select");
		selection.value = id;
		selections.push(selection);
		const placeholder = new Option(name, "", true, true);
		placeholder.disabled = true;
		selection.add(placeholder);
		for (const [display, opt] of opts) {
			const option = new Option(display, String(opt));
			selection.add(option);
		}
		elements.append(selection);
	}
	const mixed = Swal.mixin(options);
	const val = await mixed.fire({
		html: elements.innerHTML,
		focusConfirm: false,
		preConfirm: () => {
			return selections.map(x => x.options[x.selectedIndex]);
		},
	});
	if (val.dismiss || val.value?.some(x => x.value === "")) return null;
	return val.value?.map(x => x.value) ?? null;
};
export const cancelled = (value: SweetAlertResult) => value.dismiss ?? value.value === undefined;
export const input = (swal: typeof Swal) => (
	title: string,
	text: string,
	inputPlaceholder?: string,
	inputValue?: string,
	options: SweetAlertOptions = {}
) =>
	swal.fire({
		title,
		text,
		inputPlaceholder,
		inputValue,
		inputAutoTrim: true,
	});
