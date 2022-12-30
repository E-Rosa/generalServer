"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWeatherData = exports.fetchGeolocation = void 0;
function fetchGeolocation() {
    return fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=54d34da6720e4501a1c78bbf2e86f4fd');
}
exports.fetchGeolocation = fetchGeolocation;
function fetchWeatherData(lon, lat) {
    return fetch(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`);
}
exports.fetchWeatherData = fetchWeatherData;
