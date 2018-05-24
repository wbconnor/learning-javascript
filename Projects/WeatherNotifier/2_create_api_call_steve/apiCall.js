//import Request from 'superagent'

function getWeather() {
//Request
let zipCode = document.getElementById('zipCode').value

fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=6437cd4f4049f6204424b60cecd14127`)
.then((res) => res.json())
.then((res2) => {
    document.getElementById('description').innerHTML = `In ${res2.name}: it is ${res2.weather[0].description} with a temperature of, ${Math.round(100*(res2.main.temp*(9/5)-459.67))/100}`
})
.catch(function(err) {
    console.log(`error ${err}`)
});

}


