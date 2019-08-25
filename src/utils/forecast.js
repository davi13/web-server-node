const request = require('request');
const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/62b6f3d89534c3cabdee2373423dbd76/' + latitude + ',' + logitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. the max temperature is ' + body.daily.data[0].temperatureHigh + ' and the low temperature is ' + body.daily.data[0].temperatureLow);
        }
    })
}
module.exports = forecast;


