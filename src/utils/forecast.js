const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url ='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=9ed78215a1a99b32511c91e156081a1c&units=metric'
    axios.get(url,JSON)
    .then((res)=>{
        callback(undefined,' It is currently ' + res.data.main.temp+' Feels like '+res.data.main.feels_like
                +' With a '+res.data.weather[0].description )
    })
    .catch(()=>{
        callback('Unable to connect to weather service!', undefined)
    })
}

module.exports = forecast
