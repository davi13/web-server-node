const request = require('request');
const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZGF2aTEzIiwiYSI6ImNqemVqZ3FlOTAyeHUzbXFrbno5aTR1dTYifQ.Kp4gmUGKRfyj30HN2z0X3A`;


    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location service', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find to location ,Try another seach', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode