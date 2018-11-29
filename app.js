const geocode = require('./geocode/geocode')
const yargs = require('yargs');

const weather = require('./weather/weahter')


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
        // console.log(JSON.stringify(results, undefined, 2))
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2))
                console.log(`it's currently ${(weatherResults.temperature-32)/1.8} celsjus. It feel like ${(weatherResults.apparentTemperature-32)/1.8} celsjus`);

            }


        });

    }

});