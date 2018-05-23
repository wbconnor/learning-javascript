const request = require('superagent');

function getWeather(zipCode) {
request
.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=6437cd4f4049f6204424b60cecd14127`)
.then(function(res) {
  console.log(res.body.wind)
})
.catch(function(err) {
  console.log(`error ${err}`)
});

}

getWeather(43220)
