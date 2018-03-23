const VLADIVOSTOK = {
    currentWeather: {
        cityName: "Vladivostok, RU",
        currentDay: getDate(new Date(), 0),
        currentWeatherDescription: "Snow",
        currentWeatherIcon: "13d.png",
        currentTemp: "-5",
        currentHumidity: "78",
        currentPressure: "1021",
    },
    dailyWeather: {
        list: [
            {
                date: getDate(new Date(),0),
                icon: "13d.png",
                maxTemp: "0",
                minTemp: "-10",
                pressure: "1059"
            },
            {
                date: getDate(new Date(),1),
                icon: "13d.png",
                maxTemp: "-3",
                minTemp: "-9",
                pressure: "980"
            },
            {
                date: getDate(new Date(),2),
                icon: "04d.png",
                maxTemp: "0",
                minTemp: "-1",
                pressure: "1039"
            },
            {
                date: getDate(new Date(),3),
                icon: "04d.png",
                maxTemp: "1",
                minTemp: "-2",
                pressure: "1079"
            },
            {
                date: getDate(new Date(),4),
                icon: "13d.png",
                maxTemp: "2",
                minTemp: "0",
                pressure: "1049"
            },
        ]
    }
};

const DUBAI = {
    currentWeather: {
        cityName: "Dubai, UAE",
        currentDay: getDate(new Date(), 0),
        currentWeatherDescription: "Sunny",
        currentWeatherIcon: "01d.png",
        currentTemp: "28",
        currentHumidity: "20",
        currentPressure: "980",
    },
    dailyWeather: {
        list: [
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "35",
                minTemp: "25",
                pressure: "1059"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "37",
                minTemp: "30",
                pressure: "980"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "30",
                minTemp: "24",
                pressure: "1039"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "28",
                minTemp: "25",
                pressure: "1079"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "35",
                minTemp: "31",
                pressure: "1049"
            },
        ]
    }
};

const TOKYO = {
    currentWeather: {
        cityName: "Tokyo, JAP",
        currentDay: getDate(new Date(), 0),
        currentWeatherDescription: "Broken clouds",
        currentWeatherIcon: "04d.png",
        currentTemp: "13",
        currentHumidity: "93",
        currentPressure: "997",
    },
    dailyWeather: {
        list: [
            {
                date: getDate(new Date(),1),
                icon: "10d.png",
                maxTemp: "13",
                minTemp: "9",
                pressure: "1005"
            },
            {
                date: getDate(new Date(),1),
                icon: "10d.png",
                maxTemp: "11",
                minTemp: "8",
                pressure: "1022"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "11",
                minTemp: "10",
                pressure: "1031"
            },
            {
                date: getDate(new Date(),1),
                icon: "01d.png",
                maxTemp: "14",
                minTemp: "9",
                pressure: "1033"
            },
            {
                date: getDate(new Date(),1),
                icon: "10d.png",
                maxTemp: "12",
                minTemp: "9",
                pressure: "1022"
            },
        ]
    }
};
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser());

function getDate(date,index) {
    date.setDate(date.getDay() + index);
    return date;
}

app.get('/vladivostok', (request, response) => {
    response.send(JSON.stringify(VLADIVOSTOK));
});
app.get('/dubai', (request, response) => {
    response.send(JSON.stringify(DUBAI));
});

app.get('/tokyo', (request, response) => {
    response.send(JSON.stringify(TOKYO));
});
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
