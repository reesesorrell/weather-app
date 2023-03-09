import displayAdder from "display-adder-reese";

const populateHomePage = () => {
    const mainPage = document.getElementById('content');
    const weatherForm = displayAdder.createForm(mainPage, '', 'weather-form');

    const locationLabel = document.createElement('label');
    locationLabel.textContent = "Enter your location: ";
    locationLabel.id = "location-label";
    locationLabel.htmlFor = "location";
    weatherForm.appendChild(locationLabel);

    displayAdder.createInput(weatherForm, 'text', 'location', '', 'location-input');
    displayAdder.createInput(weatherForm, 'submit', 'submit', 'submit');

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
    displayAdder.createDiv(mainPage, tempInFahrenheit + " degrees fahrenheit", 'temperature-display');
}

populateHomePage();