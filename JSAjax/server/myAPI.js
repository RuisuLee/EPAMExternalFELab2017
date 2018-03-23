const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/weather/:name', (request, response) => {
    let city = request.params.name;
    switch (city) {
        case "vladivostok":
            fs.readFile('../json/vladivostok.json', (err, data) => {
                if (err) throw err;
                response.send(data);
            });
            break;
        case "dubai":
            fs.readFile('../json/dubai.json', (err, data) => {
                if (err) throw err;
                response.send(data);
            });
            break;
        case "tokyo":
            fs.readFile('../json/tokyo.json', (err, data) => {
                if (err) throw err;
                response.send(data);
            });
            break;
        default:
            response.send(response.errorCode);
    }
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
