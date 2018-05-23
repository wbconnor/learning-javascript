function fetch_weather(zip) {
  let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=6437cd4f4049f6204424b60cecd14127";

  const el = document.getElementById('weather');

  fetch(url)
  .then((res) => res.json())
  .then(function(data) {
    console.log(data.weather[0]);
    el.innerHTML = data.weather[0].description;
    document.getElementById("icon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  })
  .catch(function(error) {
    console.log(error);
  })
}

// basic validation to see if input is a zip code
// from https://stackoverflow.com/a/546304/3954106
function isValidUSZip(sZip) {
   return /^\d{5}(-\d{4})?$/.test(sZip);
}

function getWeather() {
  const zip = document.getElementById('zip').value;

  if(isValidUSZip(zip)) {
    fetch_weather(zip);
  }
  else {
    document.getElementById('weather').innerHTML = "";
    document.getElementById("icon").src = "";
    alert("Invalid zip code");
  }
}
