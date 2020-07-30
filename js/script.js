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

var icon_clouds = document.querySelector("#icon-clouds")
var current_clouds = document.querySelector("#dato-clouds")
var desc_clouds = document.querySelector("#desc-clouds")

var icon_sunrise = document.querySelector("#icon-sunrise")
var current_sunrise = document.querySelector("#dato-sunrise")
var desc_sunrise = document.querySelector("#desc-sunrise")

var icon_sunset = document.querySelector("#icon-sunset")
var current_sunset = document.querySelector("#dato-sunset")
var desc_sunset = document.querySelector("#desc-sunset")

var icon_array_1 = document.querySelector("#icon-array-1")
var dia_array_1 = document.querySelector("#dia-array-1")
var maxmin_array_1 = document.querySelector("#maxmin-array-1")

var icon_array_2 = document.querySelector("#icon-array-2")
var dia_array_2 = document.querySelector("#dia-array-2")
var maxmin_array_2 = document.querySelector("#maxmin-array-2")

var icon_array_3 = document.querySelector("#icon-array-3")
var dia_array_3 = document.querySelector("#dia-array-3")
var maxmin_array_3 = document.querySelector("#maxmin-array-3")

var icon_array_4 = document.querySelector("#icon-array-4")
var dia_array_4 = document.querySelector("#dia-array-4")
var maxmin_array_4 = document.querySelector("#maxmin-array-4")

var icon_array_5 = document.querySelector("#icon-array-5")
var dia_array_5 = document.querySelector("#dia-array-5")
var maxmin_array_5 = document.querySelector("#maxmin-array-5")

var icon_array_6 = document.querySelector("#icon-array-6")
var dia_array_6 = document.querySelector("#dia-array-6")
var maxmin_array_6 = document.querySelector("#maxmin-array-6")

var icon_array_7 = document.querySelector("#icon-array-7")
var dia_array_7 = document.querySelector("#dia-array-7")
var maxmin_array_7 = document.querySelector("#maxmin-array-7")

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&units=metric&appid=6ec0c3105628563c8314d5586f05b7ac")
  .then(clima => {return clima.json();})
  .then(mostrarResultados)
  .then(dtSlider)
;

function mostrarResultados(clima) {
  console.log(clima)

  fecha.innerText = fechas(now)

  /* Cielo */
  icon_sky.src = `http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`
  current_sky.innerText = `${clima.current.weather[0].main}`

  /* Temperatura actual */
  temp.innerHTML = `${Math.round(clima.current.temp)}<span class="grados">°c</span>`

  /* Temperatura maxima y minima */
  maxmin.innerHTML = `${Math.round(clima.daily[0].temp.max)}<span class="grados">°c</span>` + " / " + `${Math.round(clima.daily[0].temp.min)}<span class="grados">°c</span>`

  /* Humedad */ 
  icon_hum.src = `images/hum.png`
  current_hum.innerHTML = `${clima.current.humidity}%`
  desc_hum.innerHTML = "Humedad"

  /* Presión */
  icon_pres.src = `images/pres.png`
  current_pres.innerHTML = `${clima.current.pressure}hPa`
  desc_pres.innerHTML = "Presión"

  /* Viento */
  icon_wind.src = `images/wind.png`
  current_wind.innerHTML = `${Math.round(clima.current.wind_speed*3.6)}km/h`
  desc_wind.innerHTML = "Viento"

  /* Porcentaje de nubes */
  icon_clouds.src = `images/clouds.png`
  current_clouds.innerHTML = `${clima.current.clouds}%`
  desc_clouds.innerHTML = "Nubes"

  /* Amanecer */
  icon_sunrise.src = `images/sunrise.png`

  var unix_sunrise = `${clima.current.sunrise}`
  var date_sunrise = new Date(unix_sunrise*1000)
  var hour_sunrise = date_sunrise.getHours()
  hour_sunrise = ("0" + hour_sunrise).slice(-2)
  var min_sunrise = date_sunrise.getMinutes()
  min_sunrise = ("0" + min_sunrise).slice(-2)

  current_sunrise.innerHTML = `${hour_sunrise}:${min_sunrise}`
  desc_sunrise.innerHTML = "Amanecer"

  /* Atardecer */
  icon_sunset.src = `images/sunset.png`

  var unix_sunset = `${clima.current.sunset}`
  var date_sunset = new Date(unix_sunset*1000)
  var hour_sunset = date_sunset.getHours()
  var hour_sunset = ("0" + hour_sunset).slice(-2)
  var min_sunset = date_sunset.getMinutes()
  var min_sunset = ("0" + min_sunset).slice(-2)

  current_sunset.innerHTML = `${hour_sunset}:${min_sunset}`
  desc_sunset.innerHTML = "Atardecer"

  /* Slider */
  icon_array_1.src = `http://openweathermap.org/img/wn/${clima.daily[1].weather[0].icon}@2x.png`
  dia_array_1.innerHTML = dtSlider(clima, 1)
  maxmin_array_1.innerHTML = `${Math.round(clima.daily[1].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[1].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_2.src = `http://openweathermap.org/img/wn/${clima.daily[2].weather[0].icon}@2x.png`
  dia_array_2.innerHTML = dtSlider(clima, 2)
  maxmin_array_2.innerHTML = `${Math.round(clima.daily[2].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[2].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_3.src = `http://openweathermap.org/img/wn/${clima.daily[3].weather[0].icon}@2x.png`
  dia_array_3.innerHTML = dtSlider(clima, 3)
  maxmin_array_3.innerHTML = `${Math.round(clima.daily[3].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[3].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_4.src = `http://openweathermap.org/img/wn/${clima.daily[4].weather[0].icon}@2x.png`
  dia_array_4.innerHTML = dtSlider(clima, 4)
  maxmin_array_4.innerHTML = `${Math.round(clima.daily[4].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[4].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_5.src = `http://openweathermap.org/img/wn/${clima.daily[5].weather[0].icon}@2x.png`
  dia_array_5.innerHTML = dtSlider(clima, 5)
  maxmin_array_5.innerHTML = `${Math.round(clima.daily[5].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[5].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_6.src = `http://openweathermap.org/img/wn/${clima.daily[6].weather[0].icon}@2x.png`
  dia_array_6.innerHTML = dtSlider(clima, 6)
  maxmin_array_6.innerHTML = `${Math.round(clima.daily[6].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[6].temp.min)}<span class="grados-minmax">°c ↓</span>`

  icon_array_7.src = `http://openweathermap.org/img/wn/${clima.daily[7].weather[0].icon}@2x.png`
  dia_array_7.innerHTML = dtSlider(clima, 7)
  maxmin_array_7.innerHTML = `${Math.round(clima.daily[7].temp.max)}<span class="grados-minmax">°c ↑</span>` + '&nbsp' + '&nbsp' + `${Math.round(clima.daily[7].temp.min)}<span class="grados-minmax">°c ↓</span>`
}

function fechas(d) {
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

  var dia = dias[d.getDay()]
  var fecha = d.getDate()
  var mes = meses[d.getMonth()]
  var año = d.getFullYear()
  var hora = d.getHours()
  hora = ("0" + hora).slice(-2)
  var minutos = d.getMinutes()
  minutos = ("0" + minutos).slice(-2)

  return `${dia}, ${fecha} ${mes} ${año}
  ${hora}:${minutos}`
}

function dtSlider(clima, n) {
  var unix_slider = `${clima.daily[n].dt}`
  var date_slider = new Date(unix_slider*1000)
  
  var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

  var dia_slider = dias[date_slider.getDay()]
  var num_slider = date_slider.getDate()

  return `${dia_slider}, ${num_slider}`
}