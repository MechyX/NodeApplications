
const geocode = require('./utilities/geocode')
const forecast = require('./utilities/forecast')

const address= process.argv[2]

if(!address){
  return console.log('Provide an address');
}

geocode(address,(error,{latitude,longitude,location}) =>{
  if(error){
     return console.log('error ->',error)
  }

  forecast(latitude,longitude,(error,forecastData) => {
    if(error){
    return console.log('error ->',error)
    }

      console.log(location);
      console.log(forecastData);
  })
})
