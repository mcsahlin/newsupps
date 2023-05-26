import { Product } from './product';

export class CartItem {
	item: Product;
	quantity: number;
	options: string;
	constructor(item: Product, quantity: number, options: string) {
		this.item = item;
		this.quantity = quantity;
		this.options = options;
	}
}
