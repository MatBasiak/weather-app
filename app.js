const geocode = require('./geocode/geocode')
const yargs = require('yargs');
const request = require('request');
const config = require('./config')
const key = `${config.DARK_KEY}`;

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adress to fetch weatcher for',
            string: true
        }

    })
    .help()
    .alias('help', "h")
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2))
        
    }

});

request({
            url: `https://api.darksky.net/forecast/${key}/51.8267,22.233`,
            json: true
        }, (error, response, body) => {
            if (error) {
               console.log('unable to connect darksky servers');

            } else if (body.error === 'The given location is invalid.') {
                console.log('unable to find that address');
            } else if (body != "") {
               
                   console.log( 'temperature:', body.currently.temperature);
                   console.log( 'latitude:', body.longitude);
                 console.log('longitude:', body.currently.summary);
            }})
                
            