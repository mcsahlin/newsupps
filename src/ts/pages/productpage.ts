import { bem } from '../constants';
import { main, cart } from '../main';
import { CartItem } from '../models/CartItem';
import { inventory, Product } from '../models/product';
import { createHtml, setClass } from '../utils';

export const loadProduct = () => {
	const pId = localStorage.getItem('product') as string;
	const product = inventory.find((product) => product.id === pId) as Product;
	const productDetails = createHtml('div');
	setClass(productDetails, bem.product);
	main.appendChild(productDetails);

	const displayBox = createHtml('div');
	setClass(displayBox, bem.productDisplayBox);
	productDetails.appendChild(displayBox);

	const imgBox = createHtml('div');
	setClass(imgBox, bem.productImgBox);
	displayBox.appendChild(imgBox);

	const img = createHtml('img');
	setClass(img, bem.productImg);
	img.setAttribute('src', product.imgLink);
	img.setAttribute('alt', 'Product image');
	imgBox.appendChild(img);

	const infoBox = createHtml('div');
	setClass(infoBox, bem.productInfoBox);
	displayBox.appendChild(infoBox);

	const title = createHtml('h3');
	setClass(title, bem.productTitle);
	title.innerHTML = product.label;
	infoBox.appendChild(title);

	const price = createHtml('span');
	setClass(price, bem.productPrice);
	price.innerHTML = `Price: ${product.price} SEK`;
	infoBox.appendChild(price);

	const optionsBox = createHtml('div');
	setClass(optionsBox, bem.productOptionsBox);
	infoBox.appendChild(optionsBox);

	const options = createHtml('select');
	setClass(options, bem.productOptions);
	options.setAttribute('name', 'options');
	options.setAttribute('value', product.options[0]);
	product.options.map((opt) => {
		const option = createHtml('option');
		setClass(option, bem.productOption);
		option.innerHTML = opt;
		options.appendChild(option);
	});
	optionsBox.appendChild(options);

	const quantityBox = createHtml('div');
	setClass(quantityBox, bem.productQtyBox);
	optionsBox.appendChild(quantityBox);

	const qtyInput = createHtml('input') as HTMLInputElement;
	setClass(qtyInput, bem.productQtyInput);
	qtyInput.setAttribute('type', 'number');
	qtyInput.setAttribute('value', '1');

	const qtyIncrement = createHtml('button');
	setClass(qtyIncrement, bem.productQtyIncrement);
	qtyIncrement.innerHTML = '+';

	const qtyDecrement = createHtml('button');
	setClass(qtyDecrement, bem.productQtyDecrement);
	qtyDecrement.innerHTML = '-';

	quantityBox.appendChild(qtyIncrement);
	quantityBox.appendChild(qtyInput);
	quantityBox.appendChild(qtyDecrement);

	qtyIncrement.addEventListener('click', () => {
		let qty: number = parseInt(qtyInput.value);
		const max = 10;
		qty < max ? qty++ : (qty = max);
		qtyInput.value = qty.toString();
		qty === max ? (qtyIncrement.innerHTML = 'MAX') : '+';
	});
	qtyDecrement.addEventListener('click', () => {
		let qty: number = parseInt(qtyInput.value);
		const max = 10;
		qty > 1 ? qty-- : console.log('error');
		qtyInput.value = qty.toString();
		qty === max - 1 ? (qtyIncrement.innerHTML = '+') : 'MAX';
	});
	qtyInput.addEventListener('blur', () => {
		let qty: number = parseInt(qtyInput.value);
		const max = 10;
		const min = 1;
		if (isNaN(qty)) qty = 1;
		qty > max ? (qty = max) : qty < min ? (qty = min) : (qty = qty);
		qtyInput.value = qty.toString();
	});

	const cartBtn = createHtml('button');
	setClass(cartBtn, bem.productCartBtn);
	cartBtn.innerHTML = 'Add to cart';
	cartBtn.addEventListener('click', () => {
		cart.push(new CartItem(product, 1, product.price));
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	optionsBox.appendChild(cartBtn);

	const descriptionBox = createHtml('article');
	setClass(descriptionBox, bem.productDescBox);
	productDetails.appendChild(descriptionBox);

	const descriptionTitle = createHtml('h3');
	setClass(descriptionTitle, bem.productDescTitle);
	descriptionTitle.innerHTML = 'Description';
	descriptionBox.appendChild(descriptionTitle);

	const description = createHtml('p');
	setClass(description, bem.productDescText);
	description.innerHTML = product.description;
	descriptionBox.appendChild(description);
};
