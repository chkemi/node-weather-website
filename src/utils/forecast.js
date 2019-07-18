const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
  `https://api.darksky.net/forecast/52998d80a7ed261d46e3079f224f9d2b/${latitude},${longitude}?units=si`;

request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
        callback('Unable to find location', undefined);
    } else {
        const today = body.currently;
        callback(undefined, `${body.daily.data[0].summary} It is currently ${today.temperature} degrees out.
        This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. 
        There is a ${today.precipProbability}% chance of rain.`);
    }
});
}

module.exports = forecast;