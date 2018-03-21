const DAYS_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const KELVIN = 273.15;


async function getWeatherForWeek(cityID) {
    let data = await fetch(`${WEATHER_FOR_WEEK_API}&id=${cityID}`);
    return data;
}

async function getCurrentWeather(cityID) {
    let data = await fetch(`${CURRENT_API_URL}&id=${cityID}`);
    return data;
}

function getCityWeather(cityID) {
    let dataForWeek = getWeatherForWeek(cityID).then(response => {
        response.json().then(function(data) {
            putDataForWeekToHTML(data);
        });
    });

    let currentData = getCurrentWeather(cityID).then(response => {
        response.json().then(function(data) {
            putCurrentDataToHTML(data);
        });
    });
}

function getDate(dateListItem) {
    let resultDate = "";
    let date = new Date(dateListItem.dt_txt);
    resultDate = `${DAYS_NAME[date.getDay()]}`;
    return resultDate;
}

function getIconSrc(icon) {
    return `https://openweathermap.org/img/w/${icon}.png`;
}

function getTemperature(temperature) {
    return `${Math.round(temperature-KELVIN)}<sup>°</sup>`;
}

function getPressure(pressure) {
    return `${Math.round(pressure)} hPa`;
}

function putDataForWeekToHTML(data) {
    let dataContainers = document.getElementsByClassName("day-list-item-day");
    for (let i = 0; i < dataContainers.length; i++){
        dataContainers[i].innerHTML = getDate(data.list[i*8]);
    }

    let iconContainers = document.getElementsByClassName("day-list-item-icon");
    for (let i = 0; i < iconContainers.length; i++){
        iconContainers[i].src = getIconSrc(data.list[i*8].weather[0].icon);
    }

    let maxTempContainers = document.getElementsByClassName("day-list-item-max");
    for (let i = 0; i < maxTempContainers.length; i++){
        maxTempContainers[i].innerHTML = getTemperature(data.list[i*8].main.temp_max);
    }

    let minTempContainers = document.getElementsByClassName("day-list-item-min");
    for (let i = 0; i < minTempContainers.length; i++){
        minTempContainers[i].innerHTML = getTemperature(data.list[i*8].main.temp_min);
    }

    let pressureContainers = document.getElementsByClassName("day-list-item-pressure");
    for (let i = 0; i < pressureContainers.length; i++){
        pressureContainers[i].innerHTML = getPressure(data.list[i*8].main.pressure);
    }
}

function putCurrentDataToHTML(data) {
    console.log(data);
    let cityNameContainer = document.getElementsByClassName("city-name");
    cityNameContainer[0].innerHTML = `${data.name}, ${data.sys.country}`;

    let currentDataContainer = document.getElementsByClassName("current-date");
    let currentDate = new Date();
    currentDataContainer[0].innerHTML = `${currentDate.getDate()} ${MONTH_NAMES[currentDate.getMonth()]}, ${DAYS_NAME[currentDate.getDay()]}`

    let currentWeatherContainer = document.getElementsByClassName("current-weather");
    currentWeatherContainer[0].innerHTML = data.weather[0].main;

    let currentWeatherIconContainer = document.getElementsByClassName("current-weather-icon");
    currentWeatherIconContainer[0].src = getIconSrc(data.weather[0].icon);

    let currentHumidityContainer = document.getElementsByClassName("current-humidity");
    currentHumidityContainer[0].innerHTML = `Humidity: ${data.main.humidity}%`;

    let currentPressureContainer = document.getElementsByClassName("current-pressure");
    currentPressureContainer[0].innerHTML = `Pressure: ${getPressure(data.main.pressure)}`;

    let currentTempContainer = document.getElementsByClassName("current-temperature");
    currentTempContainer[0].innerHTML = `Temperature: ${getTemperature(data.main.temp)}`;
}

getCityWeather(2643744);