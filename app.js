const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=54eb38aaee318bb2f6f8e66833c5f35c&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})