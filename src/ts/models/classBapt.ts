/*
 * Project: ElectronVue
 * File Created: Monday, 1st July 2019 11:01:07 am
 * Author: break (
 * -----
 * Last Modified: Monday, 1st July 2019 11:01:08 am
 * Modified By: break (
 * -----
*/
export function classify(element: string | object, page: boolean = false) {
	if (page) {
		return `classes.pages.${element}`;
	} else {
		return `classes.elements.${element}`;
	}
} 

export const classes = {
	pages: {
		home: 'page page--home',
		product: 'page page--product',
		cart: 'page page--cart',
		checkout: 'page page--checkout',
		thankyou: 'page page--thankyou',
		notfound: 'page page--notfound',
	} as const,
	elems: {
		header: 'header',
		navbar: 'navbar', //! TODO_7: create a function that creates a navbar
		navbarLogoContainer: 'navbar__logo-container',
		navbarLogoLink: 'navbar__logo-link',
		navbarLogo: 'navbar__logo',
		navbarLinks: 'navbar__links',
		navbarLink: 'navbar__link',
		burger: 'burger',
		burgerCheckbox: 'burger__checkbox',
		burgerLine: 'burger__line',
		burgerItems: 'burger__items',
		burgerItem: 'burger__item',
		burgerLink: 'burger__link',
		burgerLabel: 'burger__label',
		cart: 'cart',
		cartIcon: 'cart__icon',
		cartBadge: 'cart__badge',
		footer: 'footer',
	} as const,
};
