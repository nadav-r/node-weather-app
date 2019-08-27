const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmFkMjIiLCJhIjoiY2p4b3BpM2U2MDg1cTNicGY4dmUwMmozdCJ9.9f9O9xMvX9rcbth_4DR5og&limit=1`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to location servies', undefined);
        } else if (body.features.length === 0) {
            callback('unable to find location. Try another Search', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;