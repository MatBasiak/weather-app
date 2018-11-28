const request = require('request');// npm package
const key = 'AIzaSyCCtmmattvLoQZpN2ty22hUb29ssDE8f6A';// my api key from google cloud 
let address= 'pierwoszow%poland'


request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`,
    json:true
},(error , response, body)=>{
        console.log(JSON.stringify(body,undefined,2));
})  