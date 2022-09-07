import { fetchGeolocation, fetchWeatherData } from "../modules/fetch.js";
import { PageForecast } from "../components/PageForecast/PageForecast.js";
let cachedForecastData = {};
let listCounter = 2;
fetchGeolocation()
    .then((res) => { return res.json(); })
    .then((data) => {
    let location = data.city;
    fetchWeatherData(data.longitude, data.latitude)
        .then((res) => { return res.json(); })
        .then((data) => {
        cachedForecastData = data;
        console.log(cachedForecastData);
        let pageForecastData = data.dataseries[1];
        let forecast = new PageForecast(pageForecastData.weather, pageForecastData.temp2m, location);
        forecast.displayMainForecast(document.body);
        forecast.displayReducedForecast(document.body, cachedForecastData);
    });
});
//reference the button
//add a click listener to it
//button has a listCounter
//when list is at the start, listCounter is 2
//when button is clicked, listCounter is ++
//loop 3 times
//listCounter ++ (listCounter is now 3)
//remove child[i] from reducedForecastContainer
//make new PageForecast 
//let newReducedForecast = new PageForecast(cachedForecastData.dataseries[listCounter].weather, cachedForecastData.dataseries[listCounter].temp2m)
//display elements newReducedForecast
//newReducedForecast.displayReduced(container, listCounter-2)
