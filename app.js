const geocode = require('./geocode/geocode')
const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address);