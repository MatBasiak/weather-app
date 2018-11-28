const request = require('request');
const config= require('./config.js')
const key = `${config.MY_KEY}`; // my api key from google cloud 


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
    if(error){
        console.log('unable to connect to google servers');
        
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('unable to find that address');
    }else if(body.status === 'OK'){
        
    // console.log(JSON.stringify(body,undefined,2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`The location of ${body.results[0].address_components[0].long_name} is `);
    console.log(`Lattitude is ${body.results[0].geometry.location.lat} `);
    console.log(`Longitude is ${body.results[0].geometry.location.lng}`);
    }
});