var icon_sky = document.querySelector("#icon-sky")
var current_sky = document.querySelector('#current-sky')
var temp = document.querySelector('#temp')
var maxmin = document.querySelector('#temp-max-min')
var min = document.querySelector('#temp-min')
var now = new Date()
var fecha = document.querySelector('#fecha')

var icon_hum = document.querySelector("#icon-hum")
var current_hum = document.querySelector("#dato-hum")
var desc_hum = document.querySelector("#desc-hum")

var icon_pres = document.querySelector("#icon-pres")
var current_pres = document.querySelector("#dato-pres")
var desc_pres = document.querySelector("#desc-pres")

var icon_wind = document.querySelector("#icon-wind")
var current_wind = document.querySelector("#dato-wind")
var desc_wind = document.querySelector("#desc-wind")

var icon_sunrise = document.querySelector("#icon-sunrise")
var current_sunrise = document.querySelector("#dato-sunrise")
var desc_sunrise = document.querySelector("#desc-sunrise")

var icon_sunset = document.querySelector("#icon-sunset")
var current_sunset = document.querySelector("#dato-sunset")
var desc_sunset = document.querySelector("#desc-sunset")

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

  icon_sky.src = `http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`
  current_sky.innerText = `${clima.current.weather[0].main}`
  temp.innerHTML = `${Math.round(clima.current.temp)}<span class="grados">°c</span>`
  maxmin.innerHTML = `${Math.round(clima.daily[0].temp.max)}<span class="grados">°c</span>` + " | " + `${Math.round(clima.daily[0].temp.min)}<span class="grados">°c</span>`

  icon_hum.src = `images/hum.png`
  current_hum.innerHTML = `${clima.current.humidity}%`
  desc_hum.innerHTML = "Humedad"
  icon_pres.src = `images/pres.png`
  current_pres.innerHTML = `${clima.current.pressure}hPa`
  desc_pres.innerHTML = "Presión"
  icon_wind.src = `images/wind.png`
  current_wind.innerHTML = `${Math.round(clima.current.wind_speed*3.6)}km/h`
  desc_wind.innerHTML = "Viento"

  icon_sunrise.src = `images/sunrise.png`
  current_sunrise.innerHTML = `${Math.round(clima.current.sunrise)}`
  desc_sunrise.innerHTML = "Amanecer"

  icon_sunset.src = `images/sunset.png`
  current_sunset.innerHTML = `${Math.round(clima.current.sunset)}`
  desc_sunset.innerHTML = "Atardecer"
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