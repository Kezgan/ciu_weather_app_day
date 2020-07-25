// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.5910185&lon=-58.638227&%20exclude=hourly&appid=6ec0c3105628563c8314d5586f05b7ac', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()