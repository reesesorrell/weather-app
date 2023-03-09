import displayAdder from "display-adder-reese";
import starPicture from "./imgs/stars.jpg";

const populateHomePage = () => {
    const mainPage = document.getElementById('content');
    displayAdder.createImage(mainPage, starPicture, 'background-image');
    const weatherForm = displayAdder.createForm(mainPage, '', 'weather-form');

    const locationInput = displayAdder.createInput(weatherForm, 'text', 'location', '', 'location-input');
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
    displayAdder.createDiv(mainPage, cityName, 'city-display', 'text');
    displayAdder.createDiv(mainPage, tempInFahrenheit, 'temperature-display', 'text');
    displayAdder.createDiv(mainPage, "o F", 'temperature-label', 'text');
    displayAdder.createDiv(mainPage, forecast, 'forecast', 'text');
    displayAdder.createDiv(mainPage, '', 'vertical-line', 'text');
    displayAdder.createDiv(mainPage, "Feels like: " + feelsLikeInFahrenheit + "F", 'feels-like-label', 'text');
    displayAdder.createDiv(mainPage, "Wind: " + windSpeed + " MPH", 'wind-speed-label', 'text');
    displayAdder.createDiv(mainPage, "Humidity: " + humidity + "%", 'humidity-label', 'text');
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