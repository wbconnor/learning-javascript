//import Request from 'superagent'

function getWeather() {
//Request
let zipCode = document.getElementById('zipCode').value

fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=6437cd4f4049f6204424b60cecd14127`)
.then((res) => res.json())
.then((res2) => {
    console.log(res2)
    var utcSecondsSunrise = res2.sys.sunrise
    var sunRiseEpoch = new Date(0)
    var utcSecondsSunset = res2.sys.sunset
    var sunSetEpoch = new Date(0)
    document.getElementById('list-home').innerHTML = `In ${res2.name}: it is ${res2.weather[0].description} with a temperature of, ${Math.round(100*(res2.main.temp*(9/5)-459.67))/100}
    
    <br>sunrise: ${new Date(sunRiseEpoch.setUTCSeconds(utcSecondsSunrise))}
    <br>sunset: ${new Date(sunSetEpoch.setUTCSeconds(utcSecondsSunset))}`
})
.catch(function(err) {
    console.log(`error ${err}`)
});

}


