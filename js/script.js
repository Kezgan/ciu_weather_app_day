var icon = document.querySelector("#icon-sky")
var sky = document.querySelector('#current-sky')
var temp = document.querySelector('#temp')
var max = document.querySelector('#temp-max')
var min = document.querySelector('#temp-min')
var now = new Date()
var fecha = document.querySelector('#fecha')

// https://api.openweathermap.org/data/2.5/weather?q=northampton&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac

// https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac

/*
const api = {
  url_current: "http://api.openweathermap.org/data/2.5/weather?q=hurlingham&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac",
  url_weekly: "https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac"
}

fetch(`${api.url_current}`)
  .then(clima_actual => {return clima_actual.json();})
  .then(mostrarResultados)
;

fetch(`${api.url_weekly}`)
  .then(clima_semanal => {return clima_semanal.json();})
  .then(mostrarResultados)
;
*/

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac")
  .then(clima => {return clima.json();})
  .then(mostrarResultados)
;

function mostrarResultados(clima) {
  console.log(clima)
  fecha.innerText = fechas(now)
  icon.src = `http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`
  /*sky.innerText = `${clima.current.weather[0].main}`*/
  temp.innerHTML = `${Math.round(clima.current.temp)}<span class="grados">°c</span>`
  max.innerHTML = `${Math.round(clima.daily[0].temp.max)}<span class="grados">°c</span>`
  min.innerHTML = `${Math.round(clima.daily[0].temp.min)}<span class="grados">°c</span>`
}

function fechas(d) {
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

  var dia = dias[d.getDay()]
  var fecha = d.getDate()
  var mes = meses[d.getMonth()]
  var año = d.getFullYear()
  var hora = d.getHours()
  var hora = ("0" + hora).slice(-2)
  var minutos = d.getMinutes()
  var minutos = ("0" + minutos).slice(-2)

  return `${dia}, ${fecha} ${mes} ${año}
  ${hora}:${minutos}`
}