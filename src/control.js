'use strict';

export class Control {
	constructor(model, view) {
		this.model = model;
		this.view = view;

	
		this.view.buttons.addEventListener('click', (event) => {
			this.pressedKey(event)
		});
	}
	
	
	pressedKey(event) {
		
		if (!event.target.classList.contains('btn')) return;

		if (event.target.classList.contains('clearBtn')) {
			this.model.clearDisplay();
			this.view.clearDisplay();
		};
		
		let key = event.target.value;

		if (this.model.digit.includes(key)) {
			if (this.model.y === '' && this.model.sign === '') {
				this.model.addX(key);
				this.view.showDisplay(this.model.x);
			} else if (this.model.x !== '' && this.model.y !== '' && this.model.finish) {
				this.model.continueCount(key);
				this.view.showDisplay(this.model.y);
			} else {
				this.model.addY(key);
				this.view.showDisplay(this.model.y);
			}
		}
		
		if (this.model.operation.includes(key)) {
			this.model.addOperation(key);
			this.view.showDisplay(this.model.sign);
		}

		if (key === '=') {
			this.model.equals();
			this.view.showDisplay(this.model.x);
		}

		if (key === "+/-") {
			this.model.changeSign();
			this.model.y === '' || this.model.finish ? 
				this.view.showDisplay(this.model.x) :
				this.view.showDisplay(this.model.y);
		}
	}

}

