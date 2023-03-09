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

/***/ }),

/***/ "./src/imgs/stars.jpg":
/*!****************************!*\
  !*** ./src/imgs/stars.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f489902070b88ec4c233.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _imgs_stars_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/stars.jpg */ "./src/imgs/stars.jpg");



const populateHomePage = () => {
    const mainPage = document.getElementById('content');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(mainPage, _imgs_stars_jpg__WEBPACK_IMPORTED_MODULE_1__, 'background-image');
    const weatherForm = display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createForm(mainPage, '', 'weather-form');

    const locationInput = display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createInput(weatherForm, 'text', 'location', '', 'location-input');
    locationInput.placeholder = "Search City";

    weatherForm.addEventListener("submit", (e) => {e.preventDefault(); getWeatherData()});
}

async function getWeatherData(defualtLocation) {
    const providedLocation = document.getElementById('location-input').value;
    let location;
    if(providedLocation){
        location = providedLocation;
    }
    else {
        location = defualtLocation;
    }
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=d431ebd0bb9dd00136e6d9c9c605d006");
        const weatherData = await response.json();
        addDataToScreen(weatherData);
        console.log(weatherData);
    }
    catch {
        alert("Invalid City");
    }
}

const addDataToScreen = (weatherData) => {
    const tempInKelvin = weatherData.main.temp;
    const tempInFahrenheit = Math.round(((tempInKelvin-273.15)*9)/5 + 32);
    const cityName = weatherData.name;
    const forecast = weatherData.weather[0].main;
    const feelsLikeInKelvin = weatherData.main.feels_like;
    const feelsLikeInFahrenheit = Math.round(((feelsLikeInKelvin-273.15)*9)/5 + 32);
    const windSpeed = Math.round(weatherData.wind.speed);
    const humidity = weatherData.main.humidity;

    clearScreen();

    const mainPage = document.getElementById('content');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, cityName, 'city-display', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, tempInFahrenheit, 'temperature-display', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, "o F", 'temperature-label', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, forecast, 'forecast', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, '', 'vertical-line', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, "Feels like: " + feelsLikeInFahrenheit + "F", 'feels-like-label', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, "Wind: " + windSpeed + " MPH", 'wind-speed-label', 'text');
    display_adder_reese__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(mainPage, "Humidity: " + humidity + "%", 'humidity-label', 'text');
}

const clearScreen = () => {
    try{
        const textElements = document.getElementsByClassName('text');
        while (textElements.length > 0) {
            textElements[0].remove();
        }
    }
    catch {}
}

populateHomePage();
getWeatherData("starkville");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O1VDckQzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2YrQztBQUNKOztBQUUzQztBQUNBO0FBQ0EsSUFBSSx1RUFBd0IsV0FBVyw0Q0FBVztBQUNsRCx3QkFBd0Isc0VBQXVCOztBQUUvQywwQkFBMEIsdUVBQXdCO0FBQ2xEOztBQUVBLG1EQUFtRCxvQkFBb0IsaUJBQWlCO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGlzcGxheS1hZGRlci1yZWVzZS9kaXNwbGF5LWFkZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRpc3BsYXlBZGRlciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjcmVhdGVEaXYgPSAocGFyZW50RWxlbWVudCwgdGV4dENvbnRlbnQ9JycsIGRpdklkPScnLCBkaXZDbGFzcz0nJykgPT4ge1xuICAgICAgICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQocGFyZW50RWxlbWVudCwgJ2RpdicsIHRleHRDb250ZW50LCBkaXZJZCwgZGl2Q2xhc3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUltYWdlID0gKHBhcmVudEVsZW1lbnQsIGltYWdlU291cmNlLCBpbWFnZUlkPScnLCBpbWFnZUNsYXNzPScnKSA9PiB7XG4gICAgICAgIHZhciBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgX2FkZENsYXNzZXMobmV3SW1hZ2UsIGltYWdlQ2xhc3MpO1xuICAgICAgICBuZXdJbWFnZS5pZCA9IGltYWdlSWQ7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgICByZXR1cm4gbmV3SW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHBhcmVudEVsZW1lbnQsIG9uY2xpY2tGdW5jdGlvbiwgdGV4dENvbnRlbnQ9JycsIGJ1dHRvbklkID0gJycsIGJ1dHRvbkNsYXNzPScnKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IF9jcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQsICdidXR0b24nLCB0ZXh0Q29udGVudCwgYnV0dG9uSWQsIGJ1dHRvbkNsYXNzKTtcbiAgICAgICAgbmV3QnV0dG9uLm9uY2xpY2sgPSBvbmNsaWNrRnVuY3Rpb247XG4gICAgICAgIHJldHVybiBuZXdCdXR0b247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9IChwYXJlbnRFbGVtZW50LCB0ZXh0Q29udGVudD0nJywgZm9ybUlkPScnLCBmb3JtQ2xhc3M9JycpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQsICdmb3JtJywgdGV4dENvbnRlbnQsIGZvcm1JZCwgZm9ybUNsYXNzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9IChwYXJlbnRFbGVtZW50LCBpbnB1dFR5cGUsIGlucHV0TmFtZSwgdGV4dENvbnRlbnQ9JycsIGlucHV0SWQ9JycsIGlucHV0Q2xhc3M9JycpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBfY3JlYXRlRWxlbWVudChwYXJlbnRFbGVtZW50LCAnaW5wdXQnLCB0ZXh0Q29udGVudCwgaW5wdXRJZCwgaW5wdXRDbGFzcyk7XG4gICAgICAgIG5ld0lucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICAgIG5ld0lucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIHJldHVybiBuZXdJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRWxlbWVudCA9IChwYXJlbnRFbGVtZW50LCBlbGVtZW50VHlwZSwgdGV4dENvbnRlbnQ9JycsIGVsZW1lbnRJZD0nJywgZWxlbWVudENsYXNzPScnKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgX2FkZENsYXNzZXMobmV3RWxlbWVudCwgZWxlbWVudENsYXNzKTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGVsZW1lbnRJZDtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IF9hZGRDbGFzc2VzID0gKGVsZW1lbnQsIGNsYXNzZXMpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKG9uZUNsYXNzID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQob25lQ2xhc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZURpdiwgY3JlYXRlSW1hZ2UsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlRm9ybSwgY3JlYXRlSW5wdXR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUFkZGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBkaXNwbGF5QWRkZXIgZnJvbSBcImRpc3BsYXktYWRkZXItcmVlc2VcIjtcbmltcG9ydCBzdGFyUGljdHVyZSBmcm9tIFwiLi9pbWdzL3N0YXJzLmpwZ1wiO1xuXG5jb25zdCBwb3B1bGF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlSW1hZ2UobWFpblBhZ2UsIHN0YXJQaWN0dXJlLCAnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIGNvbnN0IHdlYXRoZXJGb3JtID0gZGlzcGxheUFkZGVyLmNyZWF0ZUZvcm0obWFpblBhZ2UsICcnLCAnd2VhdGhlci1mb3JtJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZGlzcGxheUFkZGVyLmNyZWF0ZUlucHV0KHdlYXRoZXJGb3JtLCAndGV4dCcsICdsb2NhdGlvbicsICcnLCAnbG9jYXRpb24taW5wdXQnKTtcbiAgICBsb2NhdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggQ2l0eVwiO1xuXG4gICAgd2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKTsgZ2V0V2VhdGhlckRhdGEoKX0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShkZWZ1YWx0TG9jYXRpb24pIHtcbiAgICBjb25zdCBwcm92aWRlZExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWlucHV0JykudmFsdWU7XG4gICAgbGV0IGxvY2F0aW9uO1xuICAgIGlmKHByb3ZpZGVkTG9jYXRpb24pe1xuICAgICAgICBsb2NhdGlvbiA9IHByb3ZpZGVkTG9jYXRpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IGRlZnVhbHRMb2NhdGlvbjtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArIGxvY2F0aW9uICsgXCImQVBQSUQ9ZDQzMWViZDBiYjlkZDAwMTM2ZTZkOWM5YzYwNWQwMDZcIik7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBhZGREYXRhVG9TY3JlZW4od2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgYWxlcnQoXCJJbnZhbGlkIENpdHlcIik7XG4gICAgfVxufVxuXG5jb25zdCBhZGREYXRhVG9TY3JlZW4gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB0ZW1wSW5LZWx2aW4gPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gICAgY29uc3QgdGVtcEluRmFocmVuaGVpdCA9IE1hdGgucm91bmQoKCh0ZW1wSW5LZWx2aW4tMjczLjE1KSo5KS81ICsgMzIpO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCBmZWVsc0xpa2VJbktlbHZpbiA9IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBjb25zdCBmZWVsc0xpa2VJbkZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKCgoZmVlbHNMaWtlSW5LZWx2aW4tMjczLjE1KSo5KS81ICsgMzIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuXG4gICAgY2xlYXJTY3JlZW4oKTtcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KG1haW5QYWdlLCBjaXR5TmFtZSwgJ2NpdHktZGlzcGxheScsICd0ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihtYWluUGFnZSwgdGVtcEluRmFocmVuaGVpdCwgJ3RlbXBlcmF0dXJlLWRpc3BsYXknLCAndGV4dCcpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYobWFpblBhZ2UsIFwibyBGXCIsICd0ZW1wZXJhdHVyZS1sYWJlbCcsICd0ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihtYWluUGFnZSwgZm9yZWNhc3QsICdmb3JlY2FzdCcsICd0ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihtYWluUGFnZSwgJycsICd2ZXJ0aWNhbC1saW5lJywgJ3RleHQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KG1haW5QYWdlLCBcIkZlZWxzIGxpa2U6IFwiICsgZmVlbHNMaWtlSW5GYWhyZW5oZWl0ICsgXCJGXCIsICdmZWVscy1saWtlLWxhYmVsJywgJ3RleHQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KG1haW5QYWdlLCBcIldpbmQ6IFwiICsgd2luZFNwZWVkICsgXCIgTVBIXCIsICd3aW5kLXNwZWVkLWxhYmVsJywgJ3RleHQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KG1haW5QYWdlLCBcIkh1bWlkaXR5OiBcIiArIGh1bWlkaXR5ICsgXCIlXCIsICdodW1pZGl0eS1sYWJlbCcsICd0ZXh0Jyk7XG59XG5cbmNvbnN0IGNsZWFyU2NyZWVuID0gKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dCcpO1xuICAgICAgICB3aGlsZSAodGV4dEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCB7fVxufVxuXG5wb3B1bGF0ZUhvbWVQYWdlKCk7XG5nZXRXZWF0aGVyRGF0YShcInN0YXJrdmlsbGVcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9