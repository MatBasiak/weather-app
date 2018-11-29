const request = require('request');
const config = require('../config')
const key = `${config.MY_KEY}`; // my api key from google cloud 


const geocodeAddress = (address, callback) => {

    encodedAddress = encodeURIComponent(address); // add % in place of " " oposite function is decodeUriComponent which put " " in place of %

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google servers');

        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })

            // console.log(JSON.stringify(body,undefined,2));
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`The location of ${body.results[0].address_components[0].long_name} is `);
            // console.log(`Lattitude is ${body.results[0].geometry.location.lat} `);
            // console.log(`Longitude is ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports = {
    geocodeAddress
}