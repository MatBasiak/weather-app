const request = require('request'); // npm package
const key = 'AIzaSyCCtmmattvLoQZpN2ty22hUb29ssDE8f6A'; // my api key from google cloud 


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


    let address=encodeURIComponent(argv.address);// add % in place of " " oposite function is decodeUriComponent which put " " in place of %

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body,undefined,2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`The location of ${body.results[0].address_components[0].long_name} is `);
    console.log(`Lattitude is ${body.results[0].geometry.location.lat} `);
    console.log(`Longitude is ${body.results[0].geometry.location.lng}`);
})