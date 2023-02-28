/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Control": () => (/* binding */ Control)
/* harmony export */ });


class Control {
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



/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });


class Model {

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

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });


const select = (selector) => document.querySelector(selector),
	selectAll = (selector) => document.querySelectorAll(selector);
		
const calculator = select('.calculator'),
	numericBtns = selectAll('.dark-grey'),
	yellowBtns = selectAll('.yellow'),
	greyBtns = selectAll('.grey');

class View {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control.js */ "./src/control.js");








new _control_js__WEBPACK_IMPORTED_MODULE_3__.Control(new _model_js__WEBPACK_IMPORTED_MODULE_1__.Model(), new _view_js__WEBPACK_IMPORTED_MODULE_2__.View());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map