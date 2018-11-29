const request = require('request');
const config = require('../config')
const key = `${config.DARK_KEY}`;


const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        // if (error) {
        //     console.log('unable to connect darksky servers');

        // } else if (body.error === 'The given location is invalid.'//response.statusCode===400) {
        //     console.log('unable to fetch weather');
        // } else if (response.statusCode === 200) {

        //     console.log('temperature:', body.currently.temperature);
        //     console.log('latitude:', body.longitude);
        //     console.log('summary:', body.currently.summary);
        // }

        if (!error && response.statusCode === 200) {
            callback(undefined, {

                temperature: body.currently.temperature,
                latitude: body.longitude,
                summary: body.currently.summary,
                apparentTemperature: body.currently.apparentTemperature

            })


        } else {
            callback('Enable to fetch the weather.');
        }
    });
};

module.exports.getWeather = getWeather;