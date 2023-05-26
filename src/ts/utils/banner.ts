import { main } from '../main';
import { createHtml, setClass } from '../utils';

//#region -> PAGE BANNER
export const printPageBanner = (title: string = 'produkter') => {
	let temp = title;
	temp = temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase(); //! refactor to utils
	const pageBanner = createHtml('section'); //! refactor
	setClass(pageBanner, 'page-banner'); //! ^
	main.appendChild(pageBanner);
	const productListing = createHtml('section');
	productListing.className = 'product-listing';
	main.appendChild(productListing);
	const homePageTitle = createHtml('h1') as HTMLHeadingElement;
	setClass(homePageTitle, 'home-page__title'); //! Add class
	homePageTitle.innerHTML = temp;
	pageBanner.appendChild(homePageTitle);
};
