const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5531e350466f43637f9822f86df3a6d0&query=${latitude},${longtitude}&units=f`
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { current }  = body
            callback(undefined, `${current.weather_descriptions[0]}. The temparature is ${current.temperature} degree. It feels like it is ${current.feelslike} degree.`)
        }
    })
}

module.exports = forecast