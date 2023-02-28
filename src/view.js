'use strict';

const select = (selector) => document.querySelector(selector),
	selectAll = (selector) => document.querySelectorAll(selector);
		
const calculator = select('.calculator'),
	numericBtns = selectAll('.dark-grey'),
	yellowBtns = selectAll('.yellow'),
	greyBtns = selectAll('.grey');

export class View {
	constructor() {
		this.display = select('.display');
		this.clear = select('.clearBtn');
		this.buttons = select('.buttons');
	}

	clearDisplay() {
		this.display.value = 0;		
	}
	
	showDisplay(result) {
		this.display.value = result;
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const theme = prompt('light or dark(default)','light');
	if (theme === 'light') {
		changeStyle();
	}
});

calculator.insertAdjacentHTML('beforebegin', `<button class="changeStyleBtn d-flex mx-auto my-3" > Change Style`);
const changeStyleBtn = select('.changeStyleBtn')
changeStyleBtn.onclick = changeStyle;

function changeStyle() {
	calculator.classList.toggle('_calculatorLight');
	calculator.firstElementChild.classList.toggle('_displayLight');
	numericBtns.forEach(el => el.classList.toggle('_lightStyleBtns'));
	yellowBtns.forEach(el => el.classList.toggle('_yellowBtns'));
	greyBtns.forEach(el => el.classList.toggle('_greyBtns'));
	changeStyleBtn.classList.toggle('_changeStyleBtnLight');
}
