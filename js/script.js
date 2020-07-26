var sky = document.querySelector('#current-sky');
var temp = document.querySelector('#temp')

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&%20exclude=hourly&appid=6ec0c3105628563c8314d5586f05b7ac")
  .then(clima => {return clima.json();})
  .then(mostrarResultados)
;

function mostrarResultados(clima) {
  console.log(clima);
  sky.innerText = `${clima.current.weather[0].main}`;
  temp.innerText = `${Math.round(clima.current.temp - 273.15)}°C`
}