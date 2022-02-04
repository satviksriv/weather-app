const request = require("request")
const geocode = require("./utils/geocode")

// const url = "http://api.weatherstack.com/current?access_key=54eb38aaee318bb2f6f8e66833c5f35c&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to weather service!`);
//     } else if (response.body.error) {
//         console.log(`Unbale to find location!`);
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
//     }
// })

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0dmlrMjIiLCJhIjoiY2t6M3h5eWFrMDMycjJ2bXQzaWJ2b2xvMiJ9.YuhFDmpeHwNu64gPLWokuw&limit=1";

// request({
//     url: geocodeURL, json: true
// }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to location services!`);
//     } else if (response.body.features.length === 0) {
//         console.log(`Unable to find location, try agin with different seacrh term!`);
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(`Longitude = ${longitude}, Latitude = ${latitude}`);
//     }
// })

geocode("India", (error, data) => {
    console.log("Error:", error);
    console.log("Data:", data);
})