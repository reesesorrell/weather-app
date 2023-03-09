/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/display-adder-reese/display-adder.js":
/*!***********************************************************!*\
  !*** ./node_modules/display-adder-reese/display-adder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const displayAdder = (function() {
    const createDiv = (parentElement, textContent='', divId='', divClass='') => {
        return _createElement(parentElement, 'div', textContent, divId, divClass);
    }

    const createImage = (parentElement, imageSource, imageId='', imageClass='') => {
        var newImage = new Image();
        newImage.src = imageSource;
        _addClasses(newImage, imageClass);
        newImage.id = imageId;
        parentElement.appendChild(newImage);
        return newImage;
    }

    const createButton = (parentElement, onclickFunction, textContent='', buttonId = '', buttonClass='') => {
        const newButton = _createElement(parentElement, 'button', textContent, buttonId, buttonClass);
        newButton.onclick = onclickFunction;
        return newButton;
    }

    const createForm = (parentElement, textContent='', formId='', formClass='') => {
        return _createElement(parentElement, 'form', textContent, formId, formClass);
    }

    const createInput = (parentElement, inputType, inputName, textContent='', inputId='', inputClass='') => {
        const newInput = _createElement(parentElement, 'input', textContent, inputId, inputClass);
        newInput.type = inputType;
        newInput.name = inputName;
        return newInput;
    }

    const _createElement = (parentElement, elementType, textContent='', elementId='', elementClass='') => {
        const newElement = document.createElement(elementType);
        _addClasses(newElement, elementClass);
        newElement.id = elementId;
        newElement.textContent = textContent;
        parentElement.appendChild(newElement)
        return newElement;
    }

    const _addClasses = (element, classes) => {
        if (classes) {
            const classList = classes.split(',');
            classList.forEach(oneClass => {
                element.classList.add(oneClass);
            });
        }
    }

    return {createDiv, createImage, createButton, createForm, createInput};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAdder);

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
/* harmony import */ var display_adder_reese__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! display-adder-reese */ "./node_modules/display-adder-reese/display-adder.js");


const populateHomePage = () => {
    const mainPage = document.getElementById('content');
    const weatherForm = display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createForm(mainPage, '', 'weather-form');

    const locationLabel = document.createElement('label');
    locationLabel.textContent = "Enter your location: ";
    locationLabel.id = "location-label";
    locationLabel.htmlFor = "location";
    weatherForm.appendChild(locationLabel);

    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(weatherForm, 'text', 'location', '', 'location-input');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(weatherForm, 'submit', 'submit', 'submit');

    weatherForm.addEventListener("submit", (e) => {e.preventDefault(); getWeatherData()});
}

async function getWeatherData() {
    console.log("working");
    const location = document.getElementById('location-input').value;
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=d431ebd0bb9dd00136e6d9c9c605d006");
    const weatherData = await response.json();
    console.log(weatherData);
    addDataToScreen(weatherData);
}

const addDataToScreen = (weatherData) => {
    const tempInKelvin = weatherData.main.temp;
    const tempInFahrenheit = Math.round(((tempInKelvin-273.15)*9)/5 + 32);
    const mainPage = document.getElementById('content');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, tempInFahrenheit + " degrees fahrenheit", 'temperature-display');
}

populateHomePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxZQUFZOzs7Ozs7VUNyRDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQSx3QkFBd0Isc0VBQXVCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksdUVBQXdCO0FBQzVCLElBQUksdUVBQXdCOztBQUU1QixtREFBbUQsb0JBQW9CLGlCQUFpQjtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBc0I7QUFDMUI7O0FBRUEsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kaXNwbGF5LWFkZGVyLXJlZXNlL2Rpc3BsYXktYWRkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRpc3BsYXlBZGRlciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjcmVhdGVEaXYgPSAocGFyZW50RWxlbWVudCwgdGV4dENvbnRlbnQ9JycsIGRpdklkPScnLCBkaXZDbGFzcz0nJykgPT4ge1xuICAgICAgICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQocGFyZW50RWxlbWVudCwgJ2RpdicsIHRleHRDb250ZW50LCBkaXZJZCwgZGl2Q2xhc3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUltYWdlID0gKHBhcmVudEVsZW1lbnQsIGltYWdlU291cmNlLCBpbWFnZUlkPScnLCBpbWFnZUNsYXNzPScnKSA9PiB7XG4gICAgICAgIHZhciBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgX2FkZENsYXNzZXMobmV3SW1hZ2UsIGltYWdlQ2xhc3MpO1xuICAgICAgICBuZXdJbWFnZS5pZCA9IGltYWdlSWQ7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgICByZXR1cm4gbmV3SW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHBhcmVudEVsZW1lbnQsIG9uY2xpY2tGdW5jdGlvbiwgdGV4dENvbnRlbnQ9JycsIGJ1dHRvbklkID0gJycsIGJ1dHRvbkNsYXNzPScnKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IF9jcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQsICdidXR0b24nLCB0ZXh0Q29udGVudCwgYnV0dG9uSWQsIGJ1dHRvbkNsYXNzKTtcbiAgICAgICAgbmV3QnV0dG9uLm9uY2xpY2sgPSBvbmNsaWNrRnVuY3Rpb247XG4gICAgICAgIHJldHVybiBuZXdCdXR0b247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9IChwYXJlbnRFbGVtZW50LCB0ZXh0Q29udGVudD0nJywgZm9ybUlkPScnLCBmb3JtQ2xhc3M9JycpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQsICdmb3JtJywgdGV4dENvbnRlbnQsIGZvcm1JZCwgZm9ybUNsYXNzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9IChwYXJlbnRFbGVtZW50LCBpbnB1dFR5cGUsIGlucHV0TmFtZSwgdGV4dENvbnRlbnQ9JycsIGlucHV0SWQ9JycsIGlucHV0Q2xhc3M9JycpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBfY3JlYXRlRWxlbWVudChwYXJlbnRFbGVtZW50LCAnaW5wdXQnLCB0ZXh0Q29udGVudCwgaW5wdXRJZCwgaW5wdXRDbGFzcyk7XG4gICAgICAgIG5ld0lucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICAgIG5ld0lucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIHJldHVybiBuZXdJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRWxlbWVudCA9IChwYXJlbnRFbGVtZW50LCBlbGVtZW50VHlwZSwgdGV4dENvbnRlbnQ9JycsIGVsZW1lbnRJZD0nJywgZWxlbWVudENsYXNzPScnKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgX2FkZENsYXNzZXMobmV3RWxlbWVudCwgZWxlbWVudENsYXNzKTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGVsZW1lbnRJZDtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IF9hZGRDbGFzc2VzID0gKGVsZW1lbnQsIGNsYXNzZXMpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKG9uZUNsYXNzID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQob25lQ2xhc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZURpdiwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlRm9ybSwgY3JlYXRlSW5wdXR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUFkZGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlBZGRlciBmcm9tIFwiZGlzcGxheS1hZGRlci1yZWVzZVwiO1xuXG5jb25zdCBwb3B1bGF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB3ZWF0aGVyRm9ybSA9IGRpc3BsYXlBZGRlci5jcmVhdGVGb3JtKG1haW5QYWdlLCAnJywgJ3dlYXRoZXItZm9ybScpO1xuXG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbG9jYXRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgeW91ciBsb2NhdGlvbjogXCI7XG4gICAgbG9jYXRpb25MYWJlbC5pZCA9IFwibG9jYXRpb24tbGFiZWxcIjtcbiAgICBsb2NhdGlvbkxhYmVsLmh0bWxGb3IgPSBcImxvY2F0aW9uXCI7XG4gICAgd2VhdGhlckZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG5cbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlSW5wdXQod2VhdGhlckZvcm0sICd0ZXh0JywgJ2xvY2F0aW9uJywgJycsICdsb2NhdGlvbi1pbnB1dCcpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVJbnB1dCh3ZWF0aGVyRm9ybSwgJ3N1Ym1pdCcsICdzdWJtaXQnLCAnc3VibWl0Jyk7XG5cbiAgICB3ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBnZXRXZWF0aGVyRGF0YSgpfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbi1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiICsgbG9jYXRpb24gKyBcIiZBUFBJRD1kNDMxZWJkMGJiOWRkMDAxMzZlNmQ5YzljNjA1ZDAwNlwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgYWRkRGF0YVRvU2NyZWVuKHdlYXRoZXJEYXRhKTtcbn1cblxuY29uc3QgYWRkRGF0YVRvU2NyZWVuID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY29uc3QgdGVtcEluS2VsdmluID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIGNvbnN0IHRlbXBJbkZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKCgodGVtcEluS2VsdmluLTI3My4xNSkqOSkvNSArIDMyKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihtYWluUGFnZSwgdGVtcEluRmFocmVuaGVpdCArIFwiIGRlZ3JlZXMgZmFocmVuaGVpdFwiLCAndGVtcGVyYXR1cmUtZGlzcGxheScpO1xufVxuXG5wb3B1bGF0ZUhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9