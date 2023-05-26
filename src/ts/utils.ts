import { d, w } from './constants';
import { bem, userRoutes, siteRoutes } from './constants';
import { cart } from './main';
//----------------------------------------------------------------\\
//                           HELPERS                              \\
//----------------------------------------------------------------\\
// Class setter
export function setClass(element: HTMLElement, bemClass: string): void {
	element.className = bemClass;
}
// Class adder
export function addClass(element: HTMLElement, bemClass: string): void {
	element.classList.add(bemClass);
}
// HTML creator
export function createHtml(htmlTag: string): HTMLElement {
	return document.createElement(htmlTag) as HTMLElement;
}
// Page toggler
export const togglePage = (page: string): void => {
	const main = d.querySelector('.page') as HTMLDivElement;
	setClass(main, 'page');
	main.classList.toggle(`page--${page}`);
};

//----------------------------------------------------------------\\
//                         BASE ELEMENTS                          \\
//----------------------------------------------------------------\\
// - - - - - - - - - - - - - - HEADER - - - - - - - - - - - - - - \\
export const createHeader = () => {
	// let header = d.getElementById('header') as HTMLDivElement;
	const header = createHtml('header') as HTMLDivElement;
	setClass(header, bem.header);

	const headerSpan = d.createElement('span') as HTMLSpanElement;
	setClass(headerSpan, bem.headerMsg);

	headerSpan.innerHTML = 'FRI FRAKT PÅ ALLT | LEVERANS INOM 1-3 DAGAR';
	header.appendChild(headerSpan);
	return header;
};
// - - - - - - - - - - - - - - NAVBAR - - - - - - - - - - - - - - \\
export const createNavbar = () => {
	const createMenu = () => {
		const nav = createHtml('div');
		setClass(nav, 'nav');

		// <input type='checkbox' class='nav__checkbox' id='nav--toggle' />
		const navCheckbox = createHtml('input');
		setClass(navCheckbox, 'nav__checkbox');
		navCheckbox.setAttribute('type', 'checkbox');
		navCheckbox.setAttribute('id', 'nav--toggle');
		nav.appendChild(navCheckbox);

		// <label for='nav--toggle' class='nav__button'>
		const navLabel = createHtml('label');
		setClass(navLabel, 'nav__button');
		navLabel.setAttribute('for', 'nav--toggle');
		nav.appendChild(navLabel);

		// <span class='nav__icon' >& nbsp; </span>
		const navIcon = createHtml('span');
		setClass(navIcon, 'nav__icon');
		navIcon.innerHTML = '&nbsp;';
		navLabel.appendChild(navIcon);

		// <div class='nav__background' >& nbsp; </div>
		const navBackground = createHtml('div');
		setClass(navBackground, 'nav__background');
		navBackground.innerHTML = '&nbsp;';
		nav.appendChild(navBackground);

		// <nav class='nav__nav' >
		const navNav = createHtml('nav');
		setClass(navNav, 'nav__nav');
		nav.appendChild(navNav);

		// <ul class='nav__list' >
		const navList = createHtml('ul');
		setClass(navList, 'nav__list');
		navNav.appendChild(navList);

		// <li class='nav__item' >
		const navItem = createHtml('li');
		setClass(navItem, 'nav__item');
		navList.appendChild(navItem);

		// <a href='index.html' class='nav__link' > Start </a>
		const navLink = createHtml('a');
		setClass(navLink, 'nav__link');
		navLink.setAttribute('href', 'index.html');
		navLink.innerHTML = 'Start';
		navItem.appendChild(navLink);

		// <li class='nav__item' >
		const navItem2 = createHtml('li');
		setClass(navItem2, 'nav__item');
		navList.appendChild(navItem2);

		// <a href='cart.html' class='nav__link' > Cart </a>
		const navLink2 = createHtml('a');
		setClass(navLink2, 'nav__link');
		navLink2.setAttribute('href', 'cart.html');
		navLink2.innerHTML = 'Cart';
		navItem2.appendChild(navLink2);

		return nav;
	};
	return createMenu();
};
// - - - - - - - - - - - - - - MAIN - - - - - - - - - - - - - - - \\
export const createMain = (): HTMLDivElement => {
	// let main = d.getElementById('main') as HTMLDivElement;
	const main = createHtml('main') as HTMLDivElement;
	setClass(main, bem.main);
	return main;
};
// - - - - - - - - - - - - - - FOOTER - - - - - - - - - - - - - - \\
export const createFooter = () => {
	// const footer = d.getElementById('footer') as HTMLDivElement;
	const footer = createHtml('footer') as HTMLDivElement;
	setClass(footer, bem.footer);

	const contactBox = createHtml('div');
	setClass(contactBox, 'footer__contact');
	footer.appendChild(contactBox);

	const contactBoxTitle = createHtml('h3');
	setClass(contactBoxTitle, 'footer__contact-title');
	contactBoxTitle.innerHTML = 'Kontakt';
	contactBox.appendChild(contactBoxTitle);

	const contactBoxText = createHtml('p');
	setClass(contactBoxText, 'footer__contact-text');
	contactBoxText.innerHTML = `
		Kostgatan 1, 123 45 Stockholm <br>
		info@supstore.se <br>
		08-123 456 78 <br>
		Mån - Fre 10:00 - 18:00 <br>
		`;
	contactBox.appendChild(contactBoxText);

	const socialBox = createHtml('div');
	setClass(socialBox, bem.footerSocial);
	footer.appendChild(socialBox);

	const copyright = createHtml('p');
	setClass(copyright, bem.footerCopyright);
	copyright.innerHTML = '© 2023 SupStore. All rights reserved.';
	footer.appendChild(copyright);

	return footer;
};

export const getUrl = () => {
	const url = w.location.href;
	const urlSplit = url.split('/');
	const page = urlSplit[urlSplit.length - 1].split('.')[0];
	return page;
};

export const createPage = () => {
	const body = d.querySelector('body') as HTMLBodyElement;
	const header = createHeader();
	const navbar = createNavbar();
	const main = createMain();
	const footer = createFooter();
	body.appendChild(header);
	body.appendChild(navbar);
	body.appendChild(main);
	body.appendChild(footer);
	return main;
};
