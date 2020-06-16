const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2U3YSIsImEiOiJja2JmeWdrZW0xMGlzMnhtMmxldnAwZm02In0.L2nagTVcu5nRjB7G4RL4ow'
    axios
    .get(url,JSON)
    .then((res)=>{
        if(res.data.features.length === 0){
            return callback('Unable to find location. Try another search.', undefined)
        }
        callback(undefined, {
            latitude: res.data.features[0].center[1],
            longitude: res.data.features[0].center[0],
            location: res.data.features[0].place_name
        })
    })
    .catch(()=>{
        callback('Unable to connect to location services!', undefined)
    })
}

module.exports = geocode
