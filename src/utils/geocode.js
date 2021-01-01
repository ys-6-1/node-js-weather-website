const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoieXMtMDYiLCJhIjoiY2tqOW8wcW96MHI5ZTJ3cXNlajVxY3ViMiJ9.aEb5jy3Ur3c3LTURt5uWDA&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unbale to connect to locatoin services.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const { center, place_name } = body.features[0];
            const latitude = center[1]
            const longtitude = center[0]
            const location = place_name
            callback(undefined, {
                latitude,
                longtitude,
                location } )
}
    })
}

module.exports = geocode