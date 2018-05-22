function fetch_weather() {
  let url = "http://api.openweathermap.org/data/2.5/weather?zip=43211&APPID=6437cd4f4049f6204424b60cecd14127";

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

fetch_weather();
