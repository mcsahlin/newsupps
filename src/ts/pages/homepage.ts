import { bem } from '../constants';
import { cart } from '../main';
import { CartItem } from '../models/CartItem';
import { Product, addSamplePack } from '../models/product';
import { createHtml, setClass } from '../utils';
import { nextCard, prevCard } from '../utils/buttons';
import { main } from '../main';
import { loadPage } from '../utils/navigation';
const inventory: Product[] = addSamplePack();

export const loadHome = () => {
	main.innerHTML = '';
	const cards = createHtml('div');
	setClass(cards, bem.cards);
	main.appendChild(cards);

	/*
	 * CARDS
	 */
	inventory.map((product) => {
		let index = inventory.indexOf(product);
		let nextIndex = index + 1;
		let prevIndex = index - 1;
		if (index === inventory.length - 1) {
			nextIndex = 0;
		} else if (index === 0) {
			prevIndex = inventory.length - 1;
		}

		const card = createHtml('div');
		setClass(card, bem.card);
		card.id = index.toString();
		cards.appendChild(card);

		const title = createHtml('span');
		setClass(title, bem.cardTitle);
		title.innerHTML = product.label;
		card.appendChild(title);

		const cardImgBox = createHtml('div');
		setClass(cardImgBox, bem.cardImgBox);
		cardImgBox.addEventListener('click', () => {
			window.location.href = `product.html/${product.id}`;
		});
		card.appendChild(cardImgBox);

		const cardImg = createHtml('img');
		setClass(cardImg, bem.cardImg);
		cardImg.setAttribute('src', product.imgLink);
		cardImg.setAttribute('alt', 'Product image');
		cardImg.addEventListener('click', () => {
			localStorage.setItem('product', product.id);
			window.location.href = '/product.html';
			loadPage('product');
		});
		card.appendChild(cardImg);

		const buyBox = createHtml('div');
		setClass(buyBox, bem.cardBuyBox);
		card.appendChild(buyBox);

		const select = createHtml('div');
		setClass(select, bem.cardSelect);
		buyBox.appendChild(select);

		const value: string = product.options[0];
		const options = createHtml('select');
		setClass(options, bem.cardOptions);
		options.setAttribute('name', 'options');
		options.setAttribute('value', value);
		product.options.map((opt) => {
			const option = createHtml('option');
			setClass(option, bem.cardOption);
			option.setAttribute('value', opt);
			option.innerHTML = opt;
			options.appendChild(option);
		});
		select.appendChild(options);

		const price = createHtml('span');
		setClass(price, bem.cardPrice);
		price.innerHTML = `${product.price} kr`;
		select.appendChild(price);

		const button = createHtml('button');
		setClass(button, bem.cardCartBtn);
		button.innerHTML = 'Add to cart';
		button.addEventListener('click', () => {
			let cartitem = new CartItem(product, 1, options.toString());
			cart.push(cartitem);
			localStorage.setItem('cart', JSON.stringify(cart));
			button.innerHTML = 'Added to cart';
			setTimeout(() => {
				button.innerHTML = 'Add to cart';
			}, 2000);
		});
		buyBox.appendChild(button);

		const cardNav = createHtml('div');
		setClass(cardNav, bem.cardNav);
		card.appendChild(cardNav);

		if (index === 0 || index === inventory.length - 1) {
			switch (index) {
				case 0: {
					const topBottom = nextCard(nextIndex, true);
					setClass(topBottom, bem.cardNavBtnSolo);
					cardNav.appendChild(topBottom);
					break;
				}
				case inventory.length - 1: {
					const toTop = nextCard(nextIndex);
					toTop.innerHTML = 'Back to top';
					setClass(toTop, bem.cardNavBtnSolo);
					cardNav.appendChild(toTop);
					break;
				}
			}
		} else {
			const prevCardBtn = prevCard(prevIndex);
			cardNav.appendChild(prevCardBtn);
			const nextCardBtn = nextCard(nextIndex);
			cardNav.appendChild(nextCardBtn);
		}
	});
};
