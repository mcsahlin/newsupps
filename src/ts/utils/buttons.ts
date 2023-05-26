import { bem } from '../constants';
import { addClass, createHtml, setClass } from '../utils';
import { inventory } from '../models/product';

export const prevCard = (prevIndex: number) => {
	const prevCard = createHtml('a');
	// addClass(prevCard, bem.cardNavBtn);
	addClass(prevCard, bem.cardNavBtnPrev);
	prevCard.addEventListener('click', () => {
		location.href = `#${prevIndex}`;
		console.log(prevIndex);
	});
	prevCard.setAttribute('href', `#${prevIndex}`);
	prevCard.innerHTML = 'Previous';
	return prevCard;
};

export const nextCard = (nextIndex: number, firstOrLast: boolean = false) => {
	const nextCard = createHtml('a');
	// addClass(nextCard, bem.cardNavBtn);
	if (firstOrLast) {
		addClass(nextCard, bem.cardNavBtnSolo);
		switch (nextIndex) {
			case 1: {
				nextCard.innerHTML = 'Next';
				break;
			}
			case 0: {
				nextCard.innerHTML = 'Back to top';
				break;
			}
		}
	} else {
		addClass(nextCard, bem.cardNavBtnNext);
		nextCard.innerHTML = 'Next';
	}
	nextCard.addEventListener('click', () => {
		location.href = `#${nextIndex}`;
	});
	return nextCard;
};
