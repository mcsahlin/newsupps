import { main } from '../main';
import { loadHome } from '../pages/homepage';
import { loadProduct } from '../pages/productpage';

export const loadPage = (page: string) => {
	main.innerHTML = '';
	switch (page) {
		case 'index':
			// printPageBanner(page.toUpperCase());
			loadHome();
			break;
		case 'product':
			loadProduct();
			break;
		// case 'cart.html':

		default:
			loadHome();

			break;
	}
};
