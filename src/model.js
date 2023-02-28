'use strict';

export class Model {

	constructor() {
		this.x = '';
		this.y = '';
		this.sign = '';
		this.finish = false;
		this.digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
		this.operation = ['-', '+', 'X', '/', '%'];
	}

	clearDisplay() {
		this.x = '';
		this.y = '';
		this.sign = '';
		this.finish = false;
	}

	addX(key) {
		if (!this.x.includes('.') || key != '.' ) { 
			this.x += key;
		}
	}

	addY(key) {
		if (!this.y.includes('.') || key != '.') {
			this.y += key;
		}
	}

	addOperation(key) {
		this.sign = key;
	}
	
	equals() {
		if (this.y === '') {
			this.y === this.x;
		}
		switch (this.sign) {
			case '+':
				this.x = +this.x + +this.y;
				break;
			case '-':
				this.x = this.x - this.y;
				break;
			case 'X':
				this.x = this.x * this.y;
				break;
			case '/':
				this.y === '0' && this.clearDisplay();
				this.x = this.x / this.y;
				break;
			case '%':
				this.x = this.x / 100 * this.y;
				break;
		}
		this.finish = true;
	}

	continueCount(key) {
		this.y = key;
		this.finish = false;
	}

	changeSign = () => 
		this.y === '' || this.finish ?
			this.x *= (-1) :
			this.y *= (-1);
	
}	