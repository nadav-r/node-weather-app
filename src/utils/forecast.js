const request = require('request');
const secret =process.env.DARK_SKY_SECRET
const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/${secret}/${encodeURIComponent(longitude)},${encodeURIComponent(latitude)}?units=si`;
    request({url, json: true}, (error, { body })=>{
        if(error){
            callback('unable to connect to forecast services');
        }else if (body.error){
            callback('unable to find location');
        }else{
            callback(undefined, 
                `${body.daily.data[0].summary} \nIt is currently ${body.currently.temperature} degrees and there is ${body.currently.precipProbability}% chance for rain.`)
        }
    })

};

module.exports = forecast;