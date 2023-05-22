//******** HTML ********\\
//* CREATE ELEMENT
export function createHtml(htmlTag: string): HTMLElement {
	return document.createElement(htmlTag) as HTMLElement;
}

//******** SETTERS ********\\
//* CLASS
export function setClass(element: HTMLElement, className: string): void {
	element.classList.add(className);
}

//* ID
export function setId(element: HTMLElement, idName: string): void {
	element.setAttribute('id', idName);
}

//* ATTRIBUTES
export function setAttribute(
	element: HTMLElement,
	attribute: string,
	value: string
): void {
	element.setAttribute(attribute, value);
}
