import { CartItem } from './models/CartItem';
import { loadPage } from './utils/navigation';
import { createPage, getUrl } from './utils';
const loadCart = JSON.parse(localStorage.getItem('cart') as string);
export let cart: CartItem[] = loadCart ? loadCart : [];
export let main = createPage();
const page = getUrl();
loadPage(page);
